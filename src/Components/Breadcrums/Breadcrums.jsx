import arrow from '../Images/breadcrum_arrow.png'

const Breadcrums = (props) => {
	const {product} = props;
  return (
	<div className='flex p-5 gap-2 bg-slate-200 2xl:px-[15%]' >
		Home <img src={arrow}/> Shop <img src={arrow}/> {product.category} <img src={arrow} /> <span className='font-medium'>{product.name}</span>
	</div>
  )
}

export default Breadcrums