import CardItem from './CardItem'

const Card = ({ products, borderB }) => {
    const containerStyle = `flex flex-row w-[1400px] justify-between pb-16 ${
        borderB ? 'border-b border-[#F2F0F1]' : ''
    }`

    return (
        <div className={containerStyle}>
            {products.map((item) => (
                <CardItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Card
