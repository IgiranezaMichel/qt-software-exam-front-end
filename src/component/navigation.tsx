import { Avatar } from "@mui/material";

export const Navigation=()=>{
    const userDetail=JSON.parse(String(localStorage.getItem('user')));
    return(
        <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light"
      >
        <div className="container">
            <a className="navbar-brand" href="#">UMS</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">
                                 <div className="d-flex">
                                 <Avatar/> <div className="card d-flex justify-content-center bg-transparent border-0">{userDetail.name} </div>
                                 </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
      </nav>
      
        
        </>
    )
}