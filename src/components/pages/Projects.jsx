import { useEffect, useState } from "react"
import ProjectCard from "../project/ProjectCard"
import styles from "./Projects.module.css"

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Carrega os projetos do localStorage quando o componente monta
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []
        setProjects(storedProjects)
    }, [])

    function handleDelete(id) {
        const updateProjects = projects.filter((project) => project.id !== id)
        setProjects(updateProjects)
        localStorage.setItem('projects', JSON.stringify(updateProjects))
    }

    return (
        <div className={styles.projectContainer}>
            <h1>Projetos Criados</h1>
            {projects.length === 0 ? (
                <p>Nenhum projeto criado ainda.</p>
            ) : (
                <ul className={styles.projectList}>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} handleDelete={handleDelete}/>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    )
}

export default Projects
