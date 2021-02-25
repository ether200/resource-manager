import { combineReducers } from 'redux';
import resourceReducer from './resourceReducer';
import subjectReducer from './subjectReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  userState: userReducer,
  subjectState: subjectReducer,
  resourceState: resourceReducer,
});

export default reducers;
