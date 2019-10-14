import { request } from "../utils/restHelper";

export const getPacks = () =>
	request({
		url: "/config/pack",
		method: "get"
	});
