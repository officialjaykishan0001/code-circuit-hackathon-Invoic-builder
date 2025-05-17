import React from 'react'
import { Plus, Trash2 } from 'lucide-react'

const ItemsSectionForm = ({ setItemsData }) => {
    const handleChange = (e) => {
        setItemsData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className='glass-card p-5 mt-6 animate-fade-in'>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="h-5 w-1 bg-purple-600 rounded-full mr-2"></div>
                    <h2 class="text-xl font-mono font-semibold">Items</h2>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className='w-full'>
                    <thead>
                        <tr className='text-left border-b border-white/10'>
                            <th class="pb-2 font-mono font-medium text-sm">Description</th>
                            <th class="pb-2 font-mono font-medium text-sm text-right w-24">Quantity</th>
                            <th class="pb-2 font-mono font-medium text-sm text-right w-32">Price</th>
                            <th class="pb-2 font-mono font-medium text-sm text-right w-32">Amount</th>
                            <th class="pb-2 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-white/5 bg-white/[0.02]'>
                            <td className="py-3">
                                <input onChange={handleChange}  type="text" name='description' class="flex h-10 w-full rounded-md border-input px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2   md:text-sm border-0 bg-transparent focus:border-neon-blue focus:ring-0" placeholder="Item description" />
                            </td>
                            <td>
                                <input onChange={handleChange} type="number" name='quantity' class="flex h-10 w-full rounded-md border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 bg-transparent text-right focus:ring-0" min="1"  placeholder='0' />
                            </td>
                            <td>
                                <input onChange={handleChange} type="number" name='price' class="flex h-10 w-full rounded-md border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 bg-transparent text-right focus:ring-0" min="0" step="0.01" placeholder='0' />
                            </td>
                            <td className='text-right font-mono'>
                                $0.01
                            </td>
                            <td>
                                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md h-8 w-8 p-0 text-red-500 hover:text-red-400 hover:bg-red-500/10" disabled="">
                                    <Trash2 />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 py-2 border border-dashed border-white/20 bg-transparent hover:bg-white/5 hover:border-primary text-white px-4 transition-all">
                    <Plus />
                    Add Item
                </button>
                <div className="text-right">
                    <p className='text-sm text--white/60 font-mono'>
                        Total items:
                        <span class="text-white">1</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ItemsSectionForm
