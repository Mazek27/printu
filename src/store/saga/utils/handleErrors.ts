import {put} from "typed-redux-saga";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {ApiError} from "../../api/models/ApiError";

export function* handleErrors(
  error: any,
  failureAction: ActionCreatorWithPayload<{ message: string }, string>
) {
  if (error instanceof TypeError) {
    yield put(failureAction({ message: 'Type Error: ' + error.message }));
  } else if (error instanceof SyntaxError) {
    yield put(failureAction({ message: 'Syntax Error: ' + error.message }));
  } else if(error instanceof ApiError) {
    const apiError = JSON.parse(error.message)
    yield put(failureAction({message: apiError.message}));
  } else {
    yield put(failureAction({ message: error.message }));
  }
}