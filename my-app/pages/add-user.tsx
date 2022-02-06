import { NextPage } from "next"
import { BaseSyntheticEvent, useState } from "react";
import axios from 'axios'


interface IForm {
    username:String,
    password:String,
    name:String,
    surname:String,
    email:String,
    phone:String,

}

const AddUser: NextPage = () => {

    const [form,setForm] = useState<IForm>()
    const [file,setFile] = useState<File>();
    let file1:File;

    const handleFile = (e:any) => {
        e.preventDefault();
        console.log(e.target.files[0])
        if(e.target.files && e.target.files[0]){
            file1 = e.target.files[0];
            setFile(e.target.files[0])
        }

    }

    const handleForm = (e:BaseSyntheticEvent) => {

       const user:IForm = {

        username:e.currentTarget.username?.value,
        password:e.currentTarget.password?.value,
        name:e.currentTarget.name?.value,
        surname:e.currentTarget.surname?.value,
        email:e.currentTarget.email?.value,
        phone:e.currentTarget.phone?.value,
       }
       setForm(user);
    }

    const registerCustomer = async (e:BaseSyntheticEvent) => {
        e.preventDefault();

        const body = new FormData();
        body.append('username',form?.username as string);
        body.append('password',form?.password as string);
        body.append('name',form?.name as string);
        body.append('surname',form?.surname as string);
        body.append('email',form?.email as string);
        body.append('phone',form?.phone as string);
        body.append('file',file as File);
        try {
            console.log(body);
            const response = await axios.post('http://localhost:5000/api/auth/register',body);
            console.log(response.status);
        } catch (error) {
            console.log(error)
        }

    }

  return (
      <>
        <form onSubmit={registerCustomer} onChange={handleForm} encType="multipart/form-data">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                   Nazwa:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text"/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Hasło:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="password"/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Imię:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                 Nazwisko:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="surname" type="text"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Adres e-mail:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Numer telefonu:
                </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel"/>
                </div>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Zdjęcie:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="f" type="file" onChange={handleFile}/>
                </div>
            </div>
            <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded m-3" type="submit">Add Customer</button>
        </form>
      </>
  )
}

export default AddUser

