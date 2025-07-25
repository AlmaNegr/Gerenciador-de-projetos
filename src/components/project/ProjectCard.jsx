import styles from './ProjectCard.module.css'

function ProjectCard({ project, handleDelete }) {

    return(
        <div className={styles.card}>
            <h3>{project.name}</h3>
            <p>Orçamento:<strong> R$ {project.budget}</strong></p>
            <p>Categoria:<strong> {project.category}</strong></p>
            <p>Descrição:<strong> {project.description}</strong></p>
            <button onClick={() => handleDelete(project.id)}>Excluir</button>
        </div>
    )
}

export default ProjectCard