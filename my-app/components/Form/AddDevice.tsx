import { useEffect, useRef, useState } from "react";
export interface Device {
    brand:string,
    deviceType?:string,
    serviceType?:string,
    powerDevice:string,
    refrigerant:string,
    serialNumber:string,
    deviceFaults:string[]

}

const AddDevice = ( {id, setList, list, position}:{list:any[],id:string, setList:([]:any[])=>void, position:number}) => {
    const [deviceFault, setDeviceFault] = useState<string[]>([]);
    const [deviceState, setDeviceState] = useState<Device>({
        brand:'',
        powerDevice:'',
        refrigerant:'',
        serialNumber:'',
        deviceFaults:[]
    }); 
    const elementsToFix = useRef<HTMLDivElement>(null);
    const inputFault = useRef<HTMLInputElement>(null)
    const serviceTypeD = useRef<HTMLSelectElement>(null)
    const deviceTypeD = useRef<HTMLSelectElement>(null)
    const addElementToFixList = (position:number) => {
        console.log('asd')
        const element = document.createElement('input');
        element.setAttribute('id', `form-device-${position}-fault-`+Date.now().toString())
        element.setAttribute('placeholder','Wpisz usterkę')
        element.style.background = '#e4e4e7';
        element.style.paddingLeft = '10px';
        element.style.paddingRight = '3px';
        element.style.paddingBottom = '5px';
        element.style.paddingTop = '5px';
        element.style.border = '1px solid #d4d4d8'
        element.style.marginTop = '5px';
        element.style.outline = 'none'
        element.style.fontSize = '14px'
        element.addEventListener('focus', (e:any)=>{
            e.target.style.background = '#fff';
        });
        element.addEventListener('blur', (e:any)=>{
            e.target.style.background = '#e4e4e7';
        })
        element.addEventListener('change', ()=>console.log(elementsToFix))
        console.log(element)
        elementsToFix.current?.appendChild(element);
    }
    const removeElementFromFixList = () => {
        if(elementsToFix && elementsToFix.current && elementsToFix.current.childNodes.length -1 > 1){
            elementsToFix.current?.removeChild(elementsToFix.current.childNodes[elementsToFix.current.childNodes.length-1])
        }
    }

  return (
    <div className="px-5 mx-3 my-3 border" id={id}>
        <div className="px-3 pt-2">
            <label className="font-semibold text-sm">
            <div className="pb-1">
                Dane urządzenia:
            </div>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-brand`}>
                Marka urządzenia
            </label>
            <input  value={deviceState.brand} onChange={(e)=>setDeviceState({...deviceState, brand:e.target.value})} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id={`form-device-${position}-brand`} type="text" placeholder="Wpisz markę urządzenia"/>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-type`}>
                Typ
            </label>
            <select value={deviceState.deviceType} name="cars" id={`form-device-${position}-device-type`} onChange={(e)=>setDeviceState({...deviceState, deviceType:e.target.value})} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none">
                <option value="">--Choose and option--</option>
                <option value="scienny">Ścienny</option>
                <option value="kaseta">Kaseta</option>
            </select>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-service-type`}>
                Rodzaj serwisu
            </label>
            <select value={deviceState.serviceType} onChange={(e)=>setDeviceState({...deviceState, serviceType:e.target.value})} name="service-type" id={`form-device-${position}-service-type`} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none">
                <option value="">--Choose and option--</option>
                <option value="awaria">Awaria</option>
                <option value="konserwacja">Konserwacja</option>
            </select>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-power`}>
                Moc urządzenia
            </label>
            <input value={deviceState.powerDevice} onChange={(e)=>setDeviceState({...deviceState, powerDevice:e.target.value})} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id={`form-device-${position}-power`} type="text" placeholder="Wpisz moc urządzenia"/>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-refrigerant-type`}>
                Rodzaj czynnika chłodniczego
            </label>
            <input value={deviceState.refrigerant} onChange={(e)=>setDeviceState({...deviceState, refrigerant:e.target.value})} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id={`form-device-${position}-refrigerant-type`} type="text" placeholder="Wpisz rodzaj czynnika chlodniczego"/>
            <label className="font-semibold text-sm" htmlFor={`form-device-${position}-serial-nr`}>
                Nr seryjny
            </label>
            <input value={deviceState.serialNumber} onChange={(e)=>setDeviceState({...deviceState, serialNumber:e.target.value})} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id={`form-device-${position}-serial-nr`} type="text" placeholder="Wpisz numer seryjny urzadzenia"/>
            </label>
        </div>
        <div className="grid grid-cols-12">
                            <div className="px-3 pt-2 mb-6 col-start-1 col-span-11 flex flex-col" ref={elementsToFix}>
                                <label className="font-semibold text-sm" htmlFor={`form-device-${position}-fault`}>
                                    <div className="pb-1">
                                        Wypisz usterki:
                                    </div>
                                </label>
                                {deviceFault.length > 0 && deviceFault.map((fault,index)=>{
                                    return <input key={index} id={`form-device-${position}-fault-` + Date.now().toString()} disabled value={fault}/>
                                })}
                                <input ref={inputFault} className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" type="text" placeholder="Wpisz usterkę"/>
                            </div>
                            <div className="col-start-12 flex items-end pb-6">
                                <button type="button" onClick={()=>{
                                    console.log(deviceFault)
                                    if(deviceFault && inputFault.current){

                                        setDeviceFault([...deviceFault,inputFault.current?.value])
                                        inputFault.current.value = ''
                                    }
                                    }}><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg></button>
                                <button type="button" onClick={()=>{
                                    console.log('deviceState',deviceState)
                                    setDeviceFault([...deviceFault].slice(0,deviceFault.length-1))
                                    // if(deviceFault.length > 1){
                                    //     console.log([...deviceFault].pop)
                                    //     // setDeviceFault([...deviceFault].pop())
                                    // }else{
                                    //     setDeviceFault([])
                                    // }
                                        // console.log(deviceFault.pop())
            
                                    }}><svg className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
    <button className="bg-red-400 w-full p-1 m-3" onClick={()=> setList(list.filter(i => i !== Number(id)))}>Usuń urzadzenie</button>
    </div>
    
  )
}

export default AddDevice