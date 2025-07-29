import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utlis/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center p-4 m-2">
            <h1 className="text-4xl font-bold">cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                > clear</button>
                {cartItems.length == 0 &&
                (<h1>Cart is empty. Add items to cart</h1>)}
                <ItemCards items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;