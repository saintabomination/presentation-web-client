import { Socket, io } from 'socket.io-client';

import presentationActions from '../actions/presentationActions';

interface InitialStateDefaultObject {
  socket: Socket;
  currentRoom: number;
  currentSlideNumber: number;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  socket: io('http://localhost:3001'),
  currentRoom: -1,
  currentSlideNumber: 0,
};

const presentationReducer = (state = INITIAL_STATE, action: { type: string, payload: number }) => {
  switch (action.type) {
    case presentationActions.SET_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      }

    case presentationActions.MOVE_SLIDE:
      return {
        ...state,
        currentSlideNumber: state.currentSlideNumber + action.payload,
      };

    case presentationActions.RESET_PRESENTATION:
      return {
        ...state,
        currentSlideNumber: 0,
      };

    default:
      return state;
  }
}

export default presentationReducer;
