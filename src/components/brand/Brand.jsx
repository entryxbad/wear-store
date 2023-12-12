import Versace from '../../assets/brands/versace.png'
import Zara from '../../assets/brands/zara.png'
import Gucci from '../../assets/brands/gucci.png'
import Prada from '../../assets/brands/prada.png'
import CalvinKlein from '../../assets/brands/calvin-klein.png'

const Brand = () => {
    return (
        <div className='flex items-center justify-around w-full h-[122px] bg-black'>
            <img src={Versace} alt='versace' />
            <img src={Zara} alt='zara' />
            <img src={Gucci} alt='gucci' />
            <img src={Prada} alt='prada' />
            <img src={CalvinKlein} alt='calvin-klein' />
        </div>
    )
}

export default Brand
