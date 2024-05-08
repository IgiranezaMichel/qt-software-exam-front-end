/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CircularProgress,Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useGetAllTask } from "../../../../controller/query/task";
import { IDataState } from "../../../../interface/dataState";
import { TaskContext } from "../../../../context/taskContext";
import { Check, Delete } from "@mui/icons-material";

export default function DisplayTask() {
    const {response,refetch}=useGetAllTask();
    const data:IDataState={
        current:response,
        update:()=>refetch()
    }
    
  return (
    <TaskContext.Provider value={data}>
      <div className="mb-4">
        <b>List of Task</b>
      </div>
      {!response.responseReady&&<div >
        <CircularProgress/>
        </div>}
      {response.responseReady&&<Card className="border" elevation={3}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Assignee</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Task Priority</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {response.responseReady&&response.responseData!=undefined&&response.responseData.length!=0
            &&
            response.responseData.map((data:any,index:number)=>{
                return <>
                <TableRow key={index}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{data.project.name}</TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.assignees}</TableCell>
                <TableCell>from {data.startDate} to {data.endDate}</TableCell>
                <TableCell>{data.taskPriority}</TableCell>
                <TableCell>
                    <Delete/> <Check/>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={4}>
                    <b>Description</b> {data.description}
                </TableCell>
            </TableRow>
                </>
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
    </TaskContext.Provider>
  )
}
