import React from 'react'

type GreetingProps = {
    message: string
}

const Greeting = ({ message }: GreetingProps) => {
    return (
        <div>
            <h1>Hello from the greeting component! {message}</h1>
        </div>
    )
}

export default Greeting
