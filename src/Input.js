import React ,{ useState } from 'react';

function Input({ addPost }) {
    const [input,setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const title = event.target.value;

        if(event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }
    return(
        <div className="Input">
            <div className="Input_header">Create New Post</div>
            <input className="Input_field" type="text" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
    );
}

export default Input;