import { gql } from "@apollo/client";
export const CREATE_PROJECT=gql`
mutation($projectInput:ProjectInput){
    createProject(projectInput:$projectInput)
}
`
export const DELETE_PROJECT=gql`
mutation($id:ID){
    deleteProject(id:$id)
}
`