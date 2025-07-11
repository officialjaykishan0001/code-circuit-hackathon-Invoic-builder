import { useState } from 'react'
import Layout from '../components/layout/Layout'
import ProfileCard from '../components/ProfileCard'
import ProfileEditForm from '../components/ProfileEditForm'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, XIcon } from 'lucide-react'
import { setClickMenuButton } from '../redux/buttonSlice'


const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const clickMenuButton = useSelector((state) => state.button.clickMenuButton);
  const [formDisabled, setFormDisabled] = useState(true)
  const [input, setInput] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    companyName: user?.companyName,
    address: user?.address,
    file: user?.profilePhoto
  })
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8 p-8 max-h-screen overflow-y-scroll">
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-white text-3xl sm:text-4xl font-mono font-bold'>Profile </h1>
            <p className="text-neutral-300 mt-2">Manage your account </p>
          </div>
          <div>
            {
              clickMenuButton ? (
                <XIcon className='mb-6 sm:hidden' onClick={() => dispatch(setClickMenuButton(false))} />
              ) : (
                <Menu className='mb-6 sm:hidden' onClick={() => dispatch(setClickMenuButton(true))} />

              )
            }
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 " >
          <ProfileCard input={input} setInput={setInput} formDisabled={formDisabled} />
          <div className="lg:col-span-2 space-y-6">
            <ProfileEditForm input={input} setInput={setInput} formDisabled={formDisabled} setFormDisabled={setFormDisabled} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
