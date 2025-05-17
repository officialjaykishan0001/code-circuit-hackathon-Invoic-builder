import React from 'react'
import ClientInfoSectionForm from './ClientInfoSectionForm'
import ItemsSectionForm from './ItemsSectionForm'
import LivePreview from './LivePreview'
import SummarySectionForm from './SummarySectionForm'

const CreateInvoice = ({ setClientData, setItemsData, setSummaryData }) => {
    return (
        <div className="flex-1 overflow-y-scroll p-6">
            <h1 className='text-2xl md:text3xl font-mono font-bold mb-6'>Create New Invoice</h1>
            <ClientInfoSectionForm setClientData={setClientData} />
            <ItemsSectionForm setItemsData={setItemsData} />
            <SummarySectionForm setSummaryData={setSummaryData} />
        </div>
    )
}

export default CreateInvoice
