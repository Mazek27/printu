import { useSelector} from "react-redux";
import {projectErrorSelector, projectLoadingSelector, projectSelector} from "../../store/redux/project/selectors";
import {fetchProject as fetchProjectApi} from "../../store/redux/project/api";
import {useAppDispatch} from "../../hooks/useAppDispatch";

export const useProject = () => {
  const project = useSelector(projectSelector);
  const isLoading = useSelector(projectLoadingSelector);
  const error = useSelector(projectErrorSelector);
  const dispatch = useAppDispatch();

  const fetchProject = (id?: string) => {
    dispatch(fetchProjectApi(id));
  }

  return {
    project,
    isLoading,
    error,
    fetchProject
  }
}