import React from 'react';
import { Show, SignInButton, SignOutButton, UserButton } from '@clerk/react';
import toast from 'react-hot-toast';

function HomePage() {
    return (
        <>
            <h1>Welcome to Career Bridge</h1>
            <button className='btn btn-secondary' onClick={() => toast.success("This is a success toast")}>Click Me</button>

            <Show when="signed-out">
                <SignInButton mode="modal">
                    <button>Login</button>
                </SignInButton>
            </Show>

            <Show when="signed-in">
                <SignOutButton />
            </Show>

            <UserButton />
        </>
    )
}

export default HomePage;