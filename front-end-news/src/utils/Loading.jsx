
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = ({ text }) => {
    return (
        <div className="loading">
            <div>
                <h2>{text || 'loading...'}</h2>
                <Spinner animation="grow" variant="danger" />
            </div>
        </div>
    )
}

export default Loading