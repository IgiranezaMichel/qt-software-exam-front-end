import { Button, TextField } from "@mui/material"
import { useCreateProject } from "../../../controller/mutation/project/project"
import { useState } from "react"
import { ProjectInput } from "../../../interface/projectInput"
import { useProject } from "../../../context/projectContext"

export const AddNewProject=()=>{
    const {update}=useProject();
    const [project,setProject]=useState<ProjectInput>({id:'',name:''})
    const {createProjectHandler}=useCreateProject(project);
    const createProject=()=>{
        createProjectHandler().then(data=>{
            alert(data);update(); 
        }).catch(err=>alert(err))
    }
    return(
        <div className="p-1">
            <TextField label='Project Name' onChange={(e)=>setProject({...project,name:e.target.value})} fullWidth className="mb-3"/>
            <div className="modal-footer">
                <Button onClick={()=>createProject()} variant="contained">
                    Save
                </Button>
            </div>
        </div>
    )
}