import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./EmployeeReducer";

const store = configureStore({
    reducer:{
        employee: EmployeeReducer
    }
})

export default store;