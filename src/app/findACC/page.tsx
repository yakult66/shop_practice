'use client';

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


export default function FindACC(){
    const [tel,setTel]=useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedInput = tel.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const internationalPhoneRegex = /^\+?[0-9\s\-().]{7,20}$/;

        if (emailRegex.test(trimmedInput)) {
            alert(`您輸入的是「電子郵件」: ${trimmedInput}`);
            setError(null);
        } else if (internationalPhoneRegex.test(trimmedInput)) {
            alert(`您輸入的是「電話號碼」: ${trimmedInput}`);
            setError(null);
        } else {
            setError("請輸入有效的電話號碼或電子郵件");
        }
    };
    return(
        <div className="flex justify-center items-center min-h-screen">
                <Card 
                className="w-[320px] min-h-80 shadow-lg rounded-lg "
                title={<div className="flex justify-center items-center h-10 text-lg font-semibold rounded-t-lg ">找尋帳號</div>}>
                    <div >
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <InputText 
                                id="findAcc"
                                className="w-full pl-0.5 pr-0.5 rounded-lg"
                                placeholder="請輸入電話或電子郵件"
                                value={tel}
                                onChange={(e)=>setTel(e.target.value)}/>
                            </div>
                            {error && <small className="text-red-500">{error}</small>}
                            <Button className="flex items-center justify-center" type="submit">確認</Button>
                        </form>
                    </div>
                </Card>
        </div>
    );
}