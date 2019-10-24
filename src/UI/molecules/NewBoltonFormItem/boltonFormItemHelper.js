export const convertValuesToBoltonDTOs = values => {
	const boltonValues = Object.keys(values).filter(it =>
		it.startsWith("bolton-")
	);
	const boltonsDTO = boltonValues.map(boltonKey => {
		const key = boltonKey.split("-").pop();
		return {
			amount: values[`bolton-${key}`],
			type: values[`boltonType-${key}`]
		};
	});
	if (moreThanTwoOfTheSameType(boltonsDTO))
		throw new Error("Sólo puede haber un bono de cada tipo");
	return boltonsDTO;
};

const moreThanTwoOfTheSameType = dtos =>
	dtos.reduce(
		(hasTwoiceOneType, dto) =>
			hasTwoiceOneType || dtos.filter(it => it.type === dto.type).length > 1,
		false
	);

export const createEmptyBolton = boltons => {
	const lastBolton = boltons.pop();
	return { key: `${Number(lastBolton.key) + 1}` };
};
