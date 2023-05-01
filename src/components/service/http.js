import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/products"

export const http = {
	get: axios.get,
	post: axios.post,
	delete: axios.delete,
	update: axios.put,
};
