import './App.css'
import Greeting from './components/greetings';
import Counter from './components/useState';
//import Form from './components/useState2';
import Toggle from './components/useState3';
import Cart from './components/useState4';
function App() {
  return (
    <>
      <div>
        <Greeting />
        <Counter />
        <Toggle />
        <Cart />
       </div> 
    </>
  )
}

export default App
