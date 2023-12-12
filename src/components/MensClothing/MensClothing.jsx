import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { getMensCategory } from '../../api/api'

const MensClothing = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getMensCategory().then((data) => setProducts(data))
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <div className='pt-16 pb-14'>
                <h1 className='text-[48px] font-extrabold'>Men's Clothing</h1>
            </div>
            <div>
                <Card products={products} borderB={true} />
            </div>
        </div>
    )
}

export default MensClothing
