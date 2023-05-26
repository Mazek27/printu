import {useSelector} from "react-redux";
import {projectErrorSelector, projectLoadingSelector, projectSelector} from "../../store/redux/project/selectors";
import {useActions} from "../../hooks/useActions";
import {ProjectSliceActions} from "../../store/saga/project";

export const useProject = () => {
  const project = useSelector(projectSelector);
  const isLoading = useSelector(projectLoadingSelector);
  const error = useSelector(projectErrorSelector);
  const [loadProject] = useActions([ProjectSliceActions.loadProject]);



  return {
    project,
    isLoading,
    error,
    loadProject
  }
}