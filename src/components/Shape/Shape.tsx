import type {FC} from 'react';
import CenterCircle from "./components/CenterCircle";
import BoundaryBox from "./components/BoundaryBox";
import {ShapeType} from "./shape.model";
import {useShape} from "./shape.hooks";

type ShapeProps = ShapeType;

const Shape: FC<ShapeProps> = (props) => {
  const {ShapeComponent, gRef, boundaryBox} = useShape(props)

  return ShapeComponent && (
    <g ref={gRef}>
      {boundaryBox && <BoundaryBox {...boundaryBox}/>}
      <ShapeComponent {...props}/>
      <CenterCircle {...props}/>
    </g>
  );
};

export default Shape;