import Data from '../../Images/data'
import Item from '../ItemsCom/Item'

const Popular = () => {
	return (
		<div className=' my-10 mt-60'>
			<h1 className='text-3xl md:text-5xl text-center font-medium my-10 '>Popular in Women</h1>
			<div className='bg-[#ffe2e9] 2xl:px-[15%]'>
			
				<div className=' 
				grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 rounded-lg py-10 px-4 grid-cols-1'>
					{
						Data.map((item, i) => {
							return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Popular