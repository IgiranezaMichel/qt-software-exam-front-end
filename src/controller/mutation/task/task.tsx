import { useMutation } from "@apollo/client"
import { TaskInput } from "../../../interface/taskInput";
import { CREATE_TASK, DELETE_TASK } from "../../../graphql/mutation/task";

export const useCreateTask=(taskInput:TaskInput)=>{
    const [createTask]=useMutation(CREATE_TASK);
   const createTaskHandler=async()=>{
    return await createTask({variables:{taskInput:taskInput}})
    }
    return {createTaskHandler}
}
export const useDeleteTask=(id:string)=>{
    const [createTask]=useMutation(DELETE_TASK);
   const deleteTaskHandler=async()=>{
    await createTask({variables:{id:id}})
    }
    return {deleteTaskHandler}
}