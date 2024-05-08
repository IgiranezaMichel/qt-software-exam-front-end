import { useMutation } from "@apollo/client"
import { ProjectInput } from "../../../interface/projectInput";
import { CREATE_PROJECT, DELETE_PROJECT } from "../../../graphql/mutation/project";

export const useCreateProject=(projectInput:ProjectInput)=>{
    const [createProject]=useMutation(CREATE_PROJECT);
   const createProjectHandler=async()=>{
    await createProject({variables:{projectInput:projectInput}})
    }
    return {createProjectHandler}
}
export const useDeleteProject=(id:string)=>{
    const [createProject]=useMutation(DELETE_PROJECT);
   const deleteProjectHandler=async()=>{
    await createProject({variables:{id:id}})
    }
    return {deleteProjectHandler}
}