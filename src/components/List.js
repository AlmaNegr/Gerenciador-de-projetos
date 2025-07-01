import Item from "./Item"

function List() {

    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Chevrolet"/>
            <Item marca="Renault"/>
            <Item marca="Wolkswagen"/>
        </ul>
        </>
    )
}

export default List