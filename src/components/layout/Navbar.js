import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/newproject">Novo Projeto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar