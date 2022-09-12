import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

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
            <NumeroDisplay numero={numero}/>
            <div>Valor: {numero}</div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}