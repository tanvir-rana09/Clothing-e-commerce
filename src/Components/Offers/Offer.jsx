

const Offer = () => {
	return (
		<div>
			<div className="exclusiveOffer flex flex-col items-start gap-5 px-5 2xl:px-[15%]">
				<p className="sm:text-8xl text-6xl font-medium"><span className="text-sky-400 ">Exclusive</span></p>
				<h1 className="sm:text-6xl text-4xl font-medium">Offers For  <span className="text-sky-400">You</span> </h1>
				<p className="text-2xl font-medium">Only On Best Seller Products</p>
				<button className="forbtn">Check Now
					<i className="fa-solid fa-arrow-right-long " ></i>
				</button>
			</div>
		</div>
	)
}

export default Offer