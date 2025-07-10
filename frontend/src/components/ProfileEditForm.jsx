import { Loader, Pencil, Save, User2, XIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { setLoading, setUser } from '../redux/authSlice';
import axios from 'axios';
import { USER_API_ENDPOINT} from '../utils/constant';

const ProfileEditForm = ({ input, setInput, formDisabled, setFormDisabled }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSave = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true))

        const formData = new FormData();

        formData.append("firstname", input.firstname);
        formData.append("lastname", input.lastname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("companyName", input.companyName);
        formData.append("address", input.address);
        if (input.file) {
            formData.append("file", input.file)
        }
        console.log(formData)
        try {
            const res   = await axios.post(`${USER_API_ENDPOINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                withCredentials:true
            })

            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response.message);
        } finally {
            setFormDisabled(true)
            dispatch(setLoading(false));
        }
    }
    return (
        <div className="rounded-lg border bg-card text-card-foreground glass-dark border-white/10 shadow-xl overflow-hidden relative">
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-cyan/30 opacity-30 blur-sm"></div>
            <div className="flex justify-between placeholder:space-y-1.5 p-6 relative">
                <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-1 text-white'>
                    <User2 />
                    Personal Information
                </h3>
                <button
                    onClick={() => setFormDisabled(!formDisabled)}
                >
                    {formDisabled ? (
                        <span className='flex gap-1 text-white items-center text-sm'>
                            <Pencil size={14} />
                            Edit
                        </span>
                    ) : (
                        <span className='flex  text-white items-center text-sm'>
                            <XIcon size={18} />
                            Cancel
                        </span>
                    )}

                </button>
            </div>
            <div className="p-6 pt-0 relative space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="firstName">First Name</label>
                        <input name='firstname' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="firstName" disabled={formDisabled} value={input.firstname} />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="lastName">Last Name</label>
                        <input name='lastname' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="lastName" disabled={formDisabled} value={input.lastname} />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="email">Email</label>
                        <input name='email' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="email" disabled={formDisabled} value={input.email} />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="phone">Phone No</label>
                        <input name='phoneNumber' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="phone" type='number' disabled={formDisabled} value={input.phoneNumber} />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="company">Company</label>
                        <input name='companyName' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="company" disabled={formDisabled} value={input.companyName} />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="location">Location</label>
                        <input name='address' onChange={changeEventHandler} class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="location" disabled={formDisabled} value={input.address} />
                    </div>
                </div>
                {
                    !(formDisabled) && (
                        <button
                            onClick={handleSave}
                            className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300'
                        >
                            {loading ? <Loader className='animate-spin'/> : (
                                <>
                                    <Save />
                                    Save
                                </>
                            )}

                        </button>
                    )
                }

            </div>
        </div>
    )
}

export default ProfileEditForm
