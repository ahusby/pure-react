import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Tweet = () => (
    <div className='tweet'>
        <Avatar/>
        <div className="content">
            <Author/>
            <Time/>
            <Message/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
    </div>
)


const Avatar = () => (
    <img
        src="https://www.gravatar.com/avatar/e40dcfbb1413fce4d0b0f7979334ac82"
        className="avatar"
        alt="avatar"/>
)

const Message = () =>
    <div className="message">This is less than 140 characters.</div>

const Author = () => {
    return (
        <span className="author">
            <span className="name">Your name</span>
            <span className="handle">@yourhandle</span>
        </span>
    )
}

const Time = () =>
    <span className="time">3h ago</span>


const ReplyButton = () =>
    <i className="fa fa-reply reply-button"/>

const RetweetButton = () =>
    <i className="fa fa-retweet retweet-button"/>

const LikeButton = () =>
    <i className="fa fa-heart like-button"/>

const MoreOptionsButton = () =>
    <i className="fa fa-ellipsis-h more-options-button"/>

ReactDOM.render(
    <Tweet/>, document.querySelector('#root')
)
