
import React from 'react';
// import LoadingGif from ''

const Loading = ({ text }) => {
    return (
        <div className="loading">
            <div>
                <h2>{text || 'loading...'}</h2>
                {/* <img src={LoadingGif} alt={'LoadingGif'} /> */}
            </div>
        </div>
    )
}

export default Loading