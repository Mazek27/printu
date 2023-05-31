import {get} from "./utils/get";
import {ProjectInitResponseType, ProjectResponseType} from "../redux/project/model";

export const fetchProjectData = (id: string) => {
  return get<ProjectResponseType>(`project/${id}`)
}

export const fetchInitProject = () => {
  return get<ProjectInitResponseType>(`init`)
}