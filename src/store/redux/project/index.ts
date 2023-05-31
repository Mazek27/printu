import {createSlice} from '@reduxjs/toolkit';
import {ProjectType} from "./model";
import {fetchProject} from "./api";
import {isCorrectProject} from "../../../utils/isCorrectProject";

export interface ProjectState {
  isLoading: boolean;
  error?: any;
  project?: ProjectType;
}

const initState: ProjectState = {
  isLoading: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.project = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.isLoading = false;

        if(isCorrectProject(action.payload)) {
          state.project = action.payload.project;
          state.error = undefined;
        } else {
          state.project = undefined;
          state.error = { message: 'Project data is not correct'}
        }

      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.isLoading = false;
        state.project = undefined;
        state.error = JSON.parse(action.error.message!);
      })
  }
});

export default projectSlice.reducer;
