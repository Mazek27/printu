export type ProjectResponseType = {
  id: string,
  project: ProjectType
}

export type ProjectInitResponseType ={
  id: string,
  name: string,
  modified: number
}

export type ProjectType = {
  id: string,
  name: string,
  width: number,
  height: number,
  items: ProjectItem[]
}

export type ProjectItem = {
  id: string,
  type: 'rectangle' | 'ellipse',
  color: string,
  rotation: number,
  x: number,
  y: number,
  width: number,
  height: number
}