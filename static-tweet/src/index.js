import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Tweet = () => {
    return (
        <div className='tweet'>
            <Avatar/>
            <div className="content">
                <Author/>
                <Message/>
            </div>
        </div>
    )
}

const Avatar = () => {
    return (
        <img
            src="https://www.gravatar.com/avatar/e40dcfbb1413fce4d0b0f7979334ac82"
            className="avatar"
            alt="avatar"/>
    );
};

const Message = () => {
    return (
        <div className="message">This is less than 140 characters.</div>
    )
}

const Author = () => {
    return (
        <span className="author">
            <span className="name">Your name</span>
            <span className="handle">@yourhandle</span>
        </span>
    )
}
ReactDOM.render(
    <Tweet/>, document.querySelector('#root')
)
