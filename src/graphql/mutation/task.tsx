import { gql } from "@apollo/client";

export const CREATE_TASK=gql`
mutation($taskInput: TaskInput){
    createTask(taskInput:$taskInput)
}
`
export const DELETE_TASK=gql`
mutation($id:ID){
    deleteTask(id:$id)
}
`