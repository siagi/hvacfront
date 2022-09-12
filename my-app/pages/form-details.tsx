import { NextPage } from "next"
import { useRouter } from "next/router";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { Device } from "../components/Form/AddDevice";
import DeviceDisplay from "../components/Form/DevicesDisplay";

interface ServiceData {
    id:number, 
    date:Date,
}

interface IForm {
    companyDetails:{
        name:string,
        nip:Number,
        street:string,
        postcode:string,
        city:string,
        phone:Number
    },
    devices:Device[],
    serviceDate:ServiceData | undefined,
}

const FormDetails = () => {

    let form:IForm | null = null;
    const query = useRouter();
    console.log('query',query.query)
    const {id} = query.query
    useEffect(()=>{
        console.log(id);
        console.log(query.query['days[]'])
        if(query.query['days[]']){
            console.log(query.query['days[]'][2])
        }
    },[id, query.query])

    const queryDates = [
        "Tue Aug 30 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Tue Aug 30 2022 12:00:00 GMT 0000 (Coordinated Universal Time)",
        "Wed Aug 31 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Wed Aug 31 2022 12:00:00 GMT 0000 (Coordinated Universal Time)",
        "Thu Sep 01 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Thu Sep 01 2022 12:00:00 GMT 0000 (Coordinated Universal Time)",
        "Fri Sep 02 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Fri Sep 02 2022 12:00:00 GMT 0000 (Coordinated Universal Time)",
        "Mon Sep 05 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Mon Sep 05 2022 12:00:00 GMT 0000 (Coordinated Universal Time)",
        "Tue Sep 06 2022 08:00:00 GMT 0000 (Coordinated Universal Time)",
        "Tue Sep 06 2022 12:00:00 GMT 0000 (Coordinated Universal Time)"
    ]
    
    const availableDate  = (query.query['days[]'] && Array.isArray(query.query['days[]']) ? query.query['days[]'] : queryDates).map((item, index)=>{
        return {id:index, date:new Date(item)}
    })
    const [chosenDate, setChosenDate] = useState<ServiceData | undefined>()
    const [topDevicesAmount, setTopDevicesAmount ] = useState<number>();

    const sendForm = async({form, id, e}:{form:any, id:any, e:BaseSyntheticEvent}) => {
        const res = await fetch('http://192.168.0.173:5000/api/updateorder/update',
        {
            headers:{
                'Content-Type': 'application/json',
                // 'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ4ZWYyNzY2OWQyODQ5OTJhMDAxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzI5MzEzOCwiZXhwIjoxNjQ0MTU3MTM4fQ.vABjA3oj7apoZltcz7mBY2t_s5TVuYWQKMu0MR6rESc',
            },
            body:JSON.stringify({
                ...form,orderId:id
            }),
            method:'POST'
        }
       )
      if(res.ok){
        form = null
        e.target.reset();
      }
    }

    const updateForm = (e:BaseSyntheticEvent) => {
        // const b = [...e.target.elements].filter((a)=> a.id.includes('form'));
        // b.forEach((c)=>console.log(c.value));

        const formDetails:IForm ={
            companyDetails: {
                name: e.target[0]?.value,
                nip: e.target[1]?.value,
                street: e.target[2]?.value,
                postcode: e.target[3]?.value,
                city: e.target[4]?.value,
                phone: e.target[5]?.value
            },
            devices:[
                
            ] ,
            serviceDate: chosenDate
        }
        if(topDevicesAmount?.toString() && topDevicesAmount >= 0){
            const devices:Device[] = []
            for(let k = 0; k < topDevicesAmount+1; k++){
                const test = [...e.target];
                const device:Device = {
                    brand: "",
                    powerDevice: "",
                    refrigerant: "",
                    serialNumber: "",
                    deviceFaults: []
                };
                test.forEach(i => {
                    if(i.id.includes(`${k}`)){
                        switch (true) {
                         case i.id.includes(`form-device-${k}-brand`):
                             device.brand = i.value
                             break;
                        case i.id.includes(`form-device-${k}-device-type`):
                            device.deviceType = i.value
                            break;
                        case i.id.includes(`form-device-${k}-service-type`):
                            device.serviceType = i.value
                            break;
                        case i.id.includes(`form-device-${k}-power`):
                            device.powerDevice = i.value
                            break;
                        case i.id.includes(`form-device-${k}-refrigerant-type`):
                            device.refrigerant = i.value
                            break;
                        case i.id.includes(`form-device-${k}-serial-nr`):
                            device.serialNumber = i.value
                            break;
                        case i.id.includes(`form-device-${k}-fault`):
                            console.log('FAULT');
                            console.log(i.value)
                            device.deviceFaults.push(i.value)
                            break;
                        
                         default:
                             break;
                        }
                    }
                    
                })
                devices.push(device);
            }
            formDetails.devices = devices;
        }

       form = formDetails
    }

    const registerDetails = async (e:BaseSyntheticEvent) => {
        e.preventDefault();
        updateForm(e)
        await sendForm({form:form, id:id,e:e})


    }

  return (
      <>
        <form onSubmit={registerDetails}>
            <div className="flex flex-col lg:w-1/2 md:w-full">
                    <div className="col-start-1 row-start-1 px-5">
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-name">
                                    Nazwa firmy
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-name" type="text" placeholder="Wpisz nazwę firmy"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-nip">
                                    NIP
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-nip" type="text" placeholder="Wpisz nip firmy"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-address-street">
                                    Ulica i nr:
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-address-street" type="text" placeholder="Wpisz ulicę"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-address-postcode">
                                    Kod pocztowy:
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-address-postcode" type="text" placeholder="Wpisz kod pocztowy"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-address-city">
                                    Miasto:
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-address-city" type="text" placeholder="Wpisz nazwę miasta"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm" htmlFor="form-company-phone">
                                    Numer telefonu:
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="form-company-phone" type="text" placeholder="Wpisz nr telefonu kontaktowego"/>
                            </div>
                        
                    </div>
                <div className="col-start-2 row-start-1">
                    <div className="pt-2 pl-4">
                        <div className="font-semibold text-sm pb-1">Wybierz dostępny termin</div>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                {query.query.days}
                            </div>
                            {availableDate && availableDate.map((item)=>{
                                return(
                                    <div onClick={() => {
                                        console.log('click')
                                        setChosenDate(availableDate.find(i => i.id === item.id))
                                        if(form)
                                        form = {...form, serviceDate:chosenDate}
                                        }} key={item.id} className={`p-5 w-40 md:w-72 text-sm border hover:border-teal-500 cursor-pointer ${item.id === chosenDate?.id ? 'bg-teal-300 border-teal-600':''}`}>
                                        {item.date.toLocaleString("pl-PL",{timeStyle:'short',dateStyle:'full', timeZone:'UTC'})}
                                    </div>
                                )
                                
                            })}
                        </div>
                        </div>
                </div>
                <div className="col-start-1 row-start-2 ">
                   <DeviceDisplay setTopDevicesAmount={setTopDevicesAmount} />
                   
                </div>
            </div>
            <button className="btn ml-3 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-zinc-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit">Wyślij formularz</button>
        </form>
                <div className="col-start-2 row-start-2 pb-5">
                    <div className="pl-4 font-semibold text-sm pt-3">Cennik usług</div>
                    <div className="grid grid-cols-12 pl-5 text-sm pt-5">
                        <div className="col-start-1 col-span-8 flex flex-col">
                            <span className="pb-5">Usługa</span>
                            <span>Konserwacja split do 5kW:</span>
                            <span>Konserwacja split powyżej 5kW:</span>
                            <span>Godzina pracy serwisanta - awaria:</span>
                            <span>Dojazd:</span>
                        </div>
                        <div className="col-start-9 col-span-4 flex flex-col">
                            <span className="pb-5">Cena</span>
                            <span>180 zł netto</span>
                            <span>250 zł netto</span>
                            <span>100 zł netto</span>
                            <span>70 zł netto</span>
                        </div>
                    </div>
                        <div className="flex flex-col text-sm pl-5 pt-5 pr-5">
                            <ul>
                                <li>W zależnośc od stopnia zabrudzenia urządzenia do ceny może zzostać doliczony dodatek w wymiarze od 50 do 100% ceny</li>
                            </ul>
                        </div>
                </div>
      </>
  )
}

export default FormDetails

