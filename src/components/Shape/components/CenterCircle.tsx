import type {FC} from 'react';
import {getContrastingColor} from "../../../utils/getContrastingColor";
import RotationText from "./RotationText";

type CenterCircleProps = {
  x: number,
  y: number,
  color: string
  rotation: number
}

const CenterCircle: FC<CenterCircleProps> = ({x, y, color, rotation}) => {

  const dotColor = getContrastingColor(color)

  return (
    <>
      <circle
        fill={ dotColor }
        cx={ x }
        cy={ y }
        r={ 4 }
      />
      <RotationText
        color={ dotColor }
        x={ x }
        y={ y }
        rotation={ rotation }
      />
    </>
  );
};

export default CenterCircle;