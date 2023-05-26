import {FC} from "react";
import {ShapeType} from "../shape.model";

type RectangleProps = ShapeType

const RectangleShape: FC<RectangleProps> = ({y, x,height, width, rotation, color, id}) => {
  const transform = `translate(${x}, ${y}) rotate(${rotation}) translate(-${ width / 2 }, -${height / 2})`;

  return <rect
    data-id={id}
    data-x={x}
    data-y={y}
    width={width}
    height={height}
    fill={color}
    transform={transform}
  />
};

export default RectangleShape;