import './App.css'
import useAuth from './hooks/useAuth'
import Protected from './components/Protected'
import Public from './components/Public'


function App() {
  const [isLogin,logout] = useAuth();
  console.log(isLogin)
  return (
    <>
      <div>
        <h1>Keycloak</h1>
      </div>
     {isLogin && <button onClick={logout}>Logout</button>} 

      <div> 
        {
          isLogin ? <Protected />  : <Public />
        }
      </div>
    </>
  )
}

export default App
