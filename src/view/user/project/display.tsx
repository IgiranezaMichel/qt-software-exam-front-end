/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CircularProgress, Dialog, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useGetAllProject } from "../../../controller/query/project";
import { Add, Close } from "@mui/icons-material";
import { AddNewProject } from "./addNewProject";
import { useState } from "react";
import { IDataState } from "../../../interface/dataState";
import { ProjectContext } from "../../../context/projectContext";

export default function DisplayProject() {
    const[addNewProject,setAddNewProject]=useState(false);
    const {response,refetch}=useGetAllProject();
    const data:IDataState={
        current:response,
        update:()=>refetch()
    }
    console.log(response)
  return (
    <ProjectContext.Provider value={data}>
      <div className="mb-4">
        <b>List of project</b>
      </div>
      <div className="mb-3">
      <Button onClick={()=>setAddNewProject(true)} variant="contained">
        <Add/> New project
      </Button>
      </div>
      {!response.responseReady&&<div >
        <CircularProgress/>
        </div>}
      {response.responseReady&&<Card className="border col-md-5" elevation={3}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {response.responseReady&&response.responseData!=undefined&&response.responseData.length!=0
            &&
            response.responseData.map((data:any,index:number)=>{
                return <TableRow key={index}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{data.name}</TableCell>
            </TableRow>
            })
           
            }
            {response.responseReady&&response.responseData!=undefined&&response.responseData.length==0&&
            <TableRow>
                <TableCell colSpan={2} className="text-center">No data found</TableCell>
            </TableRow>
}
            </TableBody>
        </Table>
      </Card>}
      <Dialog maxWidth='xs' PaperProps={{className:'col-12'}} open={addNewProject}>
        <div className="fw-bold p-3 sticky-top">Add New Project <Close className='float-end' onClick={()=>setAddNewProject(false)}/></div>
        <AddNewProject/>
       </Dialog>
    </ProjectContext.Provider>
  )
}
