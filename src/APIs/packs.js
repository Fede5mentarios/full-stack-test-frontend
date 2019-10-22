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
	request({
		url: "/config/pack",
		method: "post",
		data: pack
	});

const _deletePack = packId =>
	request({
		url: `/config/pack/${packId}`,
		method: "delete"
	});

export const deletePack = packId =>
	getPack(packId).then(pack => {
		console.log("pack to delete:", pack);
		if (pack.purchases.length === 0) {
			console.log("deleting pack:", packId);
			return _deletePack(packId);
		} else {
			return Promise.reject(new Error("Pack en uso"));
		}
	});
