import React from 'react'

const LivePreview = () => {
    return (
        <div className='w-[40%] bg-gradient-to-b from-secondary to-background border border-white/10  p-6 hidden lg:block overflow-hidden'>
            <div className="glass-card h-full p-5 overflow-auto animate-slide-in">
                <div className="flex items-center mb-6">
                    <div className="h-5 w-1 bg-neon-blue rounded-full mr-2"></div>
                    <h2 className="text-xl font-mono font-semibold">Live Preview</h2>
                </div>
                <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden">
                    <div className='border-b-2 border-gray-200 bg-gray-100 p-6'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">INVOICE</h1>
                                <p className="text-gray-600 mt-1">#INV-63462</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-800">Your Company Name</p>
                                <p className="text-sm text-gray-600 mt-1">your@email.com</p>
                                <p className="text-sm text-gray-600 ">Your Address Line</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-6 space-y-6 ">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h2 className='text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2'>Bill To:</h2>
                                <h3 className="text-base font-bold">Client Name</h3>
                                <p className="text-gray-600">client@example.com</p>
                                <p className="text-gray-600 whitespace-pre-line">Client Address</p>
                            </div>
                            <div className="md:text-right">
                                <div className="mb-2">
                                    <span classNme="text-sm font-semibold text-gray-600 uppercase tracking-wider">Issue Date:</span>
                                    <span className="text-gray-800 ml-2">2025-05-17</span>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Due Date:</span>
                                    <span classname="text-gray-800 ml-2">2025-06-16</span>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-gray-100 text-left'>
                                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Qty</th>
                                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Price</th>
                                        <th classname="py-3 px-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-white'>
                                        <td classname="py-3 px-4">Item description</td>
                                        <td className="py-3 px-4 text-right">1</td>
                                        <td className="py-3 px-4 text-right">$0.00</td>
                                        <td className="py-3 px-4 text-right">$0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="w-full md:w-64 ml-auto">
                                <div className="flex justify-between py-1 ">
                                    <span className="text-gray-600">Subtotal:</span>
                                    <span className="font-medium">
                                        $0.00
                                    </span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-600">Tax (0%):</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-600">Discount:</span>
                                    <span className="font-medium">-$0.00</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-2 mt-1">
                                    <span className="text-lg font-bold text-gray-800">Total:</span>
                                    <span className="text-lg font-bold text-gray-800">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LivePreview
