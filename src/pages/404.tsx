import Lottie from 'lottie-react'
import React from 'react'
import errorpage from "../../public/assets/lottie/404.json"

function ErrorPage() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Lottie animationData={errorpage} loop={true} className='h-screen' />
      </div>
    </div>
  )
}

export default ErrorPage