import { Socket, io } from 'socket.io-client';

interface InitialStateDefaultObject {
  socket: Socket;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  socket: io('http://localhost:3001'),
};

const presentationReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default presentationReducer;
