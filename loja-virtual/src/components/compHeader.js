import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header(){
    const [header,setHeader] = useState('')
    return (
        <div>
            <section className="seçao1">
                <h1>Loja de Artigos de Nerd</h1>
                <h3>O Que Você Deseja Hoje?</h3>
                <input id="headerSrc" type="text"></input>
            </section>
            <section id="links">
                <Link to='/login'>Login</Link>
                <Link to='/shopcar'>Carrinho de Compras</Link>
            </section>
        </div>
    )
}

export default Header;