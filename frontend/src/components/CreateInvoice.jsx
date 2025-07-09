import React from 'react'
import ClientInfoSectionForm from './ClientInfoSectionForm'
import ItemsSectionForm from './ItemsSectionForm'
import SummarySectionForm from './SummarySectionForm'
import { Menu, XIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setClickMenuButton } from '../redux/buttonSlice'

const CreateInvoice = () => {
    const dispatch = useDispatch();
    const clickMenuButton = useSelector((state) => state.button.clickMenuButton);

    return (
        <div className="flex-1 overflow-y-scroll p-6">
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl md:text3xl font-mono font-bold mb-6'>Create New Invoice</h1>
                {
                    clickMenuButton ? (
                        <XIcon className='mb-6 sm:hidden' onClick={() => dispatch(setClickMenuButton(false))} />
                    ) : (
                        <Menu className='mb-6 sm:hidden' onClick={() => dispatch(setClickMenuButton(true))} />

                    )
                }

            </div>
            <ClientInfoSectionForm />
            <ItemsSectionForm />
            <SummarySectionForm />
        </div>
    )
}

export default CreateInvoice
