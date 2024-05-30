import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Wiz from './img/wiz2.jpg'
import WizRoom from './img/wizroom1.jpg'
import axios from 'axios'



function App() {
  const [content,setRes]=useState()
  const [dataDream,setdata] = useState()
  const getres = async () => {
    try {
        const res = await axios.post("https://api.dreamscatcher.ir/api/interpret/", {
          content
        }).then((res)=>setdata(res.data.dreamInterpretation))
        
        
    }catch(error){
        console.log(error)
    }
  }

  return (
    <>
      <div className='overflow-hidden'>
        <img src={WizRoom} alt="" />
        <div className='z-10 absolute top-0 '>
          <div className='flex'>
            <img src={Wiz} className='h-[570px] w-72 animate-fade-up animate-once animate-delay-[1500ms]' />
            <div className='flex flex-col items-center gap-2 bg-white/60 p-5  rounded-3xl mt-10 animate-fade-up animate-once animate-delay-[1600ms]'>
              <p className='animate-fade-up animate-once animate-delay-[2500ms]'>سلام به خونه من خوش اومدی دوست داری کمکت کنم؟</p>
              <textarea class="resize rounded-md mx-auto my-auto" dir='rtl' onChange={(e)=>setRes(e.target.value)}></textarea>
              <button className='bg-purple-500 w-20 rounded-3xl' onClick={()=>{getres() 
                console.log(content)
              }}>دیدن نتیجه</button>
            </div>
            {dataDream?<div className='px-10 py-10 mt-10 mx-10 bg-white/80 rounded-3xl' dir='rtl'>
              <p>{dataDream}</p>
            </div>:<span></span>}
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
