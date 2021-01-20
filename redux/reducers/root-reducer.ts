import { combineReducers } from 'redux';
import main from '../reducers/main'

const rootReducer = combineReducers({
	main: main
});

export default rootReducer;