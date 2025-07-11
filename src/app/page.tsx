'use client';

import Image from "next/image";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter();
  const rolefooter=(
    <div className="flex flex-wrap justify-center gap-4">
      <Button 
        icon='pi pi-user' 
        rounded 
        text 
        severity="info"
        className="my-shadow-button"
        style={{background: '#fce4ec', color: '#880e4f'}}
        onClick={()=>router.push('/introduct')}>
      顧客
      </Button>
      <Button 
        icon='pi pi-user' 
        rounded 
        text 
        severity="info"
        className="my-shadow-button"
        onClick={()=>{router.push("/login")}}
        >
      店家
      </Button>
    </div>
  );

  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-80 p-6 rounded-xl shadow-lg bg-white text-center" 
      title='歡迎來到小玉の家🏠'
      subTitle='請選擇您的角色💖'
      footer={rolefooter}/>
    </div>
  );
}
