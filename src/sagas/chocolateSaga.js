import { put } from "redux-saga/effects";
import {
  getChocolatsSuccess,
  getChocolatesFailure
} from "../actions/actionCreators";

export function* getChocolates() {
  try {
    let chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
    let chocolates = yield chocolateResponse.json();
    yield put(getChocolatsSuccess(chocolates));
  } catch (error) {
    yield put(getChocolatesFailure(error));
  }
}
