import { Link } from "react-router-dom";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { fetchProducts } from '../../store/productsSlice'

import Button from '../../components/ui/Button'
import './Homepage.css'
import '../../index.css'

function Homepage() {
  const dispatch = useDispatch<AppDispatch>()
  const { products, loading, error } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
    <div className="flex w-full flex-row items-center justify-between">
      <Button variant="secondary" className="w-2/5">History</Button>
      <Link className="w-2/5" to="/add-check"><Button >Add check</Button></Link>
    </div>
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Product Averages</h1>
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <div key={product.id} className="p-2 rounded border">
          <div className="font-semibold">{product.name}</div>
          <div>€ {product.price} / {product.unit}</div>
        </div>
      ))}
    </div>
      <Button className="w-1/2">Check price</Button>
    </>
      
  )
}

export default Homepage