import React from 'react';

import ReactDom from 'react-dom';

const App =() => {
    return<>
    <NavBar/>
    <h1>ErronStore</h1>
    <ul>
        <li><a href=""> Quienes somos? </a></li>
        <li><a href=""> Nuestros productos </a></li>
        <li><a href=""> Encuentranos </a></li>
    </ul>
    </>;
}

ReactDOM.render(
    app(), document.getElementById("porAca")
)