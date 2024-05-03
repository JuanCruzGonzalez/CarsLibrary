"use client"
import { PageTitle } from "../pageTitle";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LogIn(){
    return(
        <>
            <main>
                <section className="log-in grid grid-cols-1.7 h-[77vh]">
                    <div className="login-div w-full flex justify-center items-center flex-col">
                        <PageTitle>Log in</PageTitle>
                        <form action="" className="form rounded-xl p-5 w-1/2">
                            <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                            <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
                            <div className="flex items-center">
                                <span className="text-xs forgot-password"><Link href="/">Forgot Password?</Link></span>
                                <span className="forgot-password text-xs">Don't have an account?<Link href="/singup"className="text-blue-200"> Sing up</Link></span>
                            </div>
                            <input className="login-button" type="submit" value="Log in"/>
                        </form>
                    </div>
                    <div className="comment w-full flex items-center justify-center">
                        <div className="card-body p-4 gap-2 flex flex-col bg-white">
                            <p>Type your note, and hit enter to add it</p>

                            <div className="flex justify-between gap-1">
                            <div className="flex flex-row items-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25"
                                height="25" />
                                <p className="small mb-0 ms-2">Martha</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="small text-muted mb-0">Upvote?</p>
                                <i className="far fa-thumbs-up mx-2 fa-xs text-body mt-1"></i>
                                <p className="small text-muted mb-0">3</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
} 