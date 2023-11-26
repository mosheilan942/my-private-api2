export interface OrderInterface {
    cartItems: Product[];
    orderTime: Date;
    userId: string;
    userEmail: string;
    userName: string;
    status: OrderStatusEnum;
    totalPrice: number;
    shippingDetails: {
        address: {
            country: string;
            city: string;
            street: string;
            celPhone: number;
            zipCode: number;
        };
        contactNumber: string;
        orderType: OrderEnum;
    };
}

export enum OrderEnum {
    Express = 'Express',
    Regular = 'Regular',
    SelfCollection = 'SelfCollection',
}

export enum OrderStatusEnum {
    Waiting = 'Waiting',
    Sent = 'Sent',
    Received = 'Received',
    Canceled = 'Canceled',
}

export interface Product {
    id: string; // UUID
    name: string;
    salePrice: number;
    quantity: number;
    description: string;
    category: string;
    discountPercentage: number;
    rating: number;
    click: number;
    coordinate: {
        longitude1: number;
        longitude2: number;
        longitude3: number;
        latitude1: number;
        latitude2: number;
        latitude3: number;
    };
    image: {
        url: string;
        alt: string;
    };
    tags: {
        tag: string[];
    };
}

export interface Category {
    id: string;
    name: string;
    clicked: number;
}

export interface Review {
    productId: string;
    userId: string;
    title: string;
    review: string;
    rating: number;
    like: number;
    disLike: number;
}
