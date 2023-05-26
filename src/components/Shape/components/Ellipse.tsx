import {FC} from "react";
import {ShapeType} from "../shape.model";

type EllipseProps = ShapeType

const EllipseShape: FC<EllipseProps> = ({y, x,height, width, rotation, color,id}) => {
  const cx = width / 2;
  const cy = height / 2;
  const rx = width / 2;
  const ry = height / 2;
  const transform = `translate(${x}, ${y}) rotate(${rotation}) translate(${-cx}, ${-cy})`;

  return <ellipse
    data-id={id}
    cx={cx}
    cy={cy}
    rx={rx}
    ry={ry}
    fill={color}
    transform={transform}
  />
};

export default EllipseShape;