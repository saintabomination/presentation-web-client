import { combineReducers } from 'redux';

import presentationReducer from './reducers/presentationReducer';

const rootReducer = combineReducers({
  presentation: presentationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
