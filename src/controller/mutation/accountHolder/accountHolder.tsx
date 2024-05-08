import { useMutation } from "@apollo/client"
import { CREATE_ACCOUNT, LOGIN_ACCOUNT } from "../../../graphql/mutation/accountHolder"
import { accountHolderValidation } from "./validation";
import { AccountHolderInput } from "../../../interface/accountHolder";

export const useCreateAccount=(accountHolderInput:AccountHolderInput)=>{
    const [createAccount]=useMutation(CREATE_ACCOUNT);
   const createAccountHandler=async()=>{
    const accountValidation=accountHolderValidation(accountHolderInput);
    if(accountValidation.hasError){
        throw new Error(accountValidation.message)
    }
    else{
      return await createAccount({variables:{accountInput:accountHolderInput}})
    }
   }
   return {createAccountHandler}
}
export const useLogin=(email:string,password:string)=>{
    const [loginAccount]=useMutation(LOGIN_ACCOUNT);
   const logInHandler=async()=>{
      return await loginAccount({variables:{email:email,password:password}})
    
   }
   return {logInHandler}
}