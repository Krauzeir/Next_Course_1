import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <Filho nome="Bruno" familia={props.familia}/>
            <Filho nome="Lucas" familia={props.familia}/>
            <Filho nome="Alexandre" {...props}/>
            <Filho {...props} nome="Alexandre"/>
        </div>
    )
}