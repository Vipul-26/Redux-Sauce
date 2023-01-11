import { all } from "redux-saga/effects";
import { waitForFetchPosts } from "./news";

export default function* rootSaga() {
    yield all([waitForFetchPosts()]);
}