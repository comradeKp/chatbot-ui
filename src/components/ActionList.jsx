import React, { useEffect, useState } from 'react';
import './ActnList.css';

const ActnList = () => {
    const [actnList, setActnList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/chatbot/all-actions')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setActnList(data)
            });
    }, []);

    return (
        <div style={{ marginBottom: "40px", marginTop: "-10px" }}>
            {actnList.map(actn =>
            (<div key={actn}><button className='actn-btn'>{actn}</button></div>))}
        </div>
    );
};

export default ActnList;
