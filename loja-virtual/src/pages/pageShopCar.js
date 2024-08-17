import { useState, useCallback, useMemo } from "react";

function PageShop(){
    const [items, setItems] = useState('')
    const carrinho = useCallback(() =>{setItems(items)},[items])
}