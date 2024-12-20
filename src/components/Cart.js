import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store) => store.cart.items);
    const dipatch = useDispatch();
    const handelClearCart =()=>{
        dipatch(clearCart())
    }


    return <div className="text-center m-10 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 p-4 m-auto">
        <button className="p-2 m-2 rounded-lg shadow-xl"
             onClick={handelClearCart}>
                Clear Cart</button>
                {cartItems.length === 0 && <h1> Cart is empty Add Item to the Cart</h1>}
            <ItemList items={cartItems}/>
        </div>
        </div>
};

export default Cart;