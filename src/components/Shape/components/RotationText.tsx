import type {FC} from 'react';

type RotationTextProps = {
  x: number,
  y: number,
  rotation: number
  color: string
}

const RotationText: FC<RotationTextProps> = ({x, y, rotation, color}) => {
  return (
    <text x={ x + 5 } y={ y } fill={ color }>
      <tspan>{ rotation }°</tspan>
    </text>
  );
};

export default RotationText;