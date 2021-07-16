import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled} from 'react-codemirror2'
function Editor({displayName,language,value,onChange}) {

    const handleChange=(editor,data,value)=>{
        onChange(value)
    }

    return (
        <div>
            <div>
                {displayName}
            </div>
            <Controlled
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror'
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                lineNumbers:true,
                theme:'material'
            }}
            />
        </div>
    )
}

export default Editor
