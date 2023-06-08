import React, { useEffect, useState } from 'react';
import './ActnList.css';

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
const isurl = props.state.userQuery.toUpperCase().includes("URL")

    return (<div>
        {
            isurl?<a style={{ color: "#fff",backgroundColor: "rgb(55, 107, 126)",borderRadius: "5px", padding:"5px" ,fontSize: "0.8rem"}}
            href={rsp.info} target="_blank">{rsp.info}
            </a>:<p style={{ color: "#fff",backgroundColor: "rgb(55, 107, 126)",borderRadius: "5px", padding:"5px" ,fontSize: "0.8rem"}}>
            {rsp.info}</p>
        }
    </div>
        // <div>
        //     <a style={{ color: "#fff",backgroundColor: "rgb(55, 107, 126)",borderRadius: "5px", padding:"5px" ,fontSize: "0.8rem"}}
        //     href={rsp.info} target="_blank" rendered = {rsp.type=='URL'}>{rsp.info}
        //     </a>
            
        // </div>
    );
};

export default RequestWidget;
