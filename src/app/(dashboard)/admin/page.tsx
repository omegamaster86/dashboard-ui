import UserCard from '@/components/userCard'
import React from 'react'

const Adminpage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3'>
        {/* userCard */}
        <div className='flex gap-4 justify-between'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default Adminpage