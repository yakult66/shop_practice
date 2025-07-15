'use client';
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "primereact/button";
        
interface User{
    name:string;
    phone:number;
    birthday:string;
    rocid:string;
    gmail:string;
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
    
    const [error, setError] = useState<string | null>(null);

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form="account:"+person.account+"\n"+
        "password:"+person.password+"\n"
        alert(form);
    }

    return(
        <div className="flex justify-center items-center min-h-screen">
            <Card 
            className="w-[320px] min-h-80 shadow-lg rounded-lg"
            title={<div className="flex justify-center items-center h-10 text-lg font-semibold rounded-t-lg ">登入</div>}>
                <div >
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="acc">帳號</label>
                            <InputText 
                            id="acc"
                            className="w-full pl-0.5 pr-0.5 rounded-lg"
                            placeholder="account"
                            value={person.account}
                            onChange={(e)=>setPerson({...person,account:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="password">密碼</label>
                            <InputText 
                            id="password"
                            type="password"
                            className="w-full pl-0.5 pr-0.5 rounded-lg"
                            placeholder="password" 
                            value={person.password}
                            onChange={(e)=>setPerson({...person,password:e.target.value})}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <a href="../findACC">忘記帳號與密碼</a>
                            <a href="../register">註冊新帳號</a>
                        </div>
                        {error && <small className="text-red-500">{error}</small>}
                        <Button className="flex items-center justify-center" type="submit">登入</Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}