import { useState, ChangeEvent } from 'react';
import { io } from 'socket.io-client';

import DefaultLayout from '../layouts/DefaultLayout';

const socket = io('localhost:3001');

const ControlsPage = (): JSX.Element => {
  const [roomId, setRoomId] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(Number(e.target.value));
  }

  const handlePrevious = () => {
    socket.emit('move_slide', {
      data: -1,
      room: roomId,
    });
  }

  const handleNext = () => {
    socket.emit('move_slide', {
      data: 1,
      room: roomId,
    });
  }

  const handleReset = () => {
    socket.emit('reset_presentation', {
      room: roomId,
    });
  }

  return (
    <DefaultLayout>
      <h1>Controls Page</h1>
      <p>For development purposes only.</p>
      <p>Room:</p>
      <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} value={roomId} /><br />
      <button onClick={() => handlePrevious()}>Previous slide</button>
      <button onClick={() => handleNext()}>Next Slide</button>
      <button onClick={() => handleReset()}>Reset</button>
    </DefaultLayout>
  );
}

export default ControlsPage;
