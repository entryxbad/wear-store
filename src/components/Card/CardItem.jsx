import { Rating } from '@mui/material'

const CardItem = ({ item }) => {
    return (
        <div className='flex flex-row'>
            <div key={item.id} className='flex flex-col w-[295px] h-[298px] items-center '>
                <div>
                    <img src={item.image} alt={item.title} className='h-56 mb-4' />
                </div>
                <div className='flex flex-col items-start'>
                    <div>
                        <span className='text-[20px] font-bold'>{item.title}</span>
                    </div>
                    <div className='flex items-center gap-1 py-[8px]'>
                        <Rating name='read-only' value={item.rating.rate} readOnly />
                        <span className='text-[14px] text-gray-400'>{item.rating.rate}/5</span>
                    </div>
                    <div>
                        <span className='text-[24px] font-bold'>${item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardItem
