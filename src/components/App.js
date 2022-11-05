import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Header from "./Header";
import Layout from "./Layout";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
