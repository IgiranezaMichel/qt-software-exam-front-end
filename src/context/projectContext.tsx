/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { IDataState } from "../interface/dataState";

export const ProjectContext=createContext<IDataState|undefined>(undefined)
export const useProject=()=>{
    const project=useContext(ProjectContext);
    if(project==undefined){
        throw new Error('Not found');
    }
    return project
}