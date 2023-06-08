import React, { useEffect, useState } from 'react';
import './AppList.css'

const EnvList = () => {
    const [envList, setEnvList] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/chatbot/app-info/{input}')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setEnvList(data)
            });
    }, []);

    return (
        <div>
            {envList.map(env =>
            (<div key={env}><button className='app-btn'>{env}</button></div>))}

        </div>
    );
};

export default EnvList;
