import { combineReducers } from 'redux';

import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  posts: dataReducer
})

export default rootReducer
