import { FunctionComponent, useState } from 'react'

const ButtonSwitch = ({titleLeft,titleRight}:{titleLeft:string,titleRight:string}) => {
    const [chosen,setChosen] = useState<string>('');

  return (
        <div className='flex gap-2'>
           <button onClick={()=>setChosen(titleLeft)} className={`border p-2  rounded-md hover:border-gray-400 ${chosen === titleLeft ? 'border-gray-400' : ''} `}>{titleLeft}</button>
           <button onClick={()=>setChosen(titleRight)} className={`border p-2 hover:border-gray-400 rounded-md ${chosen === titleRight? 'border-gray-400' : ''}`}>{titleRight}</button>
        </div>
  )
}

export default ButtonSwitch