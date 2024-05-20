import { PageTitle } from "./pageTitle";
import Link from 'next/link';

export function SingupForm(){
    return (
        <div className="singUp w-full justify-center grid grid-cols-7.1">
            <div className="comment w-full flex items-center justify-center">
            </div>
            <div className="singipForm w-full flex justify-center items-center">
                <form action="" className="form sing-up rounded-xl mb-10 p-5 w-1/2 min-w-[350px] ">
                    <PageTitle>Sing up</PageTitle>
                    <div className="flex gap-4">
                        <input required="" className="input" type="text" name="name" id="name" placeholder="Name"/>
                        <input required="" className="input" type="text" name="nickname" id="nickname" placeholder="Nickname"/>
                    </div>
                    <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                    <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
                    <span className="forgot-password text-xs">Do you already have an account?<Link href="/login"className="text-blue-200 font-bold ml-2">Log In</Link></span>
                    <input className="login-button" type="submit" value="Sign up"/>
                </form>
            </div>
        </div>
    )
}