import { useCallback,useState,useMemo } from "react";

function ShopCar(){
    const [shopcar, setShopcar] = useState(0)
    const [items, setItems] = useState([
        {id:1, nome:'Sandai Kitesu', preço:10},
        {id:2, nome:'Zabuza Sword', preço:20},
        {id:3, nome:'Death Note', preço:5},
    ]);
    const click = useCallback(() =>{setShopcar(shopcar)}, [shopcar])
    const itemsFilter = useMemo(() =>{return items.filter(item=>item.preço>1);}, [items])
    return(
        <div>
            <button onClick={click}>Adicionar</button>
            <div>
                {itemsFilter.map(item=>(<li key={item.id}>{item.nome}{item.preço}</li>))}
            </div>
        </div>
    )
}

export default ShopCar;