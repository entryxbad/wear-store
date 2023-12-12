const getMensCategory = () => {
    return fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((json) => json)
}

export { getMensCategory }
