import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png"
import { useContext, useState } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
const Navbar = () => {

	const [menu, setMenu] = useState("shop")
	const { getTotalCartItems } = useContext(ShopContext)
	return (
		<div>
			<nav className="bg-transparent flex justify-between p-3 px-8 items-center 2xl:px-[15%] shadow-md">
				<div className="flex items-center gap-2 ">
					<img className="w-12" src={logo} alt="Company Logo" />
					<h1 className="text-2xl tracking-wide">Star <span className="text-sky-500 font-medium">Creation</span></h1>
				</div>
				<ul className="flex gap-6 forli">

					<li onClick={() => setMenu("shop")}>
						<NavLink to='/'>shop</NavLink>
						{menu === "shop" ? <hr className="border border-sky-500 " /> : ''}
					</li>

					<li onClick={() => setMenu("mens")}>
						<NavLink to='/mens'>Men</NavLink>
						{menu === "mens" ? <hr className="border border-sky-500" /> : ''}
					</li>

					<li onClick={() => setMenu("womens")}>
						<NavLink to='/womens'>Women</NavLink>
						{menu === "womens" ? <hr className="border border-sky-500" /> : ''}
					</li>

					<li onClick={() => setMenu("kids")}>
						<NavLink to='/kids'>Kid</NavLink>
						{menu === "kids" ? <hr className="border border-sky-500" /> : ''}
					</li>

				</ul>

				<div className="cursor-pointer flex items-center gap-5 ">
					<NavLink to='/loginSignup'>
						<button className="border border-black px-4 py-1 text-lg rounded-full">Login</button>
					</NavLink>
					<NavLink to='/cart'>
						<i className="text-3xl fa-solid fa-cart-shopping "></i>
						<div className="forcart text-sm 2xl:right-[14.5%]">
							{
								getTotalCartItems()
							}
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
