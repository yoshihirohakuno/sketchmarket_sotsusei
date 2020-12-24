import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Mypage = () => {
    return (
        <div>
            <h1>マイページだよ！</h1>
            <p>マイページの内容</p><tr/>
            <Link to="/">マーケットに戻るてきなやつ</Link>
            
        </div>
    )
}

export default Mypage
