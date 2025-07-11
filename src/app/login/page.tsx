'use client';
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
import { useRouter } from 'next/navigation';
        
        
interface User{
    name:string;
    phone:number;
    birthday:string;
    rocid:string;
    account:string;
    password:string;
    role?:string;
};
interface Person{
    account:string;
    password:string;
};
export default function Login(){
    const [person,setPerson]=useState<Person>({
        account:"",
        password:"",
    });
    
    const router=useRouter();

    return(
        <div className="flex justify-center items-center min-h-screen">
            <Card 
            className="w-[320px] min-h-72 shadow-lg rounded-lg"
            title={<div className="flex justify-center items-center h-10 text-lg font-semibold rounded-t-lg ">登入</div>}>
                <div >
                    <form className="flex flex-col gap-4">
                        <label htmlFor="acc">帳號</label>
                        <InputText 
                        id="acc"
                        className="w-full pl-0.5 pr-0.5 rounded-lg"
                        placeholder="account" value={person.account}/>
                        <label htmlFor="password">密碼</label>
                        <InputText 
                        id="password"
                        className="w-full pl-0.5 pr-0.5 rounded-lg"
                        placeholder="password" value={person.password}/>
                        <div className="flex flex-row items-center justify-between">
                            <a href="../findACC">忘記帳號與密碼</a>
                            <a href="../register">註冊新帳號</a>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
}