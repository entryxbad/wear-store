import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { getWomensCategory } from '../../api/api'

const WomensClothing = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWomensCategory()
                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    console.log(products)

    return (
        <div className='flex flex-col items-center'>
            <div className='pt-16 pb-14'>
                <h1 className='text-[48px] font-extrabold'>Women's Clothing</h1>
            </div>
            <div>
                <Card products={products} borderB={true} />
            </div>
        </div>
    )
}

export default WomensClothing
