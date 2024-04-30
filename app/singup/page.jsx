"use client"
import { PageTitle } from "../pageTitle";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LogIn(){
    return(
        <>
            <main>
                <PageTitle>Sing up</PageTitle>
                <div className="w-full flex justify-center">
                    <form action="" className="form border rounded-xl bg-slate-100 p-5 w-1/3">
                        <div className="flex gap-4">
                            <input required="" className="input" type="text" name="name" id="name" placeholder="Name"/>
                            <input required="" className="input" type="text" name="nickname" id="nickname" placeholder="Nickname"/>
                        </div>
                        <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                        <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
                        <input className="login-button" type="submit" value="Sign up"/>
                    </form>
                </div>
            </main>
        </>
    )
} 