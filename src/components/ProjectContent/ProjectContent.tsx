import type {FC} from 'react';
import React from "react";
import Shape from "../Shape/Shape";
import {ProjectType} from "../../store/redux/project/model";

type ProjectContentProps = {
  project?: ProjectType
  isLoading: boolean
};

const ProjectContent: FC<ProjectContentProps> = ({project, isLoading}) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!project) {
    return (
      <div>Empty</div>
    )
  }

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
         style={ {flex: '0 1 100%'} }
         width="100%"
         height="100%"
         preserveAspectRatio="xMidYMid meet"
    >
      <svg version="1.1"
           width="100%"
           height="100%"
           viewBox={ `0 0 ${ project.width } ${ project.height }` }
      >
        <rect fill="#efefef"
              width="100%"
              height="100%"
        />
        { project.items.map((item, index) => (
          <Shape key={ item.id + index } { ...item }/>
        ))}
      </svg>
    </svg>

  )
};

export default ProjectContent;