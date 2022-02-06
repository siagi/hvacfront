import dynamic from "next/dynamic";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

const Calendar:FunctionComponent = () => {
    useEffect(()=>{
        const getAmountOfDaysInMonth = (year:number,month:number,day = 0) =>{
            setAmountDays(new Date(year,month,day).getDate());
            return new Date(year,month,day).getDate();
        }
    
        getAmountOfDaysInMonth(currentYear,currentMonth+1);
    })
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

    const days = new Array(6).fill([]).map((index,item)=>
        {
            return (
                new Array(7).fill('Day').map((index2,day)=>{
                const sampleDate = new Date(currentYear,currentMonth,currentDay)
                console.log(sampleDate,currentYear,currentMonth,currentDay);
                if(currentDay > amountDays) return '';
                currentDay++
                return (
                            <div className={sampleDate.toLocaleDateString() === readableTodayDate ? `bg-green-200 h-full  hover:border-gray-400 hover:border-b-4 font-semibold m-px cursor-pointer p-3`: `flex flex-col bg-gray-100 hover:bg-gray-200 hover:border-gray-400 hover:border-b-4 text-gray-900 font-semibold text-sm m-px cursor-pointer h-full border-b-2 border-b-white`}>
                            <span className={`flex justify-center ${(currentDay-1)%2==0 ?'bg-gray-100 ' :'bg-gray-200'}`}>{currentDay-1 <=7 && daysArray[sampleDate.getDay()]}</span>
                                <div className="p-1">
                                    <div className="flex justify-center">{currentDay-1}</div>
                                    <div onClick={()=>setShowOrderDetails(!showOrderDetails)}>{testArray.service1.information.date.toLocaleDateString() ===sampleDate.toLocaleDateString() ? 
                                    <div className={`text-white flex flex-col rounded-md mt-1 p-1 ${testArray.service1.information.status === 'zaplanowane' ?'bg-blue-500 hover:bg-blue-800' :''}`}>
                                        <div className="font-bold text-base">Zam. nr:#{testArray.service1.information.number}</div>
                                        <div>Status:{testArray.service1.information.status}</div>
                                        <div>Firma:{testArray.service1.information.service_address.name}</div>
                                    </div>

                                    :'' }
                                    </div>
                                </div>
                            </div>
                    )
        })
        
    )});

    console.table(days);
    // console.log(days.map((item)=>console.log(item.find((day)=>day === todayDate))))
   
    return(
        <>
        <div className="flex gap-2 justify-center p-5">
        <button onClick={()=>{
            setCurrentMonth(currentMonth-1);
            setIndex(index-1 < 0 ? 11:index-1);
        }}>
            Poprzedni miesiąc</button>
        <div className='text-2xl font-semibold'>{monthsArray[index]} {new Date(currentYear,currentMonth-1,currentDay).getFullYear()}</div>
        <button onClick={()=>{
            setCurrentMonth(currentMonth+1)
            setIndex(index+1>11 ? 0:index+1)
            if(index > 11)setIndex(11);
            }}>
                Kolejny miesiąc
                </button>

        </div>
        <div className="grid grid-cols-7 grid-rows-5 h-[800px]">
            {days}
        </div>
        {showOrderDetails && 
            <div className="flex flex-col my-3 bg-gray-100 p-3">
                <div className="font-bold"> Zamówieni nr: {testArray.service1.information.number}</div>
                <div className="flex justify-between ">
                    <div><p className="font-bold">Miejsce wykonania serwisu:</p>
                        <div className="flex flex-col">
                            <div>{testArray.service1.information.service_address.name}</div>
                            <div>{testArray.service1.information.service_address.street}</div>
                            <div>{testArray.service1.information.service_address.postcode} {testArray.service1.information.service_address.city}</div>
                            <div>{testArray.service1.information.service_address.phone}</div>
                            <div>{testArray.service1.information.service_address.email}</div>
                        </div>
                    </div> 
                    <div><p className="font-bold">Osoba wykonująca serwis:</p>
                        <div className="flex gap-2">      
                            <div><Image className="rounded-full" src={testArray.service1.information.user.photo} height='50px' width='50px'/></div>
                            <div className='pt-3'>{testArray.service1.information.user.name}</div>
                        </div>
                        <div>Email:{testArray.service1.information.user.mail}</div>
                        <div>Phone:{testArray.service1.information.user.phone}</div>
                    </div>
                    <div><p className="font-bold">Kosztorys</p>
                        <div>{testArray.service1.information.parts[0].name.toUpperCase()} --- {testArray.service1.information.parts[0].price}zł </div>
                        <div>{testArray.service1.information.parts[1].name.toUpperCase()} --- {testArray.service1.information.parts[1].price}zł </div>
                        <div>Suma:{testArray.service1.information.price}</div>
                    </div>
                    <div><p className="font-bold">Status:</p>
                    <div className="flex flex-col gap-y-2">
                        <button className="bg-blue-500 px-4 py-2 rounded-xl uppercase font-semibold text-white">{testArray.service1.information.status}</button>
                        <button className="bg-gray-300 px-4 py-2  rounded-xl uppercase font-semibold text-white">Raport</button>
                        <button className="bg-gray-300 px-4 py-2  rounded-xl uppercase font-semibold text-white">Faktura</button>
                    </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Calendar
