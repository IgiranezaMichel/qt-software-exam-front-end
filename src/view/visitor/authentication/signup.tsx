import { Email, Person, Phone, VisibilityOff } from "@mui/icons-material"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { AccountHolderInput } from "../../../interface/accountHolder";
import { useCreateAccount } from "../../../controller/mutation/accountHolder/accountHolder";
import { useState } from "react";

export const SignUp=()=>{
    const [accountHolder,setAccountHolder]=useState<AccountHolderInput>({
        email:'',
        id:'',
        name:'',
        password:'',
        phoneNumber:'',
      });
      const {createAccountHandler}=useCreateAccount(accountHolder);
      const saveAccountHandler=()=>{
      createAccountHandler().then(
        data=>alert(data)
      ).catch(err=>alert(err))
      }
return(
    <main className="p-2 mt-2">
        <Person className="d-block fs-1 m-auto"/>
    <TextField label='Name' className="mb-3" fullWidth
    value={accountHolder.name}
    onChange={(e)=>setAccountHolder({...accountHolder,name:e.target.value})}
    InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <Person />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
    <TextField label='Phone number'className="mb-3" fullWidth
     onChange={(e)=>setAccountHolder({...accountHolder,phoneNumber:e.target.value})}
    InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <Phone />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
      <TextField label='Email' className="mb-3" fullWidth 
       onChange={(e)=>setAccountHolder({...accountHolder,email:e.target.value})}
      InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <Email />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
      <TextField label='Password'className="mb-3" type="password"
       onChange={(e)=>setAccountHolder({...accountHolder,password:e.target.value})}
      fullWidth InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <VisibilityOff />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
      <div className="modal-footer py-2">
        <Button onClick={()=>saveAccountHandler()} variant='contained'>Submit</Button>
      </div>
    </main>
)
}