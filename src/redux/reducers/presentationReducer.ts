import { Socket, io } from 'socket.io-client';

import presentationActions from '../actions/presentationActions';

interface InitialStateDefaultObject {
  socket: Socket;
  currentSlideNumber: number;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  socket: io('http://localhost:3001'),
  currentSlideNumber: 0,
};

const presentationReducer = (state = INITIAL_STATE, action: { type: string, payload: number }) => {
  switch (action.type) {
    case presentationActions.MOVE_SLIDE:
      return {
        ...state,
        currentSlideNumber: state.currentSlideNumber + action.payload,
      };

    default:
      return state;
  }
}

export default presentationReducer;
