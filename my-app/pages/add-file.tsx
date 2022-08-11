import { NextPage } from "next"
import { BaseSyntheticEvent, useRef, useState } from "react";
import axios from 'axios'
import Layout from "../components/Layout/Layout";


const AddFile: NextPage = () => {

    const [customFile,setCustomFile] = useState();

    const handleFile = (e:any) => {

        setCustomFile(e.target.files[0]);

    }

   
    const uploadFile = async (e:any) => {
        e.preventDefault();
            const formData = new FormData();
            formData.append("File",customFile?customFile:'');
            formData.append("Filename","Sample filename");
            formData.append('Name',e.target.name.value)

            console.log(formData);


        try {
            const response = await axios.post("http://localhost:5000/api/upload/upload",formData);
            console.log(response)
        } catch (error) {

            console.log(error)
            
        }
       



    }

  return (
    <Layout>
      <>
        <div className="App">
            <form onSubmit={uploadFile}>
                <input type="file" onChange={handleFile} />
                <input className="bg-slate-400" id="name" type="text"/>
                <button type="submit">Upload</button>
            </form>
        </div>
      </>
    </Layout>
  )
}

export default AddFile

