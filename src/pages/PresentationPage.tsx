import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Presentation from '../components/Presentation';

import { Dispatch } from 'redux';
import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

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

/*
const PresentationPage = (): JSX.Element => {
  const { socket, currentRoom, currentSlideNumber } = useSelector((state: RootState) => state.presentation);
  const dispatch = useDispatch();

  if (currentRoom === -1) return <Navigate to="/presentation" replace />;

  useEffect(() => {
    socket.emit('join_presentation', currentRoom);
  }, []);
  
  useEffect(() => {
    socket.on('move_slide', (data: number) => {
      if (currentSlideNumber + data >= 0 && currentSlideNumber + data < presentation.slides.length + 1) {
        dispatch({
          type: presentationActions.MOVE_SLIDE,
          payload: data,
        });
      }
    });

    socket.on('reset_presentation', () => {
      dispatch({
        type: presentationActions.RESET_PRESENTATION,
      });
    });
  }, [socket]);

  return (
    <Presentation presentation={presentation} slideNumber={currentSlideNumber} />
  );
}
*/

class PresentationPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.socket.emit('join_presentation', this.props.currentRoom);
    this.props.socket.on('move_slide', () => console.log('a'));
  }

  render() {
    return (
      <Presentation presentation={presentation} />
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
      data: data,
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationPage);
