import { createSlice } from "@reduxjs/toolkit";
import {employeeData} from '../../../data/employeeData';

const EmployeeSlice = createSlice({
    name:"Employees-Data",
    initialState: employeeData,
    reducers:{

        addEmployee:(state, action)=>{
            console.log("Adding Employee");
        },
        updateEmployee:(state, action)=>{
            console.log("Update Employee");
        },
        deleteEmployee:(state, action)=>{
            console.log("Delete Employee");
        }
    }
})

export const {addEmployee, updateEmployee, deleteEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;