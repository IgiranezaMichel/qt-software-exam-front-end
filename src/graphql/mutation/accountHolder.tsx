import { gql } from "@apollo/client";

export const CREATE_ACCOUNT=gql`
mutation($accountInput:AccountHolderInput){
    createAccount(accountHolderInput:$accountInput)
}
`
export const LOGIN_ACCOUNT=gql`
mutation($email:String,$password:String){
    login(email:$email,password:$password){
        id
        name
        email
        phoneNumber
    }
}
`
export const DELETE_ACCOUNT=gql`
mutation($id:ID){
    deleteAccount(id:$id)
}
`
export const FIND_ACCOUNT_BY_EMAIL=gql`
mutation($email:ID){
    findByEmail(email:$email)
}
`