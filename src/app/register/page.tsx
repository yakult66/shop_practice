'use client';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
        
        

interface User{
    name:string;
    phone:string;
    birthday:Date;
    rocid:string;
    gmail:string;
    account:string;
    password:string;
    role:string;
};
export default function Register(){
    const [user,setUser]=useState<User>({
        name:"",
        phone:"",
        birthday:new Date(),
        rocid:"",
        gmail:"",
        account:"",
        password:"",
        role:"",
    });

    const [error, setError] = useState<string | null>(null);
    const [passwordValid, setPasswordValid] = useState(true);


    function isStrongPassword(password: string): boolean {
        const minLength = 8;
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);
        
        return password.length >= minLength && hasLower && hasDigit;
    }
    
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form="name:"+user.name+"\n"+
        "phone:"+user.phone+"\n"+
        "birthday:"+user.birthday+"\n"+
        "rocid:"+user.rocid+"\n"+
        "gmail:"+user.gmail+"\n"+
        "account:"+user.account+"\n"+
        "password:"+user.password+"\n"+
        "role:"+user.role+"\n"
        alert(form);
    }


    return(
        <div className="flex justify-center items-center min-h-screen">
            <Card 
            className="w-[320px] min-h-80 shadow-lg rounded-lg"
            title={<div className="flex justify-center items-center h-10 text-lg font-semibold rounded-t-lg ">註冊新帳號</div>}>
                <div >
                    <form className="flex flex-col gap-2"  onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">姓名</label>
                            <InputText 
                                id="name"
                                value={user.name}
                                onChange={(e)=>setUser({...user,name:e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone">電話</label>
                            <InputText 
                                id="phone"
                                type="tel"
                                value={user.phone}
                                onChange={(e)=>setUser({...user,phone:e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bth">
                                出生年月日
                            </label>
                            <Calendar className="flex w-full" id="bth" value={user.birthday} onChange={(e) => setUser({...user,birthday:e.value as Date})} showIcon  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="rocid">身分證字號</label>
                            <InputText 
                                id="rocid"
                                value={user.rocid}
                                onChange={(e)=>setUser({...user,rocid:e.target.value})}/>
                        </div>
                         <div className="flex flex-col gap-2">
                            <label htmlFor="gmail">電子郵件</label>
                            <InputText 
                                id="gmail"
                                type="email"
                                value={user.gmail}
                                onChange={(e)=>setUser({...user,gmail:e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="acc">帳號</label>
                            <InputText 
                                id="acc"
                                value={user.account}
                                onChange={(e)=>setUser({...user,account:e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">密碼</label>
                            <InputText 
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => {
                                    const pwd = e.target.value;
                                    setUser({ ...user, password: pwd });
                                    setPasswordValid(isStrongPassword(pwd)); // 即時驗證
                                }}
                            />
                            {!passwordValid && (
                                <small className="text-red-500">
                                    密碼需至少8字元，包含大小寫英文字母、數字與特殊符號
                                </small>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>角色</label>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <RadioButton inputId="Boss" name="role" value="Boss" onChange={(e) =>setUser({...user,role:e.value})} checked={user.role==="Boss"} />
                                    <label htmlFor="Boss" className="ml-2">老闆</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="Manager" name="role" value="Manager" onChange={(e) => setUser({...user,role:e.value})} checked={user.role==="Manager"} />
                                    <label htmlFor="Manager" className="ml-2">店長</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="Staff" name="role" value="Staff" onChange={(e) => setUser({...user,role:e.value})} checked={user.role==="Staff"} />
                                    <label htmlFor="Staff" className="ml-2">員工</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="Customer" name="role" value="Customer" onChange={(e) => setUser({...user,role:e.value})} checked={user.role==="Customer"} />
                                    <label htmlFor="Customer" className="ml-2">顧客</label>
                                </div>
                            </div>
                        </div>
                        {error && <small className="text-red-500">{error}</small>}
                        <Button className="flex items-center justify-center" type="submit">登入</Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}