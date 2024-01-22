
import love from '../Images/love-letter.png'
const NewsLetter = () => {
	return (
		<div>
			<div className="flex sm:p-5 p-2 py-5 justify-between mt-60 flex-col gap-7 bg-[#ffe2e9] items-center   2xl:px-[15%]">
				<img className='w-48' src={love} alt="" />
				<div >
					<h1 className="text-3xl md:text-4xl font-medium">Get Exlusive Offers On Your Email</h1>
					<p className="text-xl">Subcribe To our  newsletter and stay update</p>
				</div>
				<div className="bg-white rounded-full md:w-3/5 w-full flex justify-between">
					<input className="rounded-full w-full px-6 p-2 outline-none" type="email" name="text" id="text" />
					<button className="font-medium hover:bg-[#FF5492] text-white py-3 px-7 bg-[#FF91C1] rounded-r-full">Subscribe</button>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter