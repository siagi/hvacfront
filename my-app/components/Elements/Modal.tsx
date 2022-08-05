import { FunctionComponent, useState } from 'react'

const Modal = ({children,cb}:{children:any,cb:(state:boolean)=>void}) => {
  return (
      <>
            <div className=' flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-40'>
                <div className='flex flex-col bg-white w-1/3 m-auto rounded-md bg'>
                    <div>
                        {children}
                    </div>
                    <button onClick={()=>cb(false)} className='bg-red-100 w-24 h-24 hover:bg-slate-900'>Close</button>
                </div>
            </div>
      
      </>
  )
}

export default Modal