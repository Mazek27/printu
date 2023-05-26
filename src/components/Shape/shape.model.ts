export type ShapeType = {
  id: string,
  type: 'rectangle' | 'ellipse'
  color: string,
  rotation: number,
} & SizeType;

export type SizeType = {
  x: number,
  y: number,
  width: number,
  height: number
}