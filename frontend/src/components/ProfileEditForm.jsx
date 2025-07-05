import { Pencil, Save, User2, XIcon } from 'lucide-react'
import { useState } from 'react'

const ProfileEditForm = ({formDisabled, setFormDisabled }) => {
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
                            <XIcon />
                            Cancel
                        </span>
                    )}

                </button>
            </div>
            <div className="p-6 pt-0 relative space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="firstName">First Name</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="firstName" disabled={formDisabled} value="John" />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="lastName">Last Name</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="lastName" disabled={formDisabled} value="Doe" />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="email">Email</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="email" disabled={formDisabled} value="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="phone">Phone No</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="phone" disabled={formDisabled} value="7991211453" />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="company">Company</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="company" disabled={formDisabled} value="ACME Foundation" />
                    </div>
                    <div className="space-y-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80" for="location">Location</label>
                        <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:text-sm bg-black/30 border-neon-blue/30 focus:border-neon-blue text-white disabled:opacity-60" id="location" disabled={formDisabled} value="Hyderabad, Telengana" />
                    </div>
                </div>
                {
                    !(formDisabled) && (
                        <button
                            className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300'
                        >
                            <Save />
                            Save
                        </button>
                    )
                }

            </div>
        </div>
    )
}

export default ProfileEditForm
