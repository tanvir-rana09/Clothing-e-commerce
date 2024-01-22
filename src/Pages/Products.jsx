import { useContext } from "react"
import { ShopContext } from "../Contexts/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import DiscriptionBox from "../Components/DescriptionBox/DiscriptionBox"
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"

const Products = () => {
  const { allProducts} = useContext(ShopContext)
  const {productId} = useParams()

  const product = allProducts.find((e)=> e.id== Number(productId))
  console.log(product.image)
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Products