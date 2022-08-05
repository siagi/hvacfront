import { BaseSyntheticEvent, FunctionComponent, useRef, useState } from 'react'
import Modal from './Modal';

const FindCustomer = () => {
    const inputCustomerName = useRef<HTMLInputElement | null>(null);
    const [customerData,setCutomerData] = useState<customer>();
    const [filteredCustomers, setFilteredCustomers] = useState<typeof customers>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    
// interface IForm {
//     name:string,
//     nip:Number,
//     street:string,
//     postcode:string,
//     city:string,
//     email:string,
//     phone:Number
// }

    const [form,setForm] = useState<customer | null>()
    const handleForm = (e:BaseSyntheticEvent) => {

       const customer:customer = {
           name: e.target.form[0]?.value,
           nip: e.target.form[1]?.value,
           street: e.target.form[2]?.value,
           postcode: e.target.form[3]?.value,
           city: e.target.form[4]?.value,
           email: e.target.form[5]?.value,
           phone: e.target.form[6]?.value,
           discount:0
       }

       setForm(customer);
    }

    const registerCustomer = async (e:BaseSyntheticEvent) => {
        e.preventDefault();
        if(form)setCutomerData(form)
    //     const res = await fetch('http://localhost:5000/api/customer/add',
    //     {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ4ZWYyNzY2OWQyODQ5OTJhMDAxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzI5MzEzOCwiZXhwIjoxNjQ0MTU3MTM4fQ.vABjA3oj7apoZltcz7mBY2t_s5TVuYWQKMu0MR6rESc',
    //         },
    //         body:JSON.stringify({
    //             ...form
    //         }),
    //         method:'POST'
    //     }
    //    )
    //   if(res.ok){
    //     setForm(null);
    //     e.target.reset();
    //   }
    



    }

    interface customer{
        name:string,
        nip:string,
        street:string,
        postcode:string,
        city:string,
        email:string,
        phone:string,
        discount:number,

    }
    
    const customers = [
        {
            name:'MC2',
            nip:'6792997382',
            street:'Wadowicka 5',
            postcode:'30-347',
            city:'Kraków',
            email:'biuro@mc2.info.pl',
            phone:'12 3072545',
            discount:20,
            
        },
        {
            name:'Mapone',
            nip:'6792997382',
            street:'Mala Gora 14B',
            postcode:'30-864',
            city:'Kraków',
            email:'michal.maselko@gmail.com',
            phone:'570300780',
            discount:20,
            
        },
    ]
    
    const sampleData = {
        name:'michal',
        nazwisko:'maselko',
    }
    const inputReset = () => {
        if(inputCustomerName.current)inputCustomerName.current.value = ''
    }
    
  return (
        <div className='flex flex-col gap-px'>
            <div className='flex gap-2'>
            <input ref={inputCustomerName} onChange={(e)=>{
                    // const filter:typeof customers = customers.filter((item)=>item.name.includes(customerName as string))
                    setFilteredCustomers(customers.filter((item)=>item.name.includes(e.target.value as string)));
                }} type={'search'} placeholder='Wpisz nazwę klienta i wyszukaj' className='h-10 border rounded-md p-2 w-1/3'></input>
            <button onClick={()=>setShowModal(true)} className='w-1/8 bg-gray-200 hover:bg-gray-300 rounded-md p-2'>
                Dodaj nowego klienta
            </button>

            </div>
            <div className='flex flex-col gap-1'>
                {filteredCustomers.map((item,index)=>{
                    console.log(filteredCustomers)
                    return(
                        <div data-div_data={item.name} onClick={(e)=>{
                        const chosenCustomer = filteredCustomers.find(element=>item.name === element.name)
                        setCutomerData(chosenCustomer)
                        setFilteredCustomers([]);
                        inputReset();
                        }
                        } key={index} className='border w-1/3 rounded-md p-3 hover:bg-gray-100'>
                            {item.name}
                        </div>
                    )
                })}
            </div>
            <div>
                {customerData?(
                    <div className='flex gap-6 bg-gray-100 rounded-md p-2 w-1/3 divide-x-2 divide-gray-200'>
                        <div className='flex flex-col'>
                            <div>{customerData.name}</div>
                            <div>{customerData.street}</div>
                            <div>{customerData.postcode}</div>
                            <div>{customerData.city}</div>
                        </div>
                        
                        <div className='pl-2'>
                            <div>{customerData.nip}</div>
                            <div>{customerData.email}</div>
                            <div>{customerData.phone}</div>
                        </div>
                    </div>
                )
                :
                ''}
            </div>
            {showModal && 

                <Modal cb={()=>setShowModal(false)}>
                    <div>
                    <form onSubmit={registerCustomer} onChange={handleForm}>
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Nazwa firmy:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
            </div>
            <div className="w-full   px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    NIP:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
            </div>
            <div className="w-full   px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                   Adres:
                </label>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Ulica:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                 Kod pocztowy:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                 Miasto:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                 Adres e-mail:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                 Numer telefonu:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
            </div>
            <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Add Customer</button>
        </form>
                    </div>
                </Modal>
            }
        </div>
  )
}

export default FindCustomer