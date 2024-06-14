'use server'
import axios from 'axios';
export async function calculateBill(item) {
    const id = item.map(e => e.id)
    const res = await axios.post(`${process.env.API_URL}/shop/billProduct`, { id })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    return res
}

export async function getAllProduct() {
    const res = await fetch(`${process.env.API_URL}/shop/getAllProduct`)
    if (!res.ok) {
        throw new Error('cannot fetch Product')
    }
    const data = await res.json()
    return data
}

