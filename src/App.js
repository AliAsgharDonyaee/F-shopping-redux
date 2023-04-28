import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PageShop from "./components/pages/PageShop";

function App() {
	return (
		<div className='App'>
			<Header />
			<PageShop />
			<Footer />
		</div>
	);
}

export default App;
