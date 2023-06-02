import {configureStore as configureToolkitStore} from '@reduxjs/toolkit';

import rootReducer from './redux/index';

const store = configureToolkitStore({
  reducer: rootReducer,
})

export default store;