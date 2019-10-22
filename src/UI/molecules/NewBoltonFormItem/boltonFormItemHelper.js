export const convertValuesToBoltonDTOs = values => {
	return Object.keys(values)
		.filter(it => it.startsWith("bolton-"))
		.map(boltonKey => {
			const key = boltonKey.split("-").pop();
			return {
				amount: values[`bolton-${key}`],
				type: values[`boltonType-${key}`]
			};
		});
};

export const createEmptyBolton = boltons => {
	const lastBolton = boltons.pop();
	return { key: `${Number(lastBolton.key) + 1}` };
};
