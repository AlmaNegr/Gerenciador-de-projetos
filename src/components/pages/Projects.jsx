import { useEffect, useState } from "react"

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Carrega os projetos do localStorage quando o componente monta
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []
        setProjects(storedProjects)
    }, [])

    return (
        <div>
            <h1>Projetos Criados</h1>
            {projects.length === 0 ? (
                <p>Nenhum projeto criado ainda.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <p>Orçamento: R$ {project.budget}</p>
                            <p>Categoria: {project.category}</p>
                            <p>Descrição: {project.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Projects
