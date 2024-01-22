import new_collection from '../../Images/new_collections'
import Item from '../ItemsCom/Item'
const RelatedProducts = () => {
	return (
		<div>
			<div className='p-5 2xl:px-[15%] '>
				<h1 className='text-2xl font-medium mb-2'>Related Products</h1>
				<hr />
				<div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 rounded-lg py-10 px-4 grid-cols-1'>
					{
						new_collection.map((item, i) => {
							return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default RelatedProducts