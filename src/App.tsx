import React from 'react'
import { Store, useStore } from './Store'

export default function App() {
    return (
        <Store>
            <div className="p-2">
                <Login />
                <Counter />
                <CounterTwo />
            </div>
        </Store>
    )
}

function Counter() {
    const state = useStore()

    return (
        <div>
            <h1>Component（Counter） {state.count}</h1>
            <button 
                className="px-2 py-1 bg-blue-500 text-white rounded" 
                onClick={() => state.setCount(state.count + 1)}
            >Click</button>
        </div>
    )
}

function CounterTwo() {
    const state = useStore()
    return (
        <h2 className="text-lg">Component（CounterTwo） {state.count}</h2>
    )
}

function Login() {
    const state = useStore()

    return (
        <div>
            <p>isLogin: {JSON.stringify(state.isLogin)}</p>
            <button 
                className="px-2 py-1 bg-green-500 text-white rounded" 
                onClick={() => state.setIsLogin(!state.isLogin)}
            >Login</button>
        </div>
    )
}