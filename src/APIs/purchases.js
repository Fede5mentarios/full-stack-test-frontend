import { request } from "../utils/restHelper";

export const getPacks = userId =>
	request({
		url: `/purchase/user/${userId}`,
		method: "get"
	});