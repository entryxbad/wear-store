import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ButtonSecondary from '../ui/ButtonSecondary'

const Feedback = () => {
    return (
        <div className='flex px-[100px]'>
            <div className='bg-black rounded-3xl w-full px-16 grid-cols-2 grid'>
                <div className='w-[550px] py-11'>
                    <span className='text-[40px]/[45px] font-extrabold text-white'>
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative mb-2'>
                        <EmailOutlinedIcon className='absolute left-2 top-1/2 transform -translate-y-1/2' />
                        <input
                            type='text'
                            placeholder='Enter your email address'
                            className='p-2 rounded-full pl-10 w-[350px]'
                        />
                    </div>
                    <ButtonSecondary children={'Subscribe to Newsletter'} className={'font-medium'} />
                </div>
            </div>
        </div>
    )
}

export default Feedback
