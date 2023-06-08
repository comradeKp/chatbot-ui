import React, { useEffect, useState } from 'react';
import './AppList.css'

const
    AppList = () => {
        const [appList, setAppList] = useState([]);
        const [selectedApp, setSelectedApp] = useState('');

        useEffect(() => {
            fetch('http://localhost:8080/chatbot/all-apps')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setAppList(data)
                });
        }, []);

        return (
            <div style={{ marginBottom: "40px", marginTop: "-10px" }}>
                {appList.map(app =>
                (<div key={app}><button className='app-btn'>{app}</button></div>))}

            </div>
        );
    };

export default AppList;
