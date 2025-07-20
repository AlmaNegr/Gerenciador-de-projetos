import { BrowserRouter as Router, Routes, Route, Link } from 'react-dom'
import Container from './components/layout/Container'
import Home from './components/pages/Home'

function App() {
    return(
       <Router>
        <nav>
            <ul>
                <li><Link to="/">Ínicio</Link></li>
                
            </ul>
        </nav>
        
        <Container>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Container>
       </Router>
    )
}

export default App