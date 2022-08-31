import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="Página de Cadastro" secundario="Incluir, alterar e excluir coisas"></Titulo>
            <Titulo principal="Página Qualquer" secundario="Quem sabe? Você me diz" pequeno={true}></Titulo>
            <Titulo principal="Página de Login" secundario="Entrar na aplicação" pequeno></Titulo>
        </div>
    )
}