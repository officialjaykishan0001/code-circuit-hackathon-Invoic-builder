import { FileText } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { setClickedButton } from '../redux/buttonSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { clickedButton } = useSelector((store) => store.button)
  const user = useSelector((state) => state.auth.user);

  return (
    <div className='h-screen w-20 lg:w-64 flex flex-col glass-dark background'>
      <div className="p-4 flex items-center justify-center lg:justify-start border-b border-white/10">
        <span className='hidden lg:block text-2xl font-mono tracking-wide font-bold text-neon-blue'>INVOICE<span class="text-neon-blue">X</span></span>
        <span className="block lg:hidden text-2xl font-mono font-bold text-neon-blue">IX</span>
      </div>
      <nav className='flex-1 pt-8'>
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              onClick={() => dispatch(setClickedButton('invoice'))}
              className={`cursor-pointer flex items-center p-3 lg:px-4 lg:py-3 mx-2 rounded-lg transition-all duration-200 ${clickedButton === 'invoice' ? "text-neon-blue neon-glow" : "hover:bg-white/5 text-white/80 hover:text-white "} `}>
              <FileText />
              <span className='hidden lg:block font-medium ml-3'>Invoices</span>
            </a>
          </li>
          
        </ul>
      </nav>
      <div className="p-4 border-t border-white/10">
        <a
          href="/profile"
          onClick={() => dispatch(setClickedButton('profile'))}
          className={`cursor-pointer flex items-center p-3 lg:px-4 lg:py-3 mx-2 rounded-lg transition-all duration-200 ${clickedButton === 'profile' ? "text-neon-blue neon-glow" : "hover:bg-white/5 text-white/80 hover:text-white "} `}
        >
          <div className="flex items-center">
            {/* <div className="w-10 h-10 rounded-full bg-blue-600"></div> */}
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border-2 border-neon-blue/50">
              <img class="aspect-square h-full w-full" alt='avatar' src={user?.profilePicture} />
            </span>
          </div>
          <div className="hidden lg:block ml-3 ">
            <p className='text-sm font-medium text-white'>{`${user?.firstname} ${user?.lastname}`}</p>
            <p className="text-xs text-white/60">Admin</p>
          </div>
        </a>
      </div>
    </div >
  )
}

export default Sidebar
