import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [header,setHeader] = useState('')
    const handleClick = useCallback(() => {
        setHeader()
    });

    return (
        <div>
            <section className="seçao1">
                <h1>Loja de Artigos de Nerd</h1>
                <h3>O Que Você Deseja Hoje?</h3>
                <input id="headerSrc" type="text"></input>
            </section>
            <section id="links">
                <Link to='/'>Login</Link>
                <Link to='/shopcar'>Carrinho de Compras</Link>
            </section>
            <section id="items">
                <div id="sandai">
                    <h2>Sandai Kitetsu</h2>
                    <img src="../../img/sandai.jpg"/>
                    <button onClick={handleClick}>Adicionar</button>
                </div>
                <div id="zabuza">
                    <h2>Zabuza Sword</h2>
                    <img src="../../img/zabuza.png"/>
                    <button onClick={handleClick}>Adicionar</button>
                </div>
                <div id="note">
                    <h2>Death Note</h2>
                    <img src="../../img/deathnote.webp"/>
                    <button onClick={handleClick}>Adicionar</button>
                </div>
            </section>
        </div>
    )
}

export default Header;