import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import celReducer from "../reducers/slices/celebritySlices"

export default configureStore ({
    reducer: {
        auth: authReducer,
        cel: celReducer
}})

