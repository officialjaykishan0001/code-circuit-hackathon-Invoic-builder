import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from "../components/ui/Card";
import { EyeOff, Eye, Mail, Lock, Axis3DIcon, Loader } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { USER_API_ENDPOINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/authSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const loading = useSelector((state) => state.auth.loading)
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate('/dashboard')
        toast.success(res.data.message);

      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message)
    }finally{
      dispatch(setLoading(false));
    }
  }
  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background z-0">
        {/* Grid effect for background */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, rgba(51,195,240,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(51,195,240,0.3) 1px, transparent 1px)'
          }}>
        </div>
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,195,240,0.1),rgba(51,195,240,0)_70%)]"></div>
      </div>
      <div className="relative z-10 w-full max-w-md px-6 py-12 animate-scale-in">
        <Card className="glass-dark border-white/10 shadow-xl overflow-hidden relative">
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-neon-blue/50 via-neon-purple/50 to-neon-cyan/50 opacity-50 blur-sm  pointer-events-none"></div>

          <CardHeader className="relative space-y-1 pb-0 pt-6">
            <h2 class="text-3xl font-mono font-bold text-center b text-neon-blue to-neon-purple">Log In</h2>
            <p className="text-center text-sm text-white/70">
              Access your invoice management dashboard
            </p>
          </CardHeader>

          <CardContent className="relative space-y-6 pt-6">
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-neon-blue" />
                <input onChange={changeEventHandler} type="email" name='email' class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-black/30 border-neon-blue/30 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/30 transition-all" placeholder="Email address" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-neon-purple" />
                <input onChange={changeEventHandler} name='password' type={showPassword ? "" : 'password'} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 bg-black/30 border-neon-blue/30 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all" placeholder="Password" />
                <button

                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white/50 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <button onClick={handleLogin} type='button' class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 w-full py-3 h-auto bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300">
              { loading ? (
                <>
                  <Loader className='animate-spin'/>
                  Please wait...
                </>
              ) : 'Sign In'}
              
              </button>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-neon-blue hover:text-neon-blue/80 transition-colors">
                  Forgot password?
                </a>
                <span className="text-white/50">|</span>
                <a href="/signup" className="text-white/70 hover:text-white transition-colors">
                  Create Account
                </a>
              </div>
            </form>


          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage