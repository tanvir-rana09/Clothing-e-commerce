import { ShopContext } from "../Contexts/ShopContext"
import Item from "../Components/ItemsCom/Item"
import { useContext } from "react"

const ShopCatagory = (props) => {
  const { allProducts } = useContext(ShopContext)
  return (
    <div className="relative">
      <div className="banner">
        <img src={props.banner} />
      </div>
      <div className='2xl:px-[15%] bg-[#ffe2e9]' >
        <div className='absolute top-1 sm:top-10 md:top-20 left-0 2xl:top-56 2xl:left-[15%] xl:left-[10%] xl:top-32 p-5'>
          <h1 className='text-xs md:text-xl 2xl:text-2xl'> {props.bannerText} </h1>
          <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium mb-4 '>Flat <span className='text-[#c43175] font-bold'>30% OFF</span>  <br /> On Online Payment</p>
          <button className="forbtn hover:bg-darkpink text-xs px-2 py-1 lg:text-xl xl:text-2xl md:px-5 md:py-2">Check Now
            <i className="fa-solid fa-arrow-right-long " ></i>
          </button>
        </div>
        <p className="text-2xl p-5 px-10 font-medium">Showing 1-12 <span>Out of 36 Products</span> </p>
        <hr className="border-slate-400 w-11/12 ml-10 border-2"/> 
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 rounded-lg py-10 px-4 grid-cols-1">
          {
            allProducts.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShopCatagory