export default function ContadorDisplay(props){
    return (
        <div style={{height: "200px", width: "200px", borderRadius: "100px", backgroundColor: "#222", color: "#fff", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
            {props.numero}
        </div>
    )
}