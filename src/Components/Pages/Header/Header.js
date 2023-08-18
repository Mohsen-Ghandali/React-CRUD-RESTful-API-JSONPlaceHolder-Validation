import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">RESTful API</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav ">

                

                            <li className="nav-item mx-2">
                                <NavLink className={(navDate) => navDate.isActive ? "nav-link text-info bg-gradient rounded-2 " : "nav-link text-white "} to="/posts">CRUD</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink className={(navDate) => navDate.isActive ? "nav-link text-info bg-gradient  rounded-2" : "nav-link text-white "} to="/">Home</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;