import {createSliceSaga} from 'redux-toolkit-saga';
import {PayloadAction} from "@reduxjs/toolkit";
import {ILoadProject} from "./models";
import {call, put} from 'typed-redux-saga';
import {fetchInitProject, fetchProject} from "../../api/fetchProject";
import {hasCorrectProperties} from "../../../hooks/hasCorrectProps";
import {getProjectFailure, getProjectStart, getProjectSuccess} from "../../redux/project";
import {handleErrors} from "../utils/handleErrors";

const projectSlice = createSliceSaga({
  name: 'project',
  caseSagas: {
    * loadProject(action: PayloadAction<ILoadProject>) {
      const { id: projectId } = action.payload
      let id = projectId;
      yield put(getProjectStart())

      try {

        if (!id) {
          const { data: initData} = yield* call(fetchInitProject);
          id = initData?.id;
        }

        const { data } = yield* call(fetchProject, id!);

        if (data?.project && hasCorrectProperties(data)) {
            yield put(getProjectSuccess(data.project))
          } else {
            yield put(getProjectFailure({
              message: 'Invalid data'
            }))
          }
      } catch (error : any) {
        yield handleErrors(error, getProjectFailure)
      }
    }
  }
});

export default projectSlice.saga;
export const ProjectSliceActions = projectSlice.actions;
