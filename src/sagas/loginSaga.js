import { put } from "redux-saga/effects";
import { getLoginSuccess, getLoginFailure } from "../actions/actionCreators";

export function* loginSaga(action) {
  console.log(action);
  try {
    if (action.email != "" && action.pwd != "") {
      let loggedInUsers = yield fetch(
        `http://localhost:4000/users?email=${action.email}&password=${
          action.pwd
        }`
      );
      let loggedInResponse = yield loggedInUsers.json();
      if (loggedInResponse.length) {
        yield put(getLoginSuccess(loggedInResponse));
      } else {
        throw "Please enter valid details";
      }
    } else {
      throw "Please enter email and password before login..";
    }
  } catch (error) {
    alert(error);
  }
}

//
