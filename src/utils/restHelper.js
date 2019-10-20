import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/",
	timeout: 100000
});

export const validator = response =>
	new Promise((resolve, reject) => {
		try {
			if (response.data && response.data.errorCode) {
				reject(response.data);
				return;
			}
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});

export const createRequestConfig = (headers, options) => {
	const defaults = { headers: Object.assign({}, headers, {}) };
	return Object.assign({}, defaults, options);
};

export const request = options => {
	const requestConfig = createRequestConfig(
		{
			"Content-Type": "application/json"
		},
		options
	);
	return axiosInstance.request(requestConfig).then(validator);
};
