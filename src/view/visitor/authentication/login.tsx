import { Email, LockPerson, VisibilityOff } from "@mui/icons-material"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import {useLogin } from "../../../controller/mutation/accountHolder/accountHolder";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
const [login,setLogin]=useState({
  email:'',
  password:'',
});
const navigation=useNavigate();
const {logInHandler}=useLogin(login.email,login.password);
const handleLogIn=()=>{
logInHandler().then(
  data=>{console.log(data);
    if(data.data!=null){
      localStorage.setItem('user',JSON.stringify(data.data.login))
      navigation("/admin")}
    else{
      alert('invalid username or password')
    }
  }
).catch(err=>alert(err))
}
return(
    <main className="p-2 mt-2">
        <LockPerson className="d-block fs-1 m-auto"/>
      <TextField label='Email' className="mb-3"
      value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}
      fullWidth InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <Email />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
      <TextField label='Password'className="mb-3" type="password" fullWidth
      value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})}
      InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <VisibilityOff />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
      <div className="modal-footer py-2">
        <Button onClick={()=>handleLogIn()} variant='contained'>Submit</Button>
      </div>
    </main>
)
}