import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
    const [numero, setNumero] = useState(0)

    //Arrow Function
    const incrementar = () => {
        setNumero(numero + 1)
    }
    /*Arrow Function reduzida
    const incrementar = () => setNumero(numero +1)
    */

    //Single Function
    function decrementar() {
        setNumero(numero - 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <ContadorDisplay numero={numero}/>
            <div>Valor: {numero}</div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}