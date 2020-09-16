import React from 'react';
import '../css/HomePage.css';

function HomePage() {
    return (
        <div id='homeDiv'>
            <h2> Lindseys Basic Calculator </h2>
            <h3> This Project Uses the Following Frameworks:</h3>
            <ul>
                <li><a href='https://en.wikipedia.org/wiki/HTML5' target='_blank'><img src={require("../image/html5.png")} alt='HTML5 Logo'></img></a></li>
                <li><a href='https://en.wikipedia.org/wiki/CSS' target='_blank'><img src={require("../image/css.png")} alt='CSS Logo'></img></a></li>
                <li><a href='https://reactjs.org/' target='_blank'><img src={require("../image/react.png")} alt='React Logo'></img></a></li>
                <li><a href='https://redux.js.org/' target='_blank'><img src={require("../image/redux.png")} alt='Redux Logo'></img></a></li>
                <li><a href='https://react-redux.js.org/' target='_blank'><img src={require("../image/react-redux.png")} alt='React-Redux Logo'></img></a></li>
            </ul>
        </div>
    );
}

export default HomePage;