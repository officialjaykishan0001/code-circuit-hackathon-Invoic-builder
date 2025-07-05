import { useState } from 'react'
import Layout from '../components/layout/Layout'
import ProfileCard from '../components/ProfileCard'
import ProfileEditForm from '../components/ProfileEditForm'

const ProfilePage = () => {
    const [formDisabled, setFormDisabled] = useState(true)

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8 p-8 ">
        <div>
          <h1 className='text-white text-4xl font-mono font-bold'>Profile </h1>
          <p className="text-neutral-300 mt-2">Manage your account </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 " >
          <ProfileCard  formDisabled={formDisabled}/>
          <div className="lg:col-span-2 space-y-6">
            <ProfileEditForm formDisabled={formDisabled} setFormDisabled={setFormDisabled}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
