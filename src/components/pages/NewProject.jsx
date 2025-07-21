import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        // Pega os projetos que já estão no localStorage ou cria uma lista vazia
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []

        // Dá um id único ao projeto
        project.id = Date.now()

        // Adiciona o projeto novo na lista
        storedProjects.push(project)

        // Salva a lista atualizada no localStorage
        localStorage.setItem('projects', JSON.stringify(storedProjects))

        // Redireciona para a página de listagem
        navigate('/projects')
    }

    return (
        <div>
            <h1>Criar Novo Projeto</h1>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject
