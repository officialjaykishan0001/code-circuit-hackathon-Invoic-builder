import React from 'react'
import { FileText, CalendarPlus, Settings } from 'lucide-react'

const Sidebar = () => {


  return (
    <div className='h-screen w-20 lg:w-64 flex flex-col glass-dark background'>
      <div className="p-4 flex items-center justify-center lg:justify-start border-b border-white/10">
        <span className='hidden lg:block text-2xl font-mono tracking-wide font-bold text-neon-blue'>INVOICE<span class="text-neon-blue">X</span></span>
        <span className="block lg:hidden text-2xl font-mono font-bold text-neon-blue">IX</span>
      </div>
      <nav className='flex-1 pt-8'>
        <ul className="space-y-2">
          <li>
            <a href="#" className='flex items-center p-3 lg:px-4 lg:py-3 mx-2 rounded-lg transition-all duration-200 text-neon-blue neon-glow'>
              <FileText />
              <span className='hidden lg:block font-medium ml-3'>Invoices</span>
            </a>
          </li>
          <li>
            <a href="#" className='flex items-center p-3 lg:px-4 lg:py-3 mx-2 rounded-lg transition-all duration-200 hover:bg-white/5 text-white/80 hover:text-white '>
              <CalendarPlus />
              <span className='hidden lg:block font-medium ml-3'>Schedule</span>
            </a>
          </li>
          <li>
            <a href="#" className='flex items-center p-3 lg:px-4 lg:py-3 mx-2 rounded-lg transition-all duration-200 hover:bg-white/5 text-white/80 hover:text-white '>
              <Settings />
              <span className='hidden lg:block font-medium ml-3'>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600"></div>
          <div className="hidden lg:block ml-3 ">
            <p className='text-sm font-medium text-white'>John Doe</p>
            <p className="text-xs text-white/60">Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
