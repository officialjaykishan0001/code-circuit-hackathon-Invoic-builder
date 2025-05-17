import CreateInvoice from './components/CreateInvoice';
import LivePreview from './components/LivePreview';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex min-h-screen w-full">
      <canvas class="fixed top-0 left-0 w-full h-full -z-10 opacity-50" width="1280" height="336"></canvas>
      <Sidebar />
      <div className='flex-1'>
        <div className="flex min-h-screen max-h-screen bg-[#10131b] text-white">
          <CreateInvoice />
          <LivePreview />
        </div>
      </div>
    </div>
  );
}

export default App;
