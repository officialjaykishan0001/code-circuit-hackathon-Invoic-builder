import { useState } from 'react';
import CreateInvoice from './components/CreateInvoice';
import LivePreview from './components/LivePreview';
import Sidebar from './components/Sidebar'
import { useSelector } from 'react-redux'
import ProfileCard from './components/ProfileCard';
import Layout from './components/layout/Layout';
function App() {
  const { clickedButton } = useSelector((store) => store.button);
  console.log(clickedButton)
  return (
    <Layout>
    <div className='flex-1'>
      <div className="flex min-h-screen max-h-screen bg-[#10131b] text-white">
        <CreateInvoice />
        <LivePreview />
      </div>
    </div>
</Layout>

  );
}

export default App;
