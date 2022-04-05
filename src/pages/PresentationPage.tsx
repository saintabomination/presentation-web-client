import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Presentation from '../components/Presentation';

import { Dispatch } from 'redux';
import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

// Sample Presentation JSON
const presentation = {
  slides: [
    {
      title: 'Intro',
    },
    {
      title: 'Slide 1',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
        'Point 5',
      ],
    },
    {
      title: 'Slide 2',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],
    },
    {
      title: 'Slide 3',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
      ],
    },
    {
      title: 'Slide 4',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
        'Point 5',
      ],
    },
  ],
};

class PresentationPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  moveSlide = (data: number) => {
    this.props.moveSlide(data);
    console.log(this.props);
  }

  resetPresentation = () => {
    this.props.resetPresentation();
    console.log(this.props);
  }

  componentDidMount() {
    this.props.socket.emit('join_presentation', this.props.currentRoom);
    this.props.socket.on('move_slide', (data: number) => this.moveSlide(data));
    this.props.socket.on('reset_presentation', () => this.resetPresentation());
  }

  render() {
    if (this.props.currentRoom === -1) return <Navigate to="/presentation" replace />;

    return (
      <Presentation presentation={presentation} slideNumber={this.props.currentSlideNumber} />
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
