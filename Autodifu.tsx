import React, {useState} from 'react'
import Form, { Inputs } from "./Form";
import Flyer from "./Flyer";
export default function Autodifu() {
    const [state,setState] = useState<Inputs>({})
    return <div className="section">
        <div className="container">
            <div className="columns is-desktop">
                <div className="column">
                    <Flyer state={state}/>
                </div>
                <div className="column">
                    <Form onSubmit={setState}/>
                </div>
            </div>
        </div>
    </div>
}
/*
const InputExampleInput = () => <Input placeholder='Search...' />

export default InputExampleInput
*/