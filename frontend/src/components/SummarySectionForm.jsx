import { Send } from 'lucide-react'
import { updateDownload, updateSummaryData } from '../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

const SummarySectionForm = () => {
    const dispatch = useDispatch();
    const summaryData = useSelector((state) => state.data.summaryData);
    const subtotal = useSelector((state) => state.data.subtotal)
    const download = useSelector((state) => state.data.download)
    const total = (subtotal - summaryData.discount) + ((subtotal - summaryData.discount) * summaryData.taxRate / 100)

    const handleChange = (e) => {
        dispatch(updateSummaryData({ [e.target.name]: e.target.value }));
    };

    return (
        <div className='glass-card p-5 mt-6 animate-fade-in'>
            <div className="flex items-center mb-4">
                <div className="h-5 w-1 bg-orange-600 rounded-full mr-2"></div>
                <h2 className="text-xl font-mono font-semibold">Summary</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Section */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="taxRate" className="text-sm font-mono font-medium">Tax Rate (%)</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name='taxRate'
                            id="taxRate"
                            min="0"
                            max="100"
                            step="0.01"
                            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-mono font-medium">Discount</label>
                        <div className="grid grid-cols-3 gap-2">
                            <select className="col-span-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-neon-blue transition-all">
                                <option value="fixed">$</option>
                            </select>
                            <input
                                onChange={handleChange}
                                type="number"
                                name='discount'
                                min="0"
                                step="0.01"
                                className="col-span-2 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-mono font-medium">Notes</label>
                        <textarea
                            onChange={handleChange}
                            id="notes"
                            name='notes'
                            placeholder="Add invoice notes here..."
                            className="w-full h-32 resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 transition-all"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-white/5 rounded-lg p-4 space-y-3">
                    <div className='flex justify-between'>
                        <span className="text-white/70 font-mono">Subtotal:</span>
                        <span className="font-mono">${subtotal}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className="text-white/70 font-mono">Tax ({summaryData.taxRate}%):</span>
                        <span className="font-mono">${(subtotal - summaryData.discount) * summaryData.taxRate / 100}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className="text-white/70 font-mono">Discount:</span>
                        <span className="font-mono">-${summaryData.discount}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
                        <span className="text-lg font-mono">Total:</span>
                        <span className="text-2xl font-mono text-neon-blue">${total.toFixed(2)}</span>
                    </div>

                    <div className="pt-6 space-y-3">
                        <button
                            onClick={() => dispatch(updateDownload(!download))}
                            className="w-full flex items-center justify-center gap-2 h-10 px-4 py-6 text-sm font-medium text-white bg-neon-blue rounded-md hover:bg-neon-blue/80 transition-all animate-float"
                        >
                            <Send />
                            Export PDF
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                className="cursor-not-allowed w-full h-10 px-4 py-2 text-sm font-medium rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                Send Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummarySectionForm;
