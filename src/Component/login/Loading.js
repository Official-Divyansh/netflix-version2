import { TailSpin } from  'react-loader-spinner'


export default function Loading() {
  return (
    <div className='bg-none flex items-center justify-center h-screen'>
<TailSpin
    height = "800"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
    />
    </div>
  )
}
// <div className='text-white text-8xl absolute z-999 flex items-center justify-center'>Loading...</div>
