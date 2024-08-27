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
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import ClientDash from "./Pages/Clients/ClientDash";
import ArtisanDash from "./Pages/Artisans/ArtisanDash";



function App() {

	const [isAuthenticated, setIsAuthenticated] = useState(null)
	const [userRole, setUserRole] = useState()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
		  if (user) {
			console.log(user);
			const uid = user.uid;
			setIsAuthenticated(user);
		  } else {
		  }
		});
	
	  }, [])

	useEffect(() => {
		async function getUserRole() {
			const roleRef = collection(db, "users")
			const queryByEmail = query(roleRef, where("email", "==", auth.currentUser.email))
			const querySnapshot = await getDocs(queryByEmail)
			if (querySnapshot.empty) {
				console.log("no user!!!");
			} else {
				querySnapshot.forEach((doc) => {
					setUserRole(doc.data().role)
				})
			}
		}

		if (isAuthenticated) {
			getUserRole()
		}
	}, [isAuthenticated])

	return (
		<Router>
			<Routes>
				 <Route path="/" element={<ClientDash />} />
				{/* {userRole === 'client' && <Route path="/" element={<ClientDashboard />} />}
				{!userRole && <Route path="/" element={<LandingPage/>}/>}
				{!userRole && <Route path="/About" element={AboutUs}></Route>}
				{!userRole && <Route path="/ContactUs" element={ContactUs}></Route>} */}
			</Routes>
			{/* <Routes>
				{userRole === 'artisan' && <Route path="/" element={<ArtisanDashboard />} />}
				{userRole === 'client' && <Route path="/" element={<ClientDashboard />} />}
				{!userRole && <Route path="/" element={<LandingPage/>}/>}
				{!userRole && <Route path="/About" element={AboutUs}></Route>}
				{!userRole && <Route path="/ContactUs" element={ContactUs}></Route>}
			</Routes> */}
		</Router>
	);
}

export default App;