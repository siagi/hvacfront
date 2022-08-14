import { useState } from "react"
import AddDevice from "./AddDevice";

const DeviceDisplay = () => {
    
const [deviceAmount, setDeviceAmount] = useState<number[]>([]);
const addDevice = () => {
    setDeviceAmount([...deviceAmount, Date.now()])
}
return(
<div className="grid grid-cols-12">
    {deviceAmount.length === 0 &&
        <div className="flex justify-between col-start-1 col-span-12 pt-5">
            {/* <div className="col-start-1 col-span-11 font-semibold text-sm pb-1 pl-4 bg">Dodaj urządzenie</div> */}
            <button onClick={addDevice} className='flex justify-items-center justify-between w-full bg-teal-300'><div>Dodaj urządzenie</div><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg></button>
        </div>
    }
    <div className="col-start-1 col-span-11">
        {deviceAmount.map((device, index)=>{
            return (
                <div key={index} id={`${device}`}>
                    <AddDevice setList={setDeviceAmount} list={deviceAmount} id={`${device}`}/>
                </div>
            )
        })}
    </div>
    {deviceAmount.length > 0 && 
        <div className="flex justify-between col-start-1 col-span-12 pt-5">
        {/* <div className="col-start-1 col-span-11 font-semibold text-sm pb-1 pl-4 bg">Dodaj urządzenie</div> */}
        <button onClick={addDevice} className='flex justify-between w-full bg-teal-300'><div>Dodaj urządzenie</div><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg></button>
    </div>
    }
</div>
)
}

export default DeviceDisplay