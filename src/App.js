import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export const App = () => (
	<Routes>
		<Route path='/' element={<Home />} />;
	</Routes>
);
