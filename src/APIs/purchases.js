import { request } from "../utils/restHelper";

export const getPurchases = userId =>
	request({
		url: `/purchase/user/${userId}`,
		method: "get"
	});