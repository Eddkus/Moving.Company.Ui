import './App.css'
import {useNavigate} from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()

  const navigateToOrder = () => {
    navigate('../OrderPage')
  }

  return (
    <div className="App">
      <h1 className="main-logo">Eddie's Moving Company</h1>
      <div className="card">
        <button onClick={navigateToOrder}>Make an Order</button>
      </div>
      <p className="read-the-docs">
        Quick and Clean Moving Service
      </p>
    </div>
  )
}
