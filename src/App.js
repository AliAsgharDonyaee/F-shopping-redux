import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PageShop from "./components/pages/PageShop";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { fetchFailure, fetchRequest, fetchSuccess } from "./redux/productActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export const App = () => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	useEffect(async () => {
		try {
			dispatch(fetchRequest());
			const datas = await axios.get("https://fakestoreapi.com/products");
			datas && dispatch(fetchSuccess(datas.data));
		} catch (error) {
			dispatch(fetchFailure(error.message));
			toast.error(error.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
	}, []);
	return loading ? (
		<div className='w-screen h-screen bg-white dark:bg-slate-800 flex justify-center items-center '>
			<ReactLoading type={"balls"} color={"#ec4899"} delay={200} height={64} width={64} />
		</div>
	) : (
		<div className='App'>
			<ToastContainer />
			<Header />
			<PageShop />
			<Footer />
		</div>
	);
};

export default AppWrapper;
