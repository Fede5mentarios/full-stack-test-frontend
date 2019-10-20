import { request } from "../utils/restHelper";

export const getPacks = () =>
	request({
		url: "/config/pack",
		method: "get"
	});

export const getPack = packId =>
	request({
		url: `/config/pack/${packId}`,
		method: "get"
	});

export const createPack = pack => 
	request(
		{
			url: "/config/pack",
			method: "post",
			data: pack
		}
	)

export const deletePack = packId =>
	request({
		url: `/config/pack/${packId}`,
		method: "delete"
	});
