import { useState } from "react"

function NewProject() {
    const [project, setProject] = useState({name: '',
        budget: '',
        category: '',
        description: ''
    })

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Projeto enviado', project)
    }
    return(
        <div>
            <h1>Criar Novo Projeto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome do Projeto:</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                
            </form>
        </div>
    )
}

export default NewProject