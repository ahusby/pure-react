import React from 'react';
import ReactDom from 'react-dom';

function MyThing() {
    return (
        <div className='book'>
            <div className='title'>
                Line1
                {' '}
                Line2
            </div>
            <div className='The Author'>The Author</div>
            <ul className='stats'>
                <li className='rating'>5 stars</li>
                <li className='isbn'>12-345678-910</li>
            </ul>
        </div>
    )
}

function Greeting({nick}) {
    let username = nick

    return (
        <span>"Dette er en test" {username ? `Hello ${username}` : 'Not logged in'}</span>
    )
}

const Table = ({children}) => {
    return (
        <table>
            <tbody>
            <tr>
                {children}
            </tr>
            </tbody>
        </table>
    )
}

const Data = () => {
    return (
        <>
            <td>col1</td>
            <td>col2</td>
            <td>col3</td>
        </>
    )
}

ReactDom.render(
    <>
        <Table>
            <Data/>
        </Table>
        <Greeting nick={"aaaaaaa"}/>
        <MyThing/>
    </>,
    document.querySelector('#root')
);
