/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, AttachFile, Check, Close } from "@mui/icons-material"
import { Button, Chip, NativeSelect, TextField, TextareaAutosize } from "@mui/material"
import { useState } from "react"
import { TaskInput } from "../../../../interface/taskInput"
import { TaskPriority } from "../../../../enum/taskPriority"
import { useCreateTask } from "../../../../controller/mutation/task/task"
import { useProject } from "../../../../context/projectContext"
export const CreateTask = () => {
    const {current}=useProject();
    // const taskList=useTask();
    const [task, setTask] = useState<TaskInput>({
        assignees: '',
        attachment: '',
        description: '',
        endDate: '',
        id: '',
        projectId: '',
        startDate: '',
        taskPriority: TaskPriority.LOW,
        title: ''

    })
    const documentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setTask({ ...task, attachment: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    const {createTaskHandler}=useCreateTask(task);
    const [assignee, setAssignee] = useState('');
    const addAssigneesHandler = () => {
        if (assignee.length != 0)
            setTask({ ...task, assignees: task.assignees.length != 0 ? task.assignees.concat("," + assignee) : task.assignees.concat(assignee) })
        setAssignee('');
    }
    const [addAssignee,setAddAssignee]=useState(false);
    const handleSaveTask=()=>{
        createTaskHandler().then(data=>{alert(data.data.saveTask)}).catch(err=>err);
    }
    return (
        <main className="p-3">
            <TextField label='Task name' className="mb-3"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                fullWidth />
            <div className="row col-12 m-auto">
                <div className="col-md-6">
                    <label htmlFor="">Starting Date</label>
                    <TextField type="date"
                        value={task.startDate}
                        onChange={(e) => setTask({ ...task, startDate: e.target.value })}
                        className="mb-3" fullWidth />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">End Date</label>
                    <TextField type="date"
                        value={task.endDate}
                        onChange={(e) => setTask({ ...task, endDate: e.target.value })}
                        className="mb-3" fullWidth />
                </div>
            </div>
            <div className="mb-3">
                <div><b>Assigned</b></div>
                {addAssignee?<input onChange={(e)=>setAssignee(e.target.value)}/>:''}
                {task.assignees.length!=0&&task.assignees.split(',').map((data:any,index:number)=>{
                return <Chip key={index} label={data} onDelete={() =>setAddAssignee(true)} />})}
                {!addAssignee?<Add onClick={() =>setAddAssignee(true)}/>:
                <>
                <Close onClick={() =>setAddAssignee(false)}/><Check onClick={() =>addAssigneesHandler()}/>
                </>}
            </div>
            <div className="mb-3">
                <NativeSelect fullWidth onChange={(e)=>setTask({...task,projectId:e.target.value})}>
                    <option value="">Project name</option>
                    {current.responseReady&&current.responseData!=undefined&&current.responseData.length!=0&&
                   current.responseData.map((data:any)=>{
                    return<option value={data.id}>{data.name}</option>
                   })
                   }
                </NativeSelect>
            </div>
            <b>Description</b>
            <TextareaAutosize style={{ border: task.description.length == 0 ? 'solid grey' : (task.description.length != 0 && task.description.length! < 30) ? 'solid green' : 'solid red' }}
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                minRows={4} color="primary" className="mb-3 col-12" />
            <div className="float-end mb-2">
                <b>count {task.description.length}/30</b>
            </div>
            <b>Task Priority</b>
            <section className="">
                <label className="custom-control custom-checkbox p-1">
                    <input type="checkbox" onClick={() => setTask({ ...task, taskPriority: TaskPriority.LOW })}
                        checked={task.taskPriority == TaskPriority.LOW ? true : false}
                        value="checkedValue" className="custom-control-input" />
                    <span className="custom-control-indicator fw-bold">Low</span>
                </label>
                <label className="custom-control custom-checkbox p-1">
                    <input type="checkbox" onClick={() => setTask({ ...task, taskPriority: TaskPriority.NORMAL })}
                        checked={task.taskPriority == TaskPriority.NORMAL ? true : false}
                        value="checkedValue" className="custom-control-input" />
                    <span className="custom-control-indicator fw-bold">Normal</span>
                </label>
                <label className="custom-control custom-checkbox p-1">
                    <input type="checkbox" onClick={() => setTask({ ...task, taskPriority: TaskPriority.HIGH })}
                        checked={task.taskPriority == TaskPriority.HIGH ? true : false} value="checkedValue" className="custom-control-input" />
                    <span className="custom-control-indicator fw-bold">High</span>
                </label>
            </section>
            <div>
                <AttachFile /> Attach
                <input type="file" onChange={documentHandler} />
            </div>
            <div className="modal-footer">
                <Button variant="outlined" className="mx-2 fw-bold">
                    cancel
                </Button>
                <Button onClick={()=>handleSaveTask()} variant="contained" className="fw-bold">
                    Submit
                </Button>
            </div>
        </main>
    )
}