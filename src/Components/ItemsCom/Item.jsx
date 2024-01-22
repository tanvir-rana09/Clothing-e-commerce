import { NavLink } from "react-router-dom"


const Item = (props) => {
	return (
		<div className="rounded-t-md shadow-lg bg-white m-auto rounded-b-lg hover:scale-95 duration-200 cursor-pointer hover:shadow-none w-11/12 scroll-smooth " onClick={window.scrollTo(0, 0)}>
			<NavLink to={`/product/${props.id}`}>
				<img className="rounded-t-md w-full" src={props.image} />
			</NavLink>
			<div className="p-2 flex flex-col gap-1 ">
				<p className="font-medium"> {props.name} </p>
				<div className="itemPrices">
					<div className="font-medium my-1"> <span className="text-red-600">New</span> Price : {props.new_price}$ </div>
					<div >Old Price : <span className=" line-through">{props.old_price}$</span> </div>
				</div>
			</div>
		</div>
	)
}

export default Item