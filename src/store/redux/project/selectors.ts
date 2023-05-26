import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

export const projectStateSelector = (state: RootState) => state.project;

export const projectSelector = createSelector(projectStateSelector, (projectState) => projectState.project);
export const projectErrorSelector = createSelector(projectStateSelector, (projectState) => projectState.error);
export const projectLoadingSelector = createSelector(projectStateSelector, (projectState) => projectState.isLoading);
