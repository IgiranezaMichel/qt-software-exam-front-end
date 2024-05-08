/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { IDataState } from "../interface/dataState";

export const TaskContext=createContext<IDataState|undefined>(undefined)
export const useTask=()=>{
    const task=useContext(TaskContext);
    if(task==undefined){
        throw new Error('Not found');
    }
    return task
}