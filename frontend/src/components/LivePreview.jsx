import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetAllData, updateDownload, updateSubtotal } from '../redux/dataSlice';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import toast from 'react-hot-toast'

const LivePreview = () => {
    const clientData = useSelector((state) => state.data.clientData);
    const itemsData = useSelector((state) => state.data.itemsData);
    const summaryData = useSelector((state) => state.data.summaryData);
    const subtotal = useSelector((state) => state.data.subtotal)
    const download = useSelector((state) => state.data.download);
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();

    useEffect(() => {
        const subtotal = itemsData.reduce((total, item) => {
            const quantity = parseFloat(item.quantity) || 0;
            const price = parseFloat(item.price) || 0;
            return total + (quantity * price);
        }, 0);

        dispatch(updateSubtotal(subtotal));
    }, [itemsData, dispatch]);


    const total = (subtotal - summaryData.discount) + ((subtotal - summaryData.discount) * summaryData.taxRate / 100)

    const invoiceRef = useRef();
    if (download) {
        const input = invoiceRef.current;

        const clone = input.cloneNode(true);

        clone.style.position = "absolute";
        clone.style.top = '-999px';
        clone.style.left = '0';
        clone.style.width = input.scrollWidth + 'px';
        clone.style.height = input.scrollHeight + 'px';
        clone.style.overflow = 'visible';
        clone.style.zIndex = '-999';
        document.body.appendChild(clone);

        html2canvas(clone, { scale: 2 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');

                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('invoice.pdf');

                toast.success('Invoice exported successfully.')
                dispatch(resetAllData());
            })
            .catch((err) => {
                console.error('Failed to generate PDF:', err);
                toast.error('Error downloading invoice.')
            });
        dispatch(updateDownload(!download))
    }
    console.log(user)
    return (
        <div className='w-[100vw] md:w-[100%] lg:w-[40%] bg-gradient-to-b from-secondary to-background border border-white/10  p-6 lg:overflow-hidden overflow-y-scroll'>
            <div className="glass-card h-full p-5 overflow-auto animate-slide-in">
                <div className="flex items-center mb-6">
                    <div className="h-5 w-1 bg-neon-blue rounded-full mr-2"></div>
                    <h2 className="text-xl font-mono font-semibold">Live Preview</h2>
                </div>
                <div ref={invoiceRef} className="bg-white text-black rounded-lg shadow-xl overflow-hidden">
                    <div className='border-b-2 border-gray-200 bg-gray-100 p-6'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">INVOICE</h1>
                                <p className="text-gray-600 mt-1">#{clientData.invoiceNumber}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-800">{user?.companyName}</p>
                                <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
                                <p className="text-sm text-gray-600 ">{user?.address}</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-6 space-y-6 ">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h2 className='text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2'>Bill To:</h2>
                                <h3 className="text-base font-bold">{clientData.name}</h3>
                                <p className="text-gray-600">{clientData.email}</p>
                                <p className="text-gray-600 whitespace-pre-line">{clientData.address}</p>
                            </div>
                            <div className="md:text-right">
                                <div className="mb-2">
                                    <span classNme="text-sm font-semibold text-gray-600 uppercase tracking-wider">Issue Date:</span>
                                    <span className="text-gray-800 ml-2">{clientData.issueDate}</span>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Due Date:</span>
                                    <span classname="text-gray-800 ml-2">{clientData.dueDate}</span>
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
                                    {
                                        itemsData.map((item, idx) => (
                                            <tr className='bg-white' key={idx}>
                                                <td classname="py-3 px-4">{item.description}</td>
                                                <td className="py-3 px-4 text-right">{item.quantity}</td>
                                                <td className="py-3 px-4 text-right">${item.price}</td>
                                                <td className="py-3 px-4 text-right">${parseFloat(item.quantity) * parseFloat(item.price)}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="w-full md:w-64 ml-auto">
                                <div className="flex justify-between py-1 ">
                                    <span className="text-gray-600">Subtotal:</span>
                                    <span className="font-medium">
                                        ${subtotal}
                                    </span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-600">Tax ({summaryData.taxRate}%):</span>
                                    <span className="font-medium">${summaryData.taxRate}</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-600">Discount:</span>
                                    <span className="font-medium">-${summaryData.discount}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-2 mt-1">
                                    <span className="text-lg font-bold text-gray-800">Total:</span>
                                    <span className="text-lg font-bold text-gray-800">${total}</span>
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
