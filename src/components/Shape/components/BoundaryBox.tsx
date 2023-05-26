import type {FC} from 'react';
import {SizeType} from "../shape.model";

type BoundaryBoxProps = SizeType

const BoundaryBox: FC<BoundaryBoxProps> = ({y, x, width, height}) => {
  return <rect
      x={ x }
      y={ y }
      width={ width }
      height={ height }
      stroke="red"
      opacity={.4}
      strokeWidth="2"
      fill="transparent"
    />
};

export default BoundaryBox;