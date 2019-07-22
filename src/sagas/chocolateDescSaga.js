import { put } from "redux-saga/effects";
import {
  getChocolatesDescFailure,
  getChocolatesDescSuccess
} from "../actions/actionCreators";

export function* getChocolateDesc(action) {
  console.log("text", action);
  try {
    let brandResponse = yield fetch(
      `http://localhost:4000/chocolates/${action.id}`
    );
    let brands = yield brandResponse.json();
    yield put(getChocolatesDescSuccess(brands));
  } catch (error) {
    yield put(getChocolatesDescFailure(error));
  }
}
