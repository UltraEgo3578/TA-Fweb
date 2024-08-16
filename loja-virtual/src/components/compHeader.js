import React, { useState } from "react";

function Header(){
    const [header,setHeader] = useState('')
    return (
        <div>
            <section className="seçao1">
                <h1>Loja de Artigos de Nerd</h1>
                <h3>O Que Você Deseja Hoje?</h3>
                <input id="headerSrc" type="text"></input>
            </section>
            <section className="seçao2">

            </section>
        </div>
    )
}

export default Header;