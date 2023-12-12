const getMensCategory = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/category/men's clothing")
        if (!response.ok) {
            throw new Error('Ошибка в getMensCategory')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

const getWomensCategory = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4")
        if (!response.ok) {
            throw new Error('Ошибка в getWomensCategory')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export { getMensCategory, getWomensCategory }
