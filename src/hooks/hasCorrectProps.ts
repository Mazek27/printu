import {ProjectItem, ProjectResponseType} from "../store/redux/project/model";

export function hasCorrectProperties(data: ProjectResponseType): boolean {
  const items: ProjectItem[] = data.project.items;

  for (let i = 0; i < items.length; i++) {
    const item: ProjectItem = items[i];

    if (
      typeof item.id !== 'string' ||
      typeof item.type !== 'string' ||
      typeof item.color !== 'string' ||
      typeof item.rotation !== 'number' ||
      typeof item.x !== 'number' ||
      typeof item.y !== 'number' ||
      typeof item.width !== 'number' ||
      typeof item.height !== 'number'
    ) {
      return false;
    }
  }

  return true;
}