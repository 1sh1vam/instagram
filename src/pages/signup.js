import React from "react"

export default function SignUp() {
    return (
        <div className="container mx-auto max-w-screen h-screen flex flex-col items-center justify-center">
            <div className="flex w-1/4 flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt='instagram logo' className="mt-2 w-6/12 mb-4" />
                </h1>

                <form method='POST'>
                    <input aria-label="Enter your user name"
                        type="text"
                        placeholder="Username"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                    />
                    <input aria-label="Enter your full name"
                        type="text"
                        placeholder="Full name"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                    />
                    <input aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                    />

                    <input aria-label="Enter password"
                        type="password"
                        placeholder="Password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                    />

                    <button type="submit"
                        className={``}
                    >Sign Up</button>

                </form>
            </div>
        </div>
    )
}