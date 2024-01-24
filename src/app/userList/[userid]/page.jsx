import React from 'react'

function page({params}) {
  return (
    <div>
        User Information Is:{params.userid}
    </div>
  )
}

export default page