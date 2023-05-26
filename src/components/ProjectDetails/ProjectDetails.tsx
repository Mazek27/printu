import type {FC} from 'react';

type ProjectDetailsProps = {
  id: string;
  name: string;
};

const  ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  return (
    <div>
      <hr/>
      <div>Name: <b>{props.name}</b></div>
      <div>ID: <input readOnly value={props.id}/> </div>
      <hr/>
    </div>
  );
};

export default ProjectDetails;