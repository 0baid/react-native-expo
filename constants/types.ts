import { SetStateAction, useState, Dispatch } from 'react';
interface UserInterface {
    userName:string,
    email:string,
    password:string
}

interface ContextInterface {
    isLoggedIn:boolean,
    user:any | null,
    isLoading:boolean,
    setIsLoggedIn?:Dispatch<SetStateAction<boolean>>,
    setUser?:Dispatch<SetStateAction<boolean>>,
    setisLoading?:Dispatch<SetStateAction<boolean>>,
    setIsLoading?:Dispatch<SetStateAction<boolean>>
}


export {UserInterface,ContextInterface}