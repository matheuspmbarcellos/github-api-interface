import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>full name:</p>
            <a 
                href={linkToRepo} 
                target="_blank" 
                rel="noreferrer"
            >
                {fullname}
            </a>            
        </div>
    )
};

export default RepositoryItem;
