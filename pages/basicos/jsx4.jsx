export default function jsx4(){
    const subtitulo = "Estou no Javascript!"

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3*3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h2>{entre(10, 2, 4)}</h2>
            <h2>{entre(2, 1, 5)}</h2>
        </div>
    )
}

function entre (valor, min, max) {
    if(valor >= min && valor <= max){
        return "Sim"
    } else {
        return "Não"
    }
}