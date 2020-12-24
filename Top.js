import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Top = () => {
    return (
        <div>
            これをトップ画面にする<tr/>
            <Link to="/">LOGIN</Link><tr/>
            <Link to="/Signup">新規会員登録</Link>
        </div>
    )
}

export default Top;

