/* eslint-disable react-hooks/exhaustive-deps */
import {  useQuery } from "@apollo/client"
import { GET_ALL_TASK } from "../../graphql/query/task"
import { useEffect, useState } from "react";
import { IResponseText } from "../../interface/responseData";

export const useGetAllTask=()=>{
    const [response,setResponse]=useState<IResponseText>({
        responseReady:false,
        responseData:[]
    })
    const {data,refetch}=useQuery(GET_ALL_TASK);
    useEffect(
        ()=>{
            if(data){
              setResponse({responseData:data.getAllTask,responseReady:true});
            }
        }
    )
    return {response,refetch}
}