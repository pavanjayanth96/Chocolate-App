import { put } from "redux-saga/effects";
import {getBrandsSuccess,getBrandsFailure} from "../actions/actionCreators";

export function* getBrands(){
    try{    
    let brandResponse = yield fetch(`http://localhost:4000/brands`);
    let brands = yield brandResponse.json();
    yield put(getBrandsSuccess(brands));
    }catch(error){
        yield put(getBrandsFailure(error));

    }
}