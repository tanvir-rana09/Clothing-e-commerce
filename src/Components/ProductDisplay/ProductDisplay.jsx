import star from '../Images/star_icon.png'
import starNull from '../Images/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';

const ProductDisplay = (props) => {
	const { product } = props;
	const { addtoCart } = useContext(ShopContext)

	return (
		<div className='flex items-center py-20 justify-center xl:px-[15%] flex-col  m-auto lg:flex-row'>
			<div className='flex gap-2 p-5'>
				<div className='flex flex-col justify-between'>
					<img className='w-28 hover:border-black hover:border-2' src={product.image} />
					<img className='w-28 hover:border-black hover:border-2' src={product.image} />
					<img className='w-28 hover:border-black hover:border-2' src={product.image} />
					<img className='w-28 hover:border-black hover:border-2' src={product.image} />
				</div>
				<div className='w-[30rem] overflow-hidden'>
					<img className='w-full hover:scale-125 duration-200' src={product.image} alt="" />
				</div>
			</div>
			<div className='flex flex-col px-5' >
				<div className='flex flex-col font-medium'>
					<h1 className='text-2xl font-medium'>{product.name} </h1>
					<h1>Price : {product.new_price}$</h1>
					<h1 >Price :  <span className='line-through '>{product.old_price}$</span> </h1>
				</div>
				<div className='flex gap-1 h-4 items-center my-5'>
					<h1>Rating :</h1>
					<img src={star} />
					<img src={star} />
					<img src={star} />
					<img src={star} />
					<img src={starNull} />
					<p>(5)</p>
				</div>
				<div className='font-medium text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum quibusdam cum harum ea ipsum eaque illum ducimus dolore accusantium.
				</div>
				<div>
					<h1 className='text-xl my-2 mt-8 '>Select Size</h1>
					<div className='flex gap-5'>
						<button className='bg-slate-100 rounded-sm border-2 border-slate-700 py-2 px-5 hover:bg-slate-300 font-medium'>S</button>
						<button className='bg-slate-100 rounded-sm border-2 border-slate-700 py-2 px-5 hover:bg-slate-300 font-medium'>M</button>
						<button className='bg-slate-100 rounded-sm border-2 border-slate-700 py-2 px-5 hover:bg-slate-300 font-medium'>L</button>
						<button className='bg-slate-100 rounded-sm border-2 border-slate-700 py-2 px-5 hover:bg-slate-300 font-medium'>XL</button>
						<button className='bg-slate-100 rounded-sm border-2 border-slate-700 py-2 px-5 hover:bg-slate-300 font-medium'>XXL</button>
					</div>
				</div>
				<div>
					<button className='bg-sky-500 font-medium text-white py-2 px-6 my-5 hover:bg-sky-700 duration-200  ' onClick={() => addtoCart(product.id)}>Add To Cart</button>
				</div>
				<div>
					<p className='font-medium '>Category : Women,T-Shirt,Crop Top</p>
					<p className='font-medium '>Tags : Modern,Latest </p>
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay