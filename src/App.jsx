import { useState } from 'react'

function App() {
  const products=[
    {id:1,name:"mobile",category:"Electronics",price:10000},
    {id:2,name:"Laptop",category:"Electronics",price:40000},
    {id:3,name:"shirt",category:"Clothing",price:10000},
    {id:1,name:"Pant",category:"Clothing",price:10000}
  ]
  const[mobile,setMobile]=useState(0)
  const[laptop,setLap]=useState(0)
  const[shirt,setShirt]=useState(0)
  const[pant,setPant]=useState(0)
  const [name,setName]=useState([])
  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState("ALL")
  const[disp,setDisp]=useState(0)
  const[gst,setGst]=useState(0)
  const[ship,setShip]=useState(0)
  const res=products.filter((p,i)=>p.name.toLowerCase().includes(search.toLowerCase()))
            .filter((p,i)=>filter=="ALL"||p.category.toLowerCase().includes(filter.toLowerCase()))
  
  const [cart,setCart]=useState([])
  const[price,setPrice]=useState(0)
  function add(e,i){
    e.preventDefault()
    if(name.includes(products[i].name)){
       const t=price+products[i].price
      setPrice(t)
      if(products[i].name=="mobile"){
      const t=mobile+1;
      setMobile(t)
    }
    else if(products[i].name=="Laptop"){
      const t=laptop+1
      setLap(t)
    }
    else if(products[i].name=="shirt"){
      const t=shirt+1
      setShirt(t)
    }
    else if(products[i].name=="Pant"){
      const t=pant+1
      setPant(t)
    }
     
    }
    else{
    const p={
      id:products[i].id,
      name:products[i].name,
      price:products[i].price,
    }
    if(p.name=="mobile"){
      const t=mobile+1;
      setMobile(t)
    }
    else if(p.name=="Laptop"){
      const t=laptop+1
      setLap(t)
    }
    else if(p.name=="shirt"){
      const t=shirt+1
      setShirt(t)
    }
    else if(p.name=="Pant"){
      const t=pant+1
      setPant(t)
    }
    const t=price+products[i].price
      setPrice(t)
    setName([...name,p.name])
    setCart([...cart,p])
  }
  }
  function apply(){
    const n=price
    const m=disp>0?Number(price-(Number((price*disp)/100))):0
    const k=gst>0?Number(price+(Number((price*gst)/100))):0
    const v=ship>0?Number(price+(Number((price*ship)/100))):0
    const total=n-m+k+v
    setPrice(total)
    setShip(0)
    setGst(0)
    setDisp(0)
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
        <p>{p.name}--{p.price}--{p.name=="mobile"?mobile:(p.name=="Laptop"?laptop:(p.name=="shirt"?shirt:pant))}</p>
      ))}
      <label>Shipping Charge</label>
      <input type="number" value={ship} onChange={(e)=>setShip(e.target.value)} placeholder="Discount %"></input>
      <label>GST</label>
      <input type="number" value={gst} onChange={(e)=>setGst(e.target.value)} placeholder="Discount %"></input>
      <label>Discount</label>
      <input type="number" value={disp} onChange={(e)=>setDisp(e.target.value)} placeholder="Discount %"></input>
      <button onClick={()=>apply()}>Apply</button>
      <h2>Price:{price}</h2>
    </div>
  )
}

export default App
