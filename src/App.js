import LandingPage from "./Pages/LandingPage";
import "./App.css";
import ArtisanDashboard from "./Pages/Artisans/ArtisanDashboard";
import ClientDashboard from "./Pages/Clients/ClientDashboard";
import Register from "./Pages/Register";
import ClientChatScreen from "./Pages/Clients/ClientChatScreen";
import Login from "./Pages/Login";
import ClientProfile from "./Pages/Clients/ClientProfile";
import PostForm from "./Pages/Clients/PostForm";
import ArtisanProfile from "./Pages/Artisans/ArtisanProfile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
  } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";



function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage/>}/>
				// <Route path="/" element={<ArtisanDashboard/>}/>
				<Route path="/About" element={<AboutUs/>}/>
				<Route path="/ContactUs" element={<ContactUs/>}></Route>

			</Routes>
		</Router>
		// <div className="App">
		// 	<LandingPage/>
		// 	<ArtisanDashboard/>
		// 	<ClientDashboard/>
		// 	<Register/>
		// 	<Login/>
		// 	<ClientChatScreen/>
		// 	<ClientProfile/>
		// 	<PostForm/>
		// 	<ArtisanProfile/>
		// </div>
	);
}

export default App;