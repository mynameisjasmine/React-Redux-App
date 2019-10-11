import axios from 'axios';

const FETCHING_DATA = 'FETCHING_DATA';
const FETCH_COMPLETE = 'FETCH_COMPLETE';
const FETCH_FAILURE = 'FETCH_FAILURE';

const fetchList = () => dispatch => {
  dispatch({ type: FETCHING_DATA })
  
  axios.get(`https://api.jikan.moe/v3/search/anime?q=naruto&limit=16`)
  .then(res => dispatch({ type: FETCH_COMPLETE, payload: res.data.results }))
  .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.repsonse }))
 }


// const thunk = next => action => store => {
// if (typeof action === 'object') {
//  next(action)
// } else if (typeof action === 'function') {
//   action(store.dispatch)
//  }
// }