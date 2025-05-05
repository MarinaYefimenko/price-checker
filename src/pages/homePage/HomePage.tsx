
import './Homepage.css'
import '../../index.css'
import { Link } from "react-router-dom";
import Button from '../../components/ui/Button'

function Homepage() {

  return (
    <>
    <div className="flex w-full flex-row items-center justify-between">
      <Button variant="secondary" className="w-2/5">History</Button>
      <Link className="w-2/5" to="/add-check"><Button >Add check</Button></Link>
    </div>
      <div className="text-3xl min-h-4/5 place-content-center font-bold text-red-500 p-8">
        Empty state
      </div>
      <Button className="w-1/2">Check price</Button>
    </>
      
  )
}

export default Homepage