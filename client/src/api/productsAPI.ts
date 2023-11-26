import Product from "../types/Product";
import handleApiRes from "./apiResHandler";

// external
async function getTop5Products(): Promise<Product[]> {
    const response = await fetch('/api/products/topFiveProducts');
    return await handleApiRes(response);
}

// external
async function getProduct(pid: string): Promise<Product> {
    const response = await fetch(`/api/products/${pid}`);
    return await handleApiRes(response);
}

// external
async function reviewProduct(pid: string, title: string, review: string, rating: number): Promise<Product> {
    const response = await fetch(`/api/products/${pid}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ review: review, rating: rating, title: title }),
    });

    return await handleApiRes(response);
}

async function getReviews(pid: string): Promise<Product> {
    const response = await fetch(`/api/products/${pid}/reviews`);
    return await handleApiRes(response);
}

async function reviewFeedback(feedback:boolean){
    const response = await fetch(`/api/products/${feedback}/reviews/feedback`);
    return await handleApiRes(response);
}

export default{ getTop5Products, getProduct, reviewProduct, getReviews,reviewFeedback};
