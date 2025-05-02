
import './App.css'
import './index.css'
import Button from './components/ui/Button'

function App() {

  return (
    <>
    <div className="flex w-full flex-row items-center justify-between">
      <Button className="w-2/5">History</Button>
      <Button className="w-2/5">Add check</Button>
    </div>
      <div className="text-3xl min-h-4/5 place-content-center font-bold text-red-500 p-8">
        Empty state
      </div>
      <Button className="w-1/2">Check price</Button>
    </>
      
  )
}

export default App
