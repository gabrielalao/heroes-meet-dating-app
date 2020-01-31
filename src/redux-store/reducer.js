
import {combineReducers} from 'redux';
// import mainIssuesReducer from './mainIssuesReducer'

const appReducer = combineReducers({
    // mainIssuesReducer: mainIssuesReducer
});




const rootReducer = (state, action) => {
    return appReducer(state, action)
};
export default rootReducer;