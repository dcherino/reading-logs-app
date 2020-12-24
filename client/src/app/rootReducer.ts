import { combineReducers } from '@reduxjs/toolkit';
import logsReducer from './slices';

const rootReducer = combineReducers({
  logs: logsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
