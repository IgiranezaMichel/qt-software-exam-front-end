import { People, Task } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { TaskHome } from "./user/task";
import DisplayProject from "./user/project/display";
import { Navigation } from "../component/navigation";
import { useNavigate } from "react-router-dom";

export const UserIndex = () => {
    const [selectedValue, setSelectedValue] = useState('project');
    const activeBtn = "btn border-0 rounded-0  border-bottom border-3 border-primary";
    const inActiveBtn = "btn";
    useEffect(
        () => { }, [selectedValue]
    )
    const navigation = useNavigate();
    const userDetail = JSON.parse(String(localStorage.getItem('user')));
    if (userDetail == undefined) {
        navigation("/")
    }
    return (
        <>
            <Navigation />
            <div className="p-2">
                <section className="mt-4">
                    <button onClick={() => setSelectedValue('project')} className={selectedValue == 'project' ? activeBtn : inActiveBtn}>
                        <People /> Projects
                    </button>
                    <button onClick={() => setSelectedValue('task')} className={selectedValue == 'task' ? activeBtn : inActiveBtn}>
                        <Task /> Tasks
                    </button>
                </section>
                <section>
                    {selectedValue == 'project' && <DisplayProject />}
                    {selectedValue == 'task' && <TaskHome />}

                </section>
            </div>

        </>
    )
}