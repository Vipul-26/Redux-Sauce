import { createActions, createReducer } from "reduxsauce";

/** Action Types & Creators **/
export const { Types, Creators } = createActions({
  selectChannel: ["channelName"],
  fetchPosts: null,
  receivePosts: ["data"]
});

/** Handlers **/
const INITIAL_STATE = {
  channelName: null,
  loading: null,
  data: null
};

const select = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    channelName: action.channelName
  }
};

const fetch = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true
  }
};

const recieve = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    loading: false
  }
};

/** Reducer **/
export default createReducer(INITIAL_STATE, {
  [Types.SELECT_CHANNEL]: select,
  [Types.FETCH_POSTS]: fetch,
  [Types.RECEIVE_POSTS]: recieve
});
