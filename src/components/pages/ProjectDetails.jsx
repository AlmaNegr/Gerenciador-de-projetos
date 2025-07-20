import { useParams } from "react-router-dom"

function ProjectDetails() {
    const { id } = useParams()
    return(
        <h1>Detalhes do Projeto {id}</h1>
    )
}

export default ProjectDetails