"use client"
import { PageTitle } from "../pageTitle";
import React, { useState } from 'react';
import { SingupForm } from "../singUp";

export default function Singup(){
    return(
        <>
            <main>
                <PageTitle>Sing up</PageTitle>
                <SingupForm />
            </main>
        </>
    )
} 