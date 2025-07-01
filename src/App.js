import './App.css'
import Pessoa from './components/Pessoa'
import Saudacao from './components/Saudacao'
import List from './components/List'


function App() {

    return(
        <div>
            <h2>Olá, React</h2>
            <Pessoa nome="Alisson" idade={33} profissao="Desenvolvedor"/>
            <Saudacao nome="Davi" idade={40} profissao="Dev-Senior"/>
            <List />
        </div>
    )
}

export default App