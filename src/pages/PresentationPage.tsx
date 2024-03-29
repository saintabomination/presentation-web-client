import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from 'axios';

import Presentation from '../components/Presentation';

import { Dispatch } from 'redux';
import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

/* eslint-disable  @typescript-eslint/no-explicit-any */

class PresentationPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      presentation: { slides: []},
      socket: io('http://localhost:3001'),
    }
  }

  moveSlide = (data: number) => {
    if (this.props.currentSlideNumber + data < this.state.presentation.slides.length && this.props.currentSlideNumber + data >= 0)
      this.props.moveSlide(data);
  }

  resetPresentation = () => {
    this.props.resetPresentation();
  }

  componentDidMount() {
    this.state.socket.emit('join_presentation', this.props.currentRoom);
    this.state.socket.on('move_slide', (data: number) => this.moveSlide(data));
    this.state.socket.on('reset_presentation', () => this.resetPresentation());

    axios.get(`http://localhost:3002/get_presentation?id=${this.props.currentRoom}`)
      .then(res => {
        this.setState({
          presentation: res.data.presentation,
        });
      });
  }
  
  componentWillUnmount() {
    this.state.socket.emit('leave_presentation', this.props.currentRoom);
  }

  render() {
    if (this.props.currentRoom === -1) return <Navigate to="/presentation" replace />;
    if (!this.state.presentation) {
      alert('That presentation does not exist.');
      return <Navigate to="/presentation" replace />;
    }

    return (
      <Presentation presentation={this.state.presentation} slideNumber={this.props.currentSlideNumber} />
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return state.presentation;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    moveSlide: (data: number) => dispatch({
      type: presentationActions.MOVE_SLIDE,
      payload: data,
    }),
    resetPresentation: () => dispatch({
      type: presentationActions.RESET_PRESENTATION,
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationPage);
