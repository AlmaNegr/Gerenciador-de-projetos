import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Navbar from './components/layout/Navbar'

function App() {
    return(
       <Router>
        <Navbar />
        
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