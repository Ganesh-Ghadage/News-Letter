
import './App.css'
import { Outlet } from 'react-router-dom'
import { MyFooter, Header } from './components'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Outlet/> 
      </main>
      <MyFooter />
    </div>
  )
}

export default App
