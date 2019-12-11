import React from 'react';

function Home() {

    function handlePath(path) {
        window.location.href = "http://localhost:3000/" + path;
    }

    return (
        <div>
            <button onClick={() => handlePath("travellist")}> Lista de Viajem </button>
            <button onClick={() => handlePath("checklist")}> Check List </button>
        </div>
    )
}

export default Home;