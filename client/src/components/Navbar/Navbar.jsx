import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkMode from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingBag';

const Navbar =()=>{
  return(
    <nav className="w-full min-h-16 bg-white-300 flex justify-evenly items-center py-2">
      {/* <div className ="">
        <svg xmlns="http://www.w3.org/2000/svg" width="176" height="40" fill="none" viewBox="0 0 176 40">
          <path fill="#283841" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd">
          </path>
          <path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z">
        </path>
      </svg>
      </div> */}
      <div className="flex items-center justify-center space-x-3">
        <img src="../public/vite.svg" alt="Logo" className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold">SHAPI</span>
      </div>

      <div className='flex items-center justify-between border rounded-md w-2/6 '>
        <input type="search" placeholder="Bags, Shoes, Umbrella" className='outline-none px-2 w-full'/>
        <button className='cursor-pointer w-14 h-10 flex items-center justify-center'>
          <SearchIcon className='text-gray-600 text-md p-0'/>
        </button>
      </div>

      <div className='flex items-center justify-center align-center space-x-3'>
      {/* Header Links */}
      <ul className='flex  space-x-6 items-center justify-center '>
        <li className='cursor-pointer'><span className='hover:text-blue-600 text-md'>Home</span></li>
        <li className='cursor-pointer'><span className='hover:text-blue-600 text-md'>Products</span></li>
        <li className='cursor-pointer'><span className='hover:text-blue-600 text-md'>Category</span></li>
        <li className='cursor-pointer'><span className='hover:text-blue-600 text-md'>About</span></li>
      </ul>

      </div>

      {/* Inputs and Toggles */}
      <div className='flex border space-x-2'>
        <div className='flex items-center justify-center'>
          <button className='group flex items-center align-center justify-center cursor-pointer space-x-1'>
            <div className='relative flex items-center justify-center'>
              <ShoppingCart className='text-gray-600 text-md'/>
              <div className='absolute bg-red-600 w-4 h-4 rounded-xl flex items-center justify-center -top-1.5 -right-1.5 text-xs'><span className='text-white text-sm'>0</span></div>
            </div>
            {/* <span className='text-gray-600 group-hover:text-blue-600 text-md'>Cart <span>(0)</span></span> */}
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <button className='cursor-pointer'>
            <DarkMode />
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <button className=''>
            <AccountCircle className='text-black-600'/>
          </button>
        </div>
      </div>


    </nav>
  )
}

export default Navbar;