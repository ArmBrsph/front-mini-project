"use sever"
export async function getDetailProduct(id) {
    const res = await fetch(`${process.env.API_URL}/api/getDetailProduct?id=${id}`)
    if (!res.ok) {
        throw new Error('cannot fetch Product')
    }
    const data = await res.json()
    return data
}