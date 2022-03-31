import React from 'react'
import page404 from "../../Images/page404.svg"

const Page404 = () => {
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center vh-100">
      <img src={page404} alt="not found page" width="500" height="400" />
      <button className="btn btn-success">
        Back Home 😇
      </button>
    </div>
  )
}

export default Page404
