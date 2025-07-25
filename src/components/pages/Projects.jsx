import { useEffect, useState } from "react"
import ProjectCard from "../project/ProjectCard"

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Carrega os projetos do localStorage quando o componente monta
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []
        setProjects(storedProjects)
    }, [])

    function handleDelete(id) {
        const updateProjects
    }

    return (
        <div>
            <h1>Projetos Criados</h1>
            {projects.length === 0 ? (
                <p>Nenhum projeto criado ainda.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>

            )}
        </div>
    )
}

export default Projects
