import {ProjectItem, ProjectResponseType, ProjectsType, ProjectType} from "../store/redux/project/model";

export function isCorrectProject(data: ProjectResponseType): boolean {
  return isProjectResponseType(data)
}


function isProjectsType(type: any): type is ProjectsType {
  return type === 'rectangle' || type === 'ellipse';
}

function isProjectItem(obj: any): obj is ProjectItem {
  return typeof obj.id === 'string' &&
    isProjectsType(obj.type) &&
    typeof obj.color === 'string' &&
    typeof obj.rotation === 'number' &&
    typeof obj.x === 'number' &&
    typeof obj.y === 'number' &&
    typeof obj.width === 'number' &&
    typeof obj.height === 'number';
}

function isProjectType(obj: any): obj is ProjectType {
  return typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.width === 'number' &&
    typeof obj.height === 'number' &&
    Array.isArray(obj.items) &&
    obj.items.every(isProjectItem);
}

function isProjectResponseType(obj: any): obj is ProjectResponseType {
  return typeof obj.id === 'string' &&
    isProjectType(obj.project);
}