import { useCallback,useState,useMemo } from "react";

function ShopCar(){
    const [shopcar, setShopCar] = useState('')
    const handleClick = useCallback(() => { setShopCar(shopcar) }, [shopcar]);
    
    return(
        <div>
            <button onClick={handleClick}>Adicionar</button>
        </div>
    )
}

export default ShopCar;