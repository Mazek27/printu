import {combineReducers} from 'redux';
import project from "./project";


const rootReducer = combineReducers({
  project
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;