import React from 'react'
import { Inputs } from "./Form";
import Draggable from 'react-draggable';
interface FlyerProps{
    state:Inputs
}
export default function Flyer(props:FlyerProps){
    return <div className="square" style={{backgroundColor:"red",overflow:"hidden"}}>
        {
            props.state.title && <h1 className="is-bold is-big" style={{marginLeft:30,marginTop:30}}>{props.state.title}</h1>
        }
        {
            (props.state.photo && props.state.photo.length>0) 
            && 
            <Draggable>
                <img 
                    src={URL.createObjectURL(props.state.photo[0])}
                    style={{
                        position:"absolute",
                        left:0,
                        top:0,
                        cursor:"move"
                    }}
                    draggable={false}
                />
            </Draggable>
        }

    </div>
}