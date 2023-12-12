import ButtonPrimary from '../ui/ButtonPrimary'
import HeaderImage from '../../assets/header-image.jpg'

const Header = () => {
    return (
        <div className='flex items-center justify-center w-full h-[633px] bg-[#F2F0F1] px-[100px]'>
            <div className='flex flex-col py-[100px] mr-14'>
                <span className='text-[64px]/[64px] font-extrabold mb-[32px]'>
                    FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                </span>
                <span className='text-[16px]/[22px] text-gray-600 mb-[32px]'>
                    Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your
                    individuality and cater to your sense of style.
                </span>
                <ButtonPrimary children={'Shop Now'} />
                <div className='flex flex-row gap-[32px] mt-[48px]'>
                    <div className='flex flex-col border-r border-gray-300 w-[173px]'>
                        <span className='text-[40px] font-bold'>200+</span>
                        <span className='text-gray-600 text-[16px]/[22px]'>International Brands</span>
                    </div>
                    <div className='flex flex-col border-r border-gray-300 w-[180px]'>
                        <span className='text-[40px] font-bold'>2,000+</span>
                        <span className='text-gray-600 text-[16px]/[22px]'>High-Quality Products</span>
                    </div>
                    <div className='flex flex-col w-[200px]'>
                        <span className='text-[40px] font-bold'>30,000+</span>
                        <span className='text-gray-600 text-[16px]/[22px]'>Happy Customers</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <img src={HeaderImage} alt='Картинка' className='max-w-full max-h-full' />
            </div>
        </div>
    )
}

export default Header
