import React, { useEffect, useState } from 'react';
import './AppList.css'

const AppList = () => {
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
        <div>
            {appList.map(app =>
            (<div key={app}><button class='app-btn'
                onClick={() => setSelectedApp(app)}>{app}</button></div>))}

        </div>
    );
};

export default AppList;

// {termId: 1, name: 'jhhb', url: 'nbb'}