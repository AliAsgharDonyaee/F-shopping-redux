import axios from "axios";

axios.defaults.baseURL = "http://localhost:3500";

export const http = {
	get: axios.get,
	post: axios.post,
	delete: axios.delete,
	update: axios.put,
};
