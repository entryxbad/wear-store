import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import TextField from '@mui/material/TextField'
import { Link } from '@mui/material'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center px-[100px] gap-[40px] w-full h-[96px]'>
            <div className=''>
                <span className='text-[32px] font-extrabold'>WEAR-STORE</span>
            </div>
            <div className='flex gap-[24px]'>
                <Link underline='hover' color='inherit' href='#'>
                    Shop
                </Link>
                <Link underline='hover' color='inherit' href='#'>
                    On Sale
                </Link>
                <Link underline='hover' color='inherit' href='#'>
                    New Arrivals
                </Link>
                <Link underline='hover' color='inherit' href='#'>
                    Brand
                </Link>
            </div>
            <div className='flex items-center'>
                <TextField
                    id='outlined-basic'
                    label='Search for products...'
                    variant='outlined'
                    className='w-[577px]'
                />
            </div>
            <div className='flex items-center gap-[14px]'>
                <ShoppingCartOutlinedIcon color='black' fontSize='medium' />
                <AccountCircleOutlinedIcon color='black' fontSize='medium' />
            </div>
        </div>
    )
}

export default Navbar
