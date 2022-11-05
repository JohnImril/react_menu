import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import WebDesign from "../routes/WebDesign";
import SEO from "../routes/SEO";
import Layout from "./Layout";
import Frontend from "../routes/Frontend";
import PHP from "../routes/PHP";
import Node from "../routes/Node";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="web-design" element={<WebDesign />} />
					<Route path="frontend" element={<Frontend />} />
					<Route path="node" element={<Node />} />
					<Route path="seo" element={<SEO />} />
					<Route path="php" element={<PHP />} />
					<Route path="*" element={<p>Not found!</p>} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
