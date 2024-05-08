import { Close, Task } from "@mui/icons-material"
import { Button, Dialog } from "@mui/material"
import { useState } from "react"
import { CreateTask } from "./crud/createTask"
import { useGetAllProject } from "../../../controller/query/project"
import { IDataState } from "../../../interface/dataState"
import DisplayTask from "./crud/display"
import { ProjectContext } from "../../../context/projectContext"

export const TaskHome=()=>{
    const [newTask,setNewTask]=useState(false)
    const {response,refetch}=useGetAllProject();
    const data:IDataState={
        current:response,
        update:()=>refetch()
    }
    return(
        <ProjectContext.Provider value={data}>
       <div className="mb-3 p-3"> 
        <Button onClick={()=>setNewTask(true)} variant="contained" className="rounded-0 ">
        <Task/> Add New Task
        </Button>
        </div>
        <section>
        <DisplayTask/>
        </section>
        <Dialog maxWidth='sm' PaperProps={{className:'col-12'}} open={newTask}>
        <div className="fw-bold p-3 sticky-top bg-white">Add New Employee <Close className='float-end' onClick={()=>setNewTask(false)}/></div>
        <CreateTask/>
       </Dialog>
        </ProjectContext.Provider>
    )
}