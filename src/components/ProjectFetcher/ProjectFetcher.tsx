import type {FC} from 'react';
import {useRef} from "react";
import {InputWrapper} from "./projectFetcher.styles";
import {ILoadProject} from "../../store/saga/project/models";

type ProjectFetcherProps = {
  handleFetchData: (data: ILoadProject) => void;
};

const ProjectFetcher: FC<ProjectFetcherProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    props.handleFetchData({
      id: inputRef.current?.value
    });
  }

  return (
    <InputWrapper>
      <span>Project ID: </span>
      <input ref={inputRef} placeholder="For random leave empty"/>
      <button onClick={handleButtonClick}>Fetch</button>
    </InputWrapper>
  );
};

export default ProjectFetcher;