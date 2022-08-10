import dynamic from "next/dynamic";
import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";

const Calendar:FunctionComponent = () => {
    const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>(new Date(Date.now()).toDateString())
    const modal = useRef<HTMLDivElement>(null);
    const refCalendar = useRef(null)
    const [modalPosition, setModalPosition] = useState({x:null, y:null})
    let promiseSample:Promise<{x:number, y:number}>;
    
    const todayDate =  new Date();
    const testArray ={
        service1:{
            customer_id:'61e5835512da9760fe23928c',
            information:{
                date:new Date(2022,0,28),
                status:'zaplanowane',
                number:12,
                user:{
                    name:'Marek Konrad',
                    photo:'/images/avatar.jpg',
                    mail:'marek@wp.pl',
                    phone:222333444
                },
                service_address:{
                    name:'ORLEF',
                    street:'Mala Gora 14',
                    postcode:'30864',
                    city:'Krakow',
                    phone:443123332,
                    email:'michal@mapone.eu'
                },
                mainType:'pogwarancyjny',
                secondaryTypr:'serwis',
                service:{
                    cleaning_the_heat_exchanger_of_the_indoor_unit:true,
                    cleaning_the_heat_exchanger_of_the_outdoor_unit:false,
                    recharging_the_refrigerant:true,
                    amount_of_recharging_the_refrigerant:20,
                    type_of_recharging_the_refrigerant:'R32',
                    pressure_checking:true,
                    electrics_condition_checking:false,
                    airflow_temperature_checking:true,
                    evaporation_temperature_checking:false,
                },
                price:645,
                parts:[
                    {name:'zawor',price:22},
                    {name:'kolanko',price:100}
                ]

                
            }
        }
    }
    const daysArray :{ [d: number]: string } = {
        0:'Niedziela',
        1:'Poniedziałek',
        2:'Wtorek',
        3:'Środa',
        4:'Czwartek',
        5:'Piątek',
        6:'Sobota',
    }

    const monthsArray :{[m:number]:string} ={
        0:'Styczeń',
        1:'Luty',
        2:'Marzec',
        3:'Kwiecień',
        4:'Maj',
        5:'Czerwiec',
        6:'Lipiec',
        7:'Sierpień',
        8:'Wrzesień',
        9:'Październik',
        10:'Listopad',
        11:'Grudzień',
    }

    const [currentYear,setCurrentYear] = useState<number>(todayDate.getFullYear())
    const [currentMonth,setCurrentMonth] = useState<number>(todayDate.getMonth())
    const [amountDays,setAmountDays] = useState<number>(0)
    const [index,setIndex] = useState<number>(currentMonth);
    const [showOrderDetails,setShowOrderDetails] = useState<boolean>(false);
    const readableTodayDate = todayDate.toLocaleDateString()
   
    
    // const currentYear = todayDate.getFullYear();
    // const currentMonth = todayDate.getMonth();

    // const firstDayOfCurrentMonth = 

    let currentDay = 1;

    const days = new Array(5).fill([]).map((index,item)=>
        {
            return (
                new Array(7).fill('Day').map((day,index2)=>{
                const sampleDate = new Date(currentYear,currentMonth,currentDay)
                if(currentDay > amountDays) return '';
                currentDay++
                return (
                            <div  
                            onDoubleClick={() => {
                                // setShowCustomModal(true)
                                // console.log('asdads')
                                console.log('1')
                                return new Promise<void>((resolve, reject) => {
                                    console.log('Promise');
                                    console.log('2')
                                        
                                        // modal.current.style.left = `${modalPosition.x}px`
                                        // modal.current.style.top = `${modalPosition.y}px`
                                    console.log(modalPosition.x)
                                    console.log(modalPosition.y)
                                    if(modal && modal.current){
                                        modal.current.style.left = `${modalPosition.x}px`,
                                        modal.current.style.top = `${modalPosition.y}px`
                                    }
                                    resolve()
                                    

                                }).then(()=> {
                                    console.log('3')
                                })
                                // promiseSample.then((a)=>console.log(a));
                                // setTimeout(()=>{
                                //     if(modal && modal.current){
                                //         modal.current.style.left = `${modalPosition.x}px`
                                //         modal.current.style.top = `${modalPosition.y}px`
                                //         console.log(modalPosition.x)
                                //         console.log('Modal',modal);
                                //     }
                                // },0)
                            }} key={index2} className={sampleDate.toLocaleDateString() === readableTodayDate ? `h-full bg-zinc-100 hover:border-gray-400 hover:border-b-4 text-sm font-semibold pb-5 m-px cursor-pointer`: `flex flex-col after:container  bg-white hover:bg-zinc-50 hover:border-gray-400 hover:border-b-4 text-gray-900 font-semibold text-sm m-px cursor-pointer h-full border-b border-b-zinc-200`}>
                            <span className={`flex justify-start absolute -translate-y-6 ${(currentDay-1)%2==0 ?'bg-50' :'bg-50'}`}>{currentDay-1 <=7 && daysArray[sampleDate.getDay()]}</span>
                                <div className="p-1">
                                    <div className="flex justify-start pt-0 pl-0">{currentDay-1}</div>
                                    <div onClick={()=>setShowOrderDetails(!showOrderDetails)}>{testArray.service1.information.date.toLocaleDateString() ===sampleDate.toLocaleDateString() ? 
                                    <div className={`text-white flex flex-col select-none text-xs mt-1 p-1 ${testArray.service1.information.status === 'zaplanowane' ?'bg-teal-400 hover:bg-teal-500' :''}`}>
                                        <div className="font-bold">Zam. nr:#{testArray.service1.information.number}</div>
                                        {/* <div>Status:{testArray.service1.information.status}</div>
                                        <div>Firma:{testArray.service1.information.service_address.name}</div> */}
                                    </div>

                                    :'' }
                                    </div>
                                </div>
                            </div>
                    )
        })
        
    )});
    useEffect(()=>{
        document.addEventListener('click', (e:any) => {

            const x = e.path[0].offsetLeft;
            const y = e.path[0].offsetTop
            setModalPosition({x,y })
            // setModalPosition({x:e.path[0].offsetLeft, y:e.path[0].offsetTop})
        })
        const getAmountOfDaysInMonth = (year:number,month:number,day = 0) =>{
            setAmountDays(new Date(year,month,day).getDate());
            return new Date(year,month,day).getDate();
        }
    
        getAmountOfDaysInMonth(currentYear,currentMonth+1);
    },[currentMonth, currentYear])
    // console.table(days);
    // console.log(days.map((item)=>console.log(item.find((day)=>day === todayDate))))
   
    return(
        <div className="grid h-screen grid-cols-12">
            {showCustomModal && 
                <div className="absolute z-10 h-[600px] w-[300px] bg-slate-900" ref={modal}>
                    asdadasd
                    <button onClick={()=>setShowCustomModal(false)}>Close</button>
                </div>
            }
            <div className="col-start-1 col-span-9">
                <div className="flex gap-2 pb-8 justify-left bg-zinc-100 h-16">
                    <button className="pt-1" onClick={()=>{
                            setCurrentMonth(currentMonth-1);
                            setIndex(index-1 < 0 ? 11:index-1);
                        }}>
                    <div>
                                <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="16" /></svg>
                        </div>
                    </button>
                    <button className="pt-1" onClick={()=>{
                            setCurrentMonth(currentMonth+1)
                            setIndex(index+1>11 ? 0:index+1)
                            if(index > 11)setIndex(11);
                        }}>
                        <div>
                            <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="8" y2="12" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
                        </div>
                    </button>

                        <div className='font-semibold text-base pt-1'>{monthsArray[index]} {new Date(currentYear,currentMonth-1,currentDay).getFullYear()}</div>
                    </div>
                <div className="grid grid-cols-7 grid-rows-5 h-[800px]">
                    {days}
                </div>
            </div>
            <div className="col-start-10 col-span-3 border-l border-zinc-200">
                <div className="bg-zinc-100 h-16 pl-2 border-b">
                    <span className="text-base pt-2 font-bold">
                        {selectedDate}
                    </span>
                </div>
                <div>
                {showOrderDetails && 
                    <div className="flex flex-col bg-gray-100 px-2 text-sm pt-1">
                        <div className="font-bold text-base pb-3"> Zamówieni nr: {testArray.service1.information.number}</div>
                        <div className="flex flex-col gap-2">
                            <div><p className="border-b border-zinc-200 font-bold pb-2">Miejsce wykonania serwisu:</p>
                                <div className="flex flex-col py-2">
                                    <div>{testArray.service1.information.service_address.name}</div>
                                    <div>{testArray.service1.information.service_address.street}</div>
                                    <div>{testArray.service1.information.service_address.postcode} {testArray.service1.information.service_address.city}</div>
                                    <div>{testArray.service1.information.service_address.phone}</div>
                                    <div>{testArray.service1.information.service_address.email}</div>
                                </div>
                            </div> 
                            <div><p className="border-b border-zinc-200 font-bold pb-2">Osoba wykonująca serwis:</p>
                                <div className="flex gap-2 py-2">      
                                    <div><Image className="rounded-full" src={testArray.service1.information.user.photo} height='50px' width='50px' alt="image"/></div>
                                    <div className='pt-3'>{testArray.service1.information.user.name}</div>
                                </div>
                                <div>Email:{testArray.service1.information.user.mail}</div>
                                <div>Phone:{testArray.service1.information.user.phone}</div>
                            </div>
                            <div><p className="border-b border-zinc-200 font-bold pb-2">Kosztorys</p>
                            <div className="py-2">
                                <div>{testArray.service1.information.parts[0].name.toUpperCase()} --- {testArray.service1.information.parts[0].price}zł </div>
                                <div>{testArray.service1.information.parts[1].name.toUpperCase()} --- {testArray.service1.information.parts[1].price}zł </div>
                                <div>Suma: {testArray.service1.information.price}</div>
                            </div>
                            </div>
                            <div><p className="border-b border-zinc-200 font-bold pb-2">Status:</p>
                            <div className="flex flex-col gap-y-3 pt-4">
                                <button className="bg-teal-400 px-4 py-2 uppercase font-semibold text-white">{testArray.service1.information.status}</button>
                                <button className="bg-zinc-300 px-4 py-2   uppercase font-semibold text-white">Raport</button>
                                <button className="bg-zinc-300 px-4 py-2   uppercase font-semibold text-white">Faktura</button>
                            </div>
                            </div>
                        </div>
                    </div>
                }

                </div>

            </div>
        </div>
    )
}

export default Calendar
