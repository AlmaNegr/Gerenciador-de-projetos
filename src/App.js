import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'

function App() {
    return(
       <Router>
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/newproject">Novo Projeto</Link></li>
            </ul>
        </nav>
        
        <Container>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/newproject" element={<NewProject />}></Route>
            </Routes>
        </Container>
       </Router>
    )
}

export default App