import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>daynamik class page</h1>
        <p>
            this is parames data {params.classid}
        </p>
    </div>
  )
}

export default page