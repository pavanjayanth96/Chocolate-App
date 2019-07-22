import { put } from "redux-saga/effects";
import {
  getBrandDetailSuccess,
  getBrandDetailFailure,
  getBrandDecSucces
} from "../actions/actionCreators";

export function* getBrandDetail(action) {
  try {
    let brandDetailResponse = yield fetch(
      `http://localhost:4000/chocolates?brandId=${action.id}`
    );
    let brandDetail = yield brandDetailResponse.json();
    // console.log("Respnse**", brandDetail);
    yield put(getBrandDecSucces(brandDetail));
  } catch (error) {
    yield put(getBrandDetailFailure(error));
  }
}
