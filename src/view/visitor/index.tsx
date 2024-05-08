import { Card } from '@mui/material';
import * as React from 'react';
import { SignUp } from './authentication/signup';
import { Login } from './authentication/login';

export default function Index() {
    const [selectedValue, setSelectedValue] = React.useState('login');
    const activeBtn = "btn border-0 rounded-0  border-bottom border-3 border-primary";
    const inActiveBtn = "btn";
    return (
        <div >
            <div className='fw-bold fs-5 p-2'>User management System</div>
            <main className='d-flex justify-content-center align-items-center p-3' style={{ height: '98vh' }}>
                <section className='col-12 m-auto'>
                    <Card className='col-sm-6 col-md-5 col-lg-4 m-auto border'>
                        <button onClick={() => setSelectedValue('login')} className={selectedValue == 'login' ? activeBtn : inActiveBtn}>Login</button>
                        <button onClick={() => setSelectedValue('signup')} className={selectedValue == 'signup' ? activeBtn : inActiveBtn}>Signup</button>
                        {selectedValue == 'login'&& <Login /> }
                        {selectedValue=='signup'&&<SignUp />}
                    </Card>
                </section>
            </main>

        </div>
    );
}
