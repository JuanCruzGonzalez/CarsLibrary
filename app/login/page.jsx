"use client"
import { PageTitle } from "../pageTitle";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LogIn(){
    return(
        <>
            <main>
                <PageTitle>Log in</PageTitle>
                <div className="w-full flex justify-center">
                    <form action="" className="form border rounded-xl bg-slate-100 p-5 w-1/3">
                        <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                        <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
                        <div className="flex items-center">
                            <span className="text-xs forgot-password"><Link href="/">Forgot Password?</Link></span>
                            <span className="forgot-password text-xs">Don't have an account?<Link href="/singup"className="text-blue-200"> Sing up</Link></span>
                        </div>
                        <input className="login-button" type="submit" value="Log in"/>
                    </form>
                </div>
            </main>
        </>
    )
} 