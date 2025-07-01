import styles from './Pessoa.module.css'

function Pessoa(props) {

    return(
        <div>
            <h1 className={styles.pessoaContainer}>Nome: {props.nome}</h1>
            <p className={styles.pessoaContainer}>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa