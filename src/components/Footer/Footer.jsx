import Visa from '../../assets/payment/visa.png'
import MasterCard from '../../assets/payment/mastercard.png'
import PayPal from '../../assets/payment/paypal.png'
import ApplePay from '../../assets/payment/apple-pay.png'
import GooglePay from '../../assets/payment/google-pay.png'
import ButtonSecondary from '../ui/ButtonSecondary'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const Footer = () => {
    return (
        <div className='flex flex-col px-[100px] bg-black'>
            <div className='px-16 grid-cols-2 grid border-b border-[#F2F0F1]'>
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
            <div className='grid grid-cols-2 h-52'>
                <div className='flex justify-start items-center'>
                    <span className='text-xl font-medium text-gray-400'>© 2000-2023, All rights reserved</span>
                </div>
                <div className='flex flex-row justify-end items-center'>
                    <img src={Visa} alt='visa' />
                    <img src={MasterCard} alt='mastercard' />
                    <img src={PayPal} alt='paypal' />
                    <img src={ApplePay} alt='apple-pay' />
                    <img src={GooglePay} alt='google-pay' />
                </div>
            </div>
        </div>
    )
}

export default Footer
