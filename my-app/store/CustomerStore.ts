import { observer } from "mobx-react-lite"
import { makeAutoObservable,autorun,observable } from "mobx"

export default class CustomerStore{

    public arrayCustomer ={
        name:'michal',
        nazwisko:'maselko'
    }

    setName(customName:string){
        this.arrayCustomer.name = customName 
    }
    constructor(){
        makeAutoObservable(this);
    }




}