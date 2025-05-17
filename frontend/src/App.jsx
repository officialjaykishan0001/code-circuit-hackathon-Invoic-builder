import { useState } from 'react';
import CreateInvoice from './components/CreateInvoice';
import LivePreview from './components/LivePreview';
import Sidebar from './components/Sidebar'

function App() {
  const [clientData, setClientData] = useState({
    name: "Client Name",
    email: "client@example.com",
    address: "Client Address",
    issueDate: "05/17/2025",
    dueDate: "06/06/2025",
    invoiceNumber: "INV - 49554"

  });
  const [itemsData, setItemsData] = useState({
    description: "Item Description",
    quantity: "1",
    price: "0.00"
  });
  const [summaryData, setSummaryData] = useState({
    taxRate: "0.00",
    discount: "0.00"
  });


  return (
    <div className="flex min-h-screen w-full">
      <canvas class="fixed top-0 left-0 w-full h-full -z-10 opacity-50" width="1280" height="336"></canvas>
      <Sidebar />
      <div className='flex-1'>
        <div className="flex min-h-screen max-h-screen bg-[#10131b] text-white">
          <CreateInvoice
            setClientData={setClientData}
            setItemsData={setItemsData}
            setSummaryData={setSummaryData}
          />
          <LivePreview
            clientData={clientData}
            itemsData={itemsData}
            summaryData={summaryData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
