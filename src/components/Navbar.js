import { itemsInMenu } from "../itemsInMenu";
import MenuItems from "./MenuItems";

const Navbar = () => {
	return (
		<nav>
			<ul className="menus">
				{itemsInMenu.map((menu, index) => {
					return <MenuItems items={menu} key={index} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
