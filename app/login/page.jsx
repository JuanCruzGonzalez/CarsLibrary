"use client"
import { SingupForm } from "../components/singUp";
import { PageTitle } from "../components/pageTitle";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LogIn(){
    const [animated, setAnimated] = useState(false)
    
    const handle = () =>{
        setAnimated(!animated)
    }
    
    return(
        <>
            <main>
                <section className="log-in justify-center grid grid-cols-1.7 min-h-[77vh]">
                    <div className={`login-div ${animated ? 'animation' : ''} w-full flex justify-center items-center flex-col`}>
                        <PageTitle>Log in</PageTitle>
                        <form action="" className="form rounded-xl p-5 w-1/2 min-w-[350px]">
                            <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                            <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
                            <div className="flex items-center">
                                <span className="text-xs forgot-password"><Link href="/">Forgot Password?</Link></span>
                                <span className="forgot-password text-xs">Don't have an account?<Link href="/singup"className="text-blue-200 ml-2">Sing up</Link></span>
                            </div>
                            <input className="login-button" type="submit" value="Log in"/>
                        </form>
                    </div>
                    <div className="comment w-full flex items-center justify-center">
                    </div>
                </section>
            </main>
        </>
    )
} 
