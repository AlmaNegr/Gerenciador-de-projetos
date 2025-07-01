import Pessoa from './Pessoa'
import styles from './Pessoa.module.css'
function Saudacao({nome, idade, profissao}) {
    
    return(
        <div>
            <Pessoa nome="alisson" idade={33} profissao="desevolvedor-junior"/>
            <p>Olá meu nome é {nome}, tenho {idade} de idade e trabalho de {profissao} de sites.</p>
        </div>
    )
}

export default Saudacao