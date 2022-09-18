import { itemsInMenu } from "../itemsInMenu";
import MenuItems from "./MenuItems";

const Navbar = () => {
	return (
		<nav>
			<ul className="menus">
				{itemsInMenu.map((menu, index) => {
					const depthLevel = 0;
					return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
