import type {FC} from 'react';
import ProjectFetcher from "../ProjectFetcher/ProjectFetcher";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import Palette from "../Palette/Palette";
import ProjectContent from "../ProjectContent/ProjectContent";
import React from "react";
import {useProject} from "./project.hooks";


const Project: FC = () => {
  const { project, isLoading, error, loadProject } = useProject()

  return (
    <>
      <ProjectFetcher handleFetchData={ loadProject }/>
      { !!project && (
        !isLoading && !error &&
          <ProjectDetails id={ project.id } name={ project.name }/>
      )}
      { error && <div>{ error.message }</div> }

      <Palette>
        <ProjectContent isLoading={ isLoading } project={ project }/>
      </Palette>
    </>
  );
};

export default Project;