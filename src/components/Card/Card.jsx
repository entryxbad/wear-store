import CardItem from './CardItem'

const Card = ({ products }) => {
    return (
        <div className='flex flex-row w-[1400px] justify-between'>
            {products.map((item) => (
                <CardItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Card
