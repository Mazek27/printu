import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchInitProject, fetchProjectData} from "../../api/fetchProjectData";
import {ProjectResponseType} from "./model";

export const fetchProject = createAsyncThunk<ProjectResponseType, string | undefined>(
  'project/fetchProject',
  async (id?: string) => {
    let projectId = id;

    if(!projectId) {
      const response = await fetchInitProject();
      projectId = response.data?.id;
    }

    const response = await fetchProjectData(projectId!);
    return response.data!;
  }
);