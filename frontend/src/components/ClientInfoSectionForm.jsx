import React from 'react'

const ClientInfoSectionForm = () => {
    return (
        <div className="glass-card p-5 animate-fade-in">
            <div className="flex items-center mb-4">
                <div className='h-5 w-1 bg-blue-600 rounded-full mr-2'></div>
                <h2 className="text-xl font-mono font-semibold">Client Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="name">Client Name</label>
                    <input type="text" name='name' className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible-ring-offset-2 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow' placeholder='Enter client name' />
                </div>
                <div className="space-y-2">
                    <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="email">Email Address</label>
                    <input type="email" name='email' className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible-ring-offset-2 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow' placeholder='client@example.com' />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="address">Billing Address</label>
                    <textarea class="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/10 bg-white/5 resize-none h-20 focus:border-neon-blue transition-all focus:neon-glow" id="address" name="address" placeholder="Enter complete address"></textarea>
                </div>
                <div className="space-y-2">
                    <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="invoiceNumber">Invoice Number</label>
                    <input type="text" name='invoiceNumber' className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible-ring-offset-2 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow' placeholder='Enter client name' value="INV - 49554" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="issueDate">Issue Date</label>
                        <input type="date" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow" id="issueDate" name="issueDate" value="2025-05-17" />
                    </div>
                    <div className="space-y-2">
                        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="dueDate">Due Date</label>
                        <input type="date" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow" id="dueDate" name="dueDate" value="2025-06-06" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientInfoSectionForm
