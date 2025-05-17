import React from 'react'
import { Send } from 'lucide-react'
const SummarySectionForm = () => {
    return (
        <div className='glass-card p-5 mt-6 animate-fade-in'>
            <div className="flex items-center mb-4 ">
                <div class="h-5 w-1 bg-orange-600 rounded-full mr-2"></div>
                <h2 class="text-xl font-mono font-semibold">Summary</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" htmlFor="taxRate">Tax Rate (%)</label>
                        <input type="number" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow" id="taxRate" min="0" max="100" step="0.01" value="0" />
                    </div>
                    <div className="space-y-2">
                        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono">Discount</label>
                        <div className="grid grid-cols-3 gap-2">
                            <select class="col-span-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-neon-blue transition-all">
                                <option value="percentage">%</option>
                                <option value="fixed">$</option>
                            </select>
                            <input type="number" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-2 border-white/10 bg-white/5 focus:border-neon-blue transition-all focus:neon-glow" min="0" step="0.01" value="0"></input>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-mono" HTMLfor="notes">Notes</label>
                        <textarea id="notes" placeholder="Add invoice notes here..." class="w-full border border-white/10 rounded-md bg-white/5 px-3 py-2 h-32 resize-none focus:outline-none focus:border-neon-blue transition-all focus:ring-1 focus:ring-neon-blue/20"></textarea>
                    </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                    <div className="space-y-3">
                        <div className='flex justify-between'>
                            <span className="text-white/70 font-mono">Subtotal: </span>
                            <span className="font-mono">$0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className="text-white/70 font-mono">Tax (0%): </span>
                            <span className="font-mono">$0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className="text-white/70 font-mono">Discount: </span>
                            <span className="font-mono">-$0.00</span>
                        </div>
                        <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
                            <span class="text-lg font-mono">Total:</span>
                            <span class="text-2xl font-mono text-neon-blue">$0.00</span>
                        </div>
                        <div className="pt-6">
                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-neon-blue hover:bg-neon-blue/80 text-white font-medium py-6 rounded-md transition-all animate-float">
                                <Send />
                                Send Invoice</button>
                            <div class="grid grid-cols-2 gap-3 mt-3">
                                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 border-white/20 bg-white/5 hover:bg-white/10">Save Draft</button>
                                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 border-white/20 bg-white/5 hover:bg-white/10">Export PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummarySectionForm
