import { AccountHolderInput } from "../../../interface/accountHolder";
type InputValidation={
    hasError:boolean,
    message:string
}
export const  accountHolderValidation=(input:AccountHolderInput):InputValidation=>{
    const emailValidation = String(input.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const validPassword=passwordRegex.test(input.password)
    if(!emailValidation){
        return {hasError:true,message:input.email+"Email is invalid"};
    }
    else if(!validPassword){
        return {hasError:true,message:"Password is invalid"};
    }
    return {hasError:false,message:"okay"}

}