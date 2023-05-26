import {ShapeType, SizeType} from "./shape.model";
import {useLayoutEffect, useMemo, useRef, useState} from "react";
import RectangleShape from "./components/Rectangle";
import EllipseShape from "./components/Ellipse";

export const useShape = (shape: ShapeType) => {
  const ShapeComponent = useMemo(() => {
    switch (shape.type) {
      case 'rectangle': return RectangleShape
      case 'ellipse': return EllipseShape
      default: return null
    }
  }, [shape.type]);

  const [boundaryBox, setBoundaryBox] = useState<SizeType>();
  const gRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    if(gRef.current){
      const boundingClient = gRef.current.getBBox();
      setBoundaryBox({
        height: boundingClient.height,
        width: boundingClient.width,
        x: boundingClient.x,
        y: boundingClient.y
      })
    }
  }, [])

  return {
    ShapeComponent,
    boundaryBox,
    gRef
  }
}