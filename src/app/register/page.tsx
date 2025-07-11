'use client';
import { useState } from "react";

interface User{
    name:string;
    phone:number;
    birthday:string;
    rocid:string;
    account:string;
    password:string;
    role:string;
};
export default function FindACC(){
    const [user,setUser]=useState<User>();

    return(
        <>
        
        </>
    );
}