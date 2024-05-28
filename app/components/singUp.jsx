import { PageTitle } from "./pageTitle";
import Link from 'next/link';
import { useState } from "react";

export function SingupForm(){
    const [provider, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setError(null);
        setMessage(null);

        const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage('Registration successful! Please check your email to confirm your account.');
        } else {
            setError(data.error_description || data.message);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="singUp w-full justify-center grid grid-cols-7.1">
            <div className="comment w-full flex items-center justify-center min-h-[77vh]">
            </div>
            <div className="singipForm w-full flex justify-center items-center">
                <form onSubmit={handleSubmit} className="form sing-up rounded-xl mb-10 p-5 w-1/2 min-w-[350px]">
                    <PageTitle>Sign up</PageTitle>
                    <div className="flex gap-4">
                        <input
                            required
                            className="input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={provider}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <input
                        required
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="forgot-password text-xs">
                        Do you already have an account?
                        <Link href="/login" className="text-blue-200 font-bold ml-2">Log In</Link>
                    </span>
                    <input className="login-button" type="submit" value="Sign up" disabled={isSubmitting} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                </form>
            </div>
        </div>
    );
}