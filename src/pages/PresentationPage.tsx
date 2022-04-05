import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import Presentation from '../components/Presentation';

import { Dispatch } from 'redux';
import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

class PresentationPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      presentation: { slides: []}
    }
  }

  moveSlide = (data: number) => {
    this.props.moveSlide(data);
  }

  resetPresentation = () => {
    this.props.resetPresentation();
  }

  componentDidMount() {
    this.props.socket.emit('join_presentation', this.props.currentRoom);
    this.props.socket.on('move_slide', (data: number) => this.moveSlide(data));
    this.props.socket.on('reset_presentation', () => this.resetPresentation());

    axios.get(`http://localhost:3002/get_presentation?id=${this.props.currentRoom}`)
      .then(res => {
        this.setState({
          presentation: res.data.presentation,
        });
      });
  }
  
  componentWillUnmount() {
    this.props.socket.emit('leave_presentation', this.props.currentRoom);
  }

  render() {
    if (this.props.currentRoom === -1) return <Navigate to="/presentation" replace />;

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
