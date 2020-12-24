import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { AppDispatch } from './store';

export interface Line {
  date: Date;
  code: string;
  type: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface List {
  payload: Array<Line>;
}

interface LogsState {
  loading: boolean;
  hasErrors: boolean;
  hasNewLines: boolean;
  logs: Array<Line> | [];
}

export const initialState: LogsState = {
  loading: false,
  hasErrors: false,
  hasNewLines: false,
  logs: [],
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    getLogs: (state: LogsState) => {
      state.loading = true;
    },
    getLogsSuccess: (state: LogsState, { payload }: List) => {
      state.hasNewLines = state.logs.length > 0 && state.logs.length !== payload.length;
      state.logs = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getLogsFailure: (state: LogsState) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getLogs,
  getLogsSuccess,
  getLogsFailure,
} = logsSlice.actions;

export const logsSelector = (state: RootState) => state.logs;

export default logsSlice.reducer;

// Asynchronous thunk action
export function fetchLogs() {
  return async (dispatch: AppDispatch) => {
    dispatch(getLogs());

    try {
      const response = await fetch(
        'http://localhost:5000/api/logs'
      );

      const data: Array<Line> = await response.json();

      dispatch(getLogsSuccess(data));
    } catch (error) {
      dispatch(getLogsFailure());
    }
  };
}
