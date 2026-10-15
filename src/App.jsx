import { useState } from 'react'

function App() {
  const products=[
    {id:1,name:"mobile",category:"Electronics",price:10000},
    {id:2,name:"Laptop",category:"Electronics",price:40000},
    {id:3,name:"shirt",category:"Clothing",price:10000},
    {id:1,name:"Pant",category:"Clothing",price:10000}
  ]
  const [name,setName]=useState([])
  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState("ALL")
  const res=products.filter((p,i)=>p.name.toLowerCase().includes(search.toLowerCase()))
            .filter((p,i)=>filter=="ALL"||p.category.toLowerCase().includes(filter.toLowerCase()))
  const qty=[]
  const [cart,setCart]=useState([])
  const[price,setPrice]=useState(0)
  function add(e,i){
    e.preventDefault()
    if(name.includes(products[i].name)){
      qty[products[i].id]+=1
      console.log(qty[products[i].id])
      const t=price+products[i].price
      setPrice(t)
    }
    else{
    const p={
      id:products[i].id,
      name:products[i].name,
      price:products[i].price,
    }
    qty[p.id]="1"
    const t=price+products[i].price
      setPrice(t)
    console.log(qty[p.name])
    setName([...name,p.name])
    setCart([...cart,p])
  }
  }
  return (
    <div>
      <h2>Products</h2>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value="ALL">All products</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
      {res.map((p,i)=>(
        <p>{p.name}--{p.category}--{p.price}--<button onClick={(e)=>add(e,i)}>ADD</button></p>
      ))}
      <h2>Cart</h2>
      {cart.map((p,i)=>(
        <p>{p.name}--{p.price}--{qty[p.id]}</p>
      ))}
      <h2>Price:{price}</h2>
    </div>
  )
}

export default App
