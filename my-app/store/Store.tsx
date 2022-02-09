
import {  makeObservable,autorun,observable,makeAutoObservable } from "mobx"
import CustomerStore from "./CustomerStore";
import { useMemo } from "react";
import React from "react";

export class Store{

    public customer = new CustomerStore();

    constructor(){
        makeAutoObservable(this);
    }
}

export const useStore = () =>{

    return useMemo(()=> new Store,[]);

}




