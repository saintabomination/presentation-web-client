import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

const JoinPage = (): JSX.Element => {
  const [presentationCode, setPresentationCode] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPresentationCode(e.target.value);
  }

  const handleJoin = () => {
    navigate(presentationCode);
  }

  return (
    <DefaultLayout>
      <h1>Join Page</h1>
      <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      <button onClick={() => handleJoin()}>Join</button>
    </DefaultLayout>
  );
}

export default JoinPage;
