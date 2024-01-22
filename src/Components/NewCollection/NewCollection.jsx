import new_collection from '../../Images/new_collections'
import Item from '../ItemsCom/Item'
const NewCollection = () => {
	return (
		<div className='mt-60'>
			<h1 className='text-3xl md:text-5xl text-center font-medium my-10 '>New Collection</h1>
			<div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 rounded-lg py-10 px-4 grid-cols-1 bg-[#ffe2e9] 2xl:px-[15%] '>
				{
					new_collection.map((item, i) => {
						return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
					})
				}
			</div>
		</div>
	)
}

export default NewCollection