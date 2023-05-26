import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProjectType} from "./model";

export interface ProjectState {
  isLoading: boolean;
  error?: { message: string };
  project?: ProjectType;
}

const initState: ProjectState = {
  isLoading: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState: initState,
  reducers: {
    getProjectStart: state => {
      state.isLoading = true;
    },
    getProjectSuccess: (state, action: PayloadAction<ProjectType>) => {
      state.isLoading = false;
      state.project = action.payload;
      state.error = undefined;
    },
    getProjectFailure: (state, action: PayloadAction<{ message: string }>) => {
      state.isLoading = false;
      state.project = undefined;
      state.error = action.payload;
    }
  },
});

export const { getProjectStart, getProjectSuccess, getProjectFailure } = projectSlice.actions;
export default projectSlice.reducer;
