import { itemsInMenu } from "../itemsInMenu";
import MenuItems from "./MenuItems";

const Navbar = () => {
	const depthLevel = 0;

	return (
		<nav>
			<ul className="menus">
				{itemsInMenu.map((menu, index) => {
					return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
