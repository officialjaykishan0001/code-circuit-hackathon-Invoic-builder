import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10'>
            <div className="flex items-center">
                <span className="inline-block text-xl font-mono font-bold text-white">
                    InvoiceX
                </span>



            </div>
            <div className="flex items-center gap-4">
                <Link to="/login">
                    <button
                        variant="ghost"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                        Login
                    </button>
                </Link>
                <Link to="/login">
                    <button
                        className="text-sm font-medium px-4 py-2 h-auto border border-neon-blue/50 bg-neon-blue/10 hover:bg-neon-blue/20 text-white rounded-lg transition-all"
                    >
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar