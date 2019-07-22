import { put } from "redux-saga/effects";
import { getSearchSuccess, getSearchFailure } from "../actions/actionCreators";

export default function* searchSaga({ text }) {
  try {
    let chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
    let chocolates = yield chocolateResponse.json();

    let searchData = chocolates.filter(choco => {
      return choco.name.toLowerCase().includes(text);
    });
    yield put(getSearchSuccess(searchData));
  } catch (error) {
    yield put(getSearchFailure(error));
  }
}
