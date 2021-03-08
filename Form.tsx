import React, { Ref } from 'react'
import { useForm } from "react-hook-form";
interface FormProps{
    name:string
    formRef:Ref
}
function FileSelect(props:FormProps){
    return <div className="file">
        <label className="file-label">
            <input className="file-input" type="file" name={props.name} ref={props.formRef}/>
            <span className="file-cta">
                <span className="file-icon">
                    <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                    Choose a file…
                </span>
            </span>
        </label>
    </div>
}
export interface Inputs{
    photo:FileList,
    title?:string
};
interface FormComponentProps{
    onSubmit:(Inputs)=>void
}
export default function Form(props:FormComponentProps){
    const { register, handleSubmit, watch, errors } = useForm<Inputs>({mode:"all"});
    return <form onSubmit={handleSubmit(props.onSubmit)}>
        <FileSelect formRef={register({ required: true })} name="photo"/>
        <input name="title" defaultValue="Titulo" ref={register} className="input"/>
        <input type="submit" className="button" value="Generar"/>
    </form>
}