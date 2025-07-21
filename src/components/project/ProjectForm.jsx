import { useState } from "react"

function ProjectForm({ handleSubmit, btnText }) {
    const [project, setProject] = useState({
        name: '',
        budget: '',
        category: '',
        description: ''
    })

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(project) // envia para o NewProject
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Nome do Projeto:</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label>Orçamento:</label>
                    <input type="number" name="budget" onChange={handleChange} />
                </div>
                <div>
                    <label>Categoria:</label>
                    <select name="category" onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="infra">Infraestrutura</option>
                        <option value="dev">Desenvolvimento</option>
                        <option value="design">Design</option>
                    </select>
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea name="description" onChange={handleChange}></textarea>
                </div>
                <button type="submit">{btnText}</button>
            </form>
        </div>
    )
}

export default ProjectForm
