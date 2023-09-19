import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/navbar/Navbar'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/daisyNav/DaisyNav'
import PriceOptions from './components/Price-options/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-red-700 text-6xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
