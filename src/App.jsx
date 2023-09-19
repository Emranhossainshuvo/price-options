import './App.css'
import Navbar from './components/navbar/Navbar'
// import DaisyNav from './components/daisyNav/DaisyNav'
import PriceOptions from './components/Price-options/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-red-700 text-6xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
