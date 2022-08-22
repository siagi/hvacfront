import { NextPage } from "next"
import { useRouter } from "next/router";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import AddDevice, { Device } from "../components/Form/AddDevice";
import DeviceDisplay from "../components/Form/DevicesDisplay";

interface IForm {
    companyDetails:{
        name:string,
        nip:Number,
        street:string,
        postcode:string,
        city:string,
        phone:Number
    },
    device:Device[],
    serviceDate:string,
}

// const elementStyle = {
//     background : '#e4e4e7',
//     paddingLeft : '3px',
//     paddingRight : '3px',
//     paddingBottom : '2px',
//     paddingTop : '2px',
//     border : '1px solid #d4d4d8',
//     marginTop : '5px',
//     outline : 'none',
// }

const FormDetails = () => {

    const [form,setForm] = useState<IForm | null>()
    const elementsToFix = useRef<HTMLDivElement>(null);
    const query = useRouter();
    const {id} = query.query
    const availableDate = [
        {id:1, date:'17.08.2022', hour:'08:00'},
        {id:2,date:'17.08.2022', hour:'12:00'},
        {id:3,date:'18.08.2022', hour:'08:00'},
        {id:4,date:'18.08.2022', hour:'12:00'},
        {id:5,date:'19.08.2022', hour:'08:00'},
        {id:6,date:'19.08.2022', hour:'12:00'},
    ]
    const [chosenDate, setChosenDate] = useState<{id:number, date:string, hour:string}>()
    const [devicesAmount, setDevicesAmount ] = useState<number>(0);
    const handleForm = (e:BaseSyntheticEvent) => {
        console.log(e);
        // const formDetails:IForm ={
        //     companyDetails:{
        //         name: e.target.form[0]?.value,
        //         nip: e.target.form[1]?.value,
        //         street: e.target.form[2]?.value,
        //         postcode: e.target.form[3]?.value,
        //         city: e.target.form[4]?.value,
        //         phone: e.target.form[6]?.value
        //     },
        //     device:
        // }
    //    const companyDetails:IForm = {
    //        name: e.target.form[0]?.value,
    //        nip: e.target.form[1]?.value,
    //        street: e.target.form[2]?.value,
    //        postcode: e.target.form[3]?.value,
    //        city: e.target.form[4]?.value,
    //        email: e.target.form[5]?.value,
    //        phone: e.target.form[6]?.value
    //    }

    //    setForm(customer);
    }
    const addElementToFixList = () => {
        console.log('asd')
        const element = document.createElement('input');
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
        console.log(element)
        elementsToFix.current?.appendChild(element);
    }

    const registerDetails = async (e:BaseSyntheticEvent) => {
        e.preventDefault();
        console.log('REGISTER')
        const b = [...e.target.elements].filter((a)=> a.id.includes('form'));
        // console.log('B',b);
        b.forEach((c)=>console.log(c.value));
        const res = await fetch('http://192.168.212.126:5000/api/updateorder/update',
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
        setForm(null);
        e.target.reset();
      }



    }

  return (
      <>
        <form onSubmit={registerDetails} onChange={handleForm}>
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
                            {availableDate && availableDate.map((item)=>{
                                return(
                                    <div onClick={() => setChosenDate(availableDate.find(i => i.id === item.id))} key={item.id} className={`p-5 border hover:border-teal-500 cursor-pointer ${item.id === chosenDate?.id ? 'bg-teal-300 border-teal-600':''}`}>
                                        {item.date} - {item.hour}
                                    </div>
                                )
                                
                            })}
                        </div>
                        </div>
                </div>
                <div className="col-start-1 row-start-2 ">
                   <DeviceDisplay/>
                   
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

