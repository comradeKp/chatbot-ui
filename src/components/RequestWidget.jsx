import React, { useEffect, useState } from 'react';
import './ActnList.css';
import './RequestWidget.css';


const RequestWidget = (props) => {
    console.log(props);
    const [rsp, setRsp] = useState('');
    useEffect(() => {
        fetch(`http://localhost:8080/chatbot/app-info/${props.state.userQuery}`)
            .then((res) => res.json())
            .then((data) => {
                setRsp(data)
            });
    }, []);
    const isurl = rsp.type == "URL"

    return (<div className='res-styl'>
        {
            isurl ? <a style={{color: '#fff'}}className='in-styl'
                href={rsp.info} target="_blank">{rsp.info}
            </a> :
                <p className='in-styl'>
                    {rsp.info}</p>
        }
    </div>
    );
};

export default RequestWidget;

