import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

import presentationActions from '../redux/actions/presentationActions';

const JoinPage = (): JSX.Element => {
  const [presentationCode, setPresentationCode] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPresentationCode(e.target.value);
  }

  const handleJoin = () => {
    dispatch({
      type: presentationActions.SET_ROOM,
      payload: presentationCode,
    });
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
