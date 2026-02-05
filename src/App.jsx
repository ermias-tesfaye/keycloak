import { useState } from 'react'
import './App.css'
import useAuth from './hooks/useAuth'
import Protected from './components/Protected'
import Public from './components/Public'


function App() {
  const isLogin = useAuth();
  return (
    <>
      <div>
        <h1>Keycloak</h1>
      </div>

      <div>
        {
          isLogin ? <Protected />  : <Public />
        }
      </div>
    </>
  )
}

export default App
