import type {FC} from 'react';
import {useRef} from "react";
import {InputWrapper} from "./projectFetcher.styles";

type ProjectFetcherProps = {
  handleFetchData: any;
};

const ProjectFetcher: FC<ProjectFetcherProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
      props.handleFetchData(inputRef.current?.value)
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