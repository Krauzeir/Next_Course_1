export default function repeticao1() {

    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bruno',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function renderizarLista() {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
    }

    function renderizarListaMap() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    
    return (
        <>
            <ul>
                {renderizarLista()}
            </ul>
            <p>"--------"</p>
            <ul>
                {renderizarListaMap()}
            </ul>
        </>
    )
}