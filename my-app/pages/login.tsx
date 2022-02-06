import { NextPage } from "next"
import { BaseSyntheticEvent, useState } from "react";
import axios from 'axios'


const Login: NextPage = () => {
    const [form,setForm] = useState<any>();

    const handleForm = (e:BaseSyntheticEvent) => {

        const user = {
            login:e.currentTarget.username?.value,
            password:e.currentTarget.password?.value,
            
        }

        
        setForm(user);
        console.log(form);
    }

    const registerCustomer = async (e:BaseSyntheticEvent) => {
        e.preventDefault();

        console.log('FORM',form)
        const body = new FormData();
        body.append('username',form?.login as string);
        body.append('password',form?.password as string);
        // body.append('name',form?.name as string);
        // body.append('surname',form?.surname as string);
        // body.append('email',form?.email as string);
        // body.append('phone',form?.phone as string);
        // body.append('file',file as File);
        try {
            console.log('tutaj')
            const response = await axios.post('http://localhost:5000/api/auth/login',body);
            console.log(await response.data);
        } catch (error) {
            console.log(error)
        }

    }

  return (
      <>
        <form onSubmit={registerCustomer} onChange={handleForm}>
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
            <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded m-3" type="submit">Add Customer</button>
        </form>
      </>
  )
}

export default Login

