import { useState } from "react"

export default function mouse() {
    // React Hooks
    // useState() retorna 2 elementos, o primeiro[0] é o valor do elemento, o seguindo valor é a função que altera o valor do elemento (set...)

    
    const arrayX = useState(0)
    let x = arrayX[0]
    const setX = arrayX[1]

    /*
    const arrayY = useState(0)
    let y = arrayY[0]
    const setY = arrayY[1]
    */

    //Forma ideal de declarar variável para useState() é usando destructirin abaixo
    const [y, setY] = useState(0)


    const estilo = {backgroundColor: "#222", color: "#fff", display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column"}

    function quandoMover(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}