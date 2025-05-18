import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemData, updateItemData, removeItemData } from '../redux/dataSlice';

const ItemsSectionForm = () => {
    const dispatch = useDispatch();
    const itemsData = useSelector((state) => state.data.itemsData);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        dispatch(updateItemData({ index, key: name, value }));
    };

    const handleAddItem = () => {
        dispatch(addItemData());
    };

    const handleRemoveItem = (index) => {
        dispatch(removeItemData(index));
    };

    return (
        <div className='glass-card p-5 mt-6 animate-fade-in'>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="h-5 w-1 bg-purple-600 rounded-full mr-2"></div>
                    <h2 className="text-xl font-mono font-semibold">Items</h2>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className='w-full'>
                    <thead>
                        <tr className='text-left border-b border-white/10'>
                            <th className="pb-2 font-mono font-medium text-sm">Description</th>
                            <th className="pb-2 font-mono font-medium text-sm text-right w-24">Quantity</th>
                            <th className="pb-2 font-mono font-medium text-sm text-right w-32">Price</th>
                            <th className="pb-2 font-mono font-medium text-sm text-right w-32">Amount</th>
                            <th className="pb-2 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsData.map((item, index) => (
                            <tr key={index} className='border-b border-white/5 bg-white/[0.02]'>
                                <td className="py-3">
                                    <input
                                        type="text"
                                        name="description"
                                        value={item.description}
                                        onChange={(e) => handleChange(index, e)}
                                        className="flex h-10 w-full rounded-md px-3 py-2 text-base bg-transparent border-0 focus:border-neon-blue focus:ring-0 md:text-sm"
                                        placeholder="Item description"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => handleChange(index, e)}
                                        className="flex h-10 w-full rounded-md px-3 py-2 text-base bg-transparent border-0 text-right focus:ring-0 md:text-sm"
                                        placeholder="0"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="price"
                                        value={item.price}
                                        min="0"
                                        step="0.01"
                                        onChange={(e) => handleChange(index, e)}
                                        className="flex h-10 w-full rounded-md px-3 py-2 text-base bg-transparent border-0 text-right focus:ring-0 md:text-sm"
                                        placeholder="0"
                                    />
                                </td>
                                <td className='text-right font-mono'>
                                    ${parseFloat(item.quantity || 0) * parseFloat(item.price || 0)}
                                </td>
                                <td>
                                    <button
                                        className="rounded-md h-8 w-8 p-0 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                                        onClick={() => handleRemoveItem(index)}
                                        disabled={itemsData.length === 1}
                                    >
                                        <Trash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={handleAddItem}
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-dashed border-white/20 bg-transparent hover:bg-white/5 hover:border-primary text-white px-4 py-2 h-10 transition-all"
                >
                    <Plus />
                    Add Item
                </button>
                <div className="text-right">
                    <p className='text-sm text-white/60 font-mono'>
                        Total items: <span className="text-white">{itemsData.length}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemsSectionForm;
