import React from 'react';

const Title = (props) => {
    return (
        <div className="title__page">
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default Title;
