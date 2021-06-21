import React from 'react'
import { Store, useStore } from './Store'

export default function App() {
    return (
        <Store>
            <Login />
            <Counter />
            <CounterTwo />
        </Store>
    )
}

function Counter() {
    const state = useStore()

    return (
        <div>
            <h1>{state.count}</h1>
            <button className="border border-gray-300" onClick={() => state.setCount(state.count + 1)}>Click</button>
        </div>
    )
}

function CounterTwo() {
    const state = useStore()
    return (
        <h2 className="text-lg">{state.count}</h2>
    )
}

function Login() {
    const state = useStore()

    return (
        <div>
            <p>isLogin: {JSON.stringify(state.isLogin)}</p>
            <button className="border border-gray-300" onClick={() => state.setIsLogin(!state.isLogin)}>Login</button>
        </div>
    )
}