import { takeLatest, all } from "redux-saga/effects";
import {
  GET_CHOCOLATES,
  GET_BRANDS,
  GET_BRANDDETAIL,
  GET_CHOCOLATE_DESC,
  GET_SIGNUP,
  GET_LOGIN,
  GET_SEARCH
} from "../actions/actionTyps";
import { getChocolates } from "./chocolateSaga";
import { getBrands } from "./brandsSaga";
import { getBrandDetail } from "./brandDetailSaga";
import { getChocolateDesc } from "./chocolateDescSaga";
import { singupSaga } from "./signupSaga";
import { loginSaga } from "./loginSaga";
import searchSaga from "./searchSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_CHOCOLATES, getChocolates),
    takeLatest(GET_BRANDS, getBrands),
    takeLatest(GET_BRANDDETAIL, getBrandDetail),
    takeLatest(GET_CHOCOLATE_DESC, getChocolateDesc),
    takeLatest(GET_SIGNUP, singupSaga),
    takeLatest(GET_LOGIN, loginSaga),
    takeLatest(GET_SEARCH, searchSaga)
  ]);
  // takeLatest[(GET_CHOCOLATES, getChocolates),(GET_BRANDS,getBrands)];
}

// yield all([takeLatest(GET_BRANDS, getBrands),
//     takeLatest(GET_BRANDSTYPES, getBrandTypes)]);
