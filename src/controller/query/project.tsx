/* eslint-disable react-hooks/exhaustive-deps */
import {  useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { IResponseText } from "../../interface/responseData";
import { GET_ALL_PROJECT } from "../../graphql/query/project";

export const useGetAllProject=()=>{
    const [response,setResponse]=useState<IResponseText>({
        responseReady:false,
        responseData:[]
    })
    const {data,refetch}=useQuery(GET_ALL_PROJECT);
    useEffect(
        ()=>{
            if(data){
              setResponse({responseData:data.getAllProject,responseReady:true});
            }
        },[data]
    )
    return {response,refetch}
}