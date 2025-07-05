import React from 'react'
import { Building, Camera, Mail, Map, Phone } from 'lucide-react'

const ProfileCard = ({formDisabled}) => {
  return (
    <>
      <div className="lg:col-span-1">
        <div className="rounded-lg border bg-card text-card-foreground glass-dark bg-white/10 shadow-xl overflow-hidden relative">
          <div className='absolute -inset-[1px] rounded-xl bg-gradient-to-r from-neon-blue/50 via-neon-purple/50 to-neon-cyan/50 opacity-50 blur-sm'></div>
          <div className="flex flex-col space-y-1.5 p-6 relative text-center pb-4">
            <div className="relatvie mx-auto mb-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 border-2 border-neon-blue/50">
                <img class="aspect-square h-full w-full" alt='avatar' src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&amp;h=150&amp;fit=crop&amp;crop=face" />
              </span>
              <span className={formDisabled ? 'hidden' : ''}>
                <Camera size={35} className='relative cursor-pointer left-[60px] bottom-[30px] bg-neon-cyan p-2 rounded-full' />
              </span>
            </div>
            <h3 class="font-semibold tracking-tight text-xl text-white">
              John Doe
            </h3>
          </div>
          <div className="p-6 pt-0 relative space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail />
                john.deo@example.com
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone />
                +91 799 121 4531
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Map />
                Hyderabad, Telengana
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Building />
                Acme Foundation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
