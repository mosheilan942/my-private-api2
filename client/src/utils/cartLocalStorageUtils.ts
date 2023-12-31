import CartItem from "../types/CartItem";

const CART_KEY = 'cart';

const getCart = (): CartItem[] => {
    const cart = localStorage.getItem(CART_KEY);
    if (cart) {
        console.log("hi from cartLocalStorageUtils, getCart:", JSON.parse(cart));
        return JSON.parse(cart);
    }
    return [];
};

const isCartEmpty = () => {
    const cart = getCart();
    return cart.length === 0;
};

const addToCart = (cartItem: CartItem) => {
    console.log("hi from cartLocalStorageUtils, addToCart:", cartItem);
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.product_id.id === cartItem.product_id.id);

    //TODO
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};


const removeFromCart = (ptoductId: string) => {
    const cart = getCart();
    const newCart = cart.filter((item: CartItem) => item.product_id.id !== ptoductId);
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
};

const incQuantityOfProduct = (ptoductId: string) =>{
    const cart = getCart();
    const index = cart.findIndex((item: CartItem) => item.product_id.id === ptoductId);
    cart[index].quantity++;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const decQuantityOfProduct = (ptoductId: string) =>{   
    const cart = getCart();
    const index = cart.findIndex((item: CartItem) => item.product_id.id === ptoductId);
    cart[index].quantity--;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

const clearCart = () => {
    console.log("lllll");
    
    localStorage.removeItem(CART_KEY);
    console.log("pppp");
    
};

export {getCart, isCartEmpty, addToCart, removeFromCart, incQuantityOfProduct, decQuantityOfProduct, clearCart};