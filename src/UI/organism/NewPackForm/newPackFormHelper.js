import { convertValuesToBoltonDTOs } from "../../molecules/NewBoltonFormItem/boltonFormItemHelper";

export const formBasicItems = existingPacks => {
	return [
		{
			title: "Nombre",
			type: "text",
			key: "name",
			rules: [
				{
					validator: (rule, value, callback) => {
						if (
							existingPacks &&
							existingPacks.find(pack => pack.name === value)
						) {
							return callback("Ya existe un pack con este nombre");
						}
						return callback();
					}
				}
			]
		},
		{
			title: "Costo",
			type: "number",
			key: "cost",
			unit: "ARG"
		},
		{
			title: "Vigencia",
			key: "days",
			type: "integer"
		}
	];
};

export const convertToPack = values =>
	Object.assign({}, values, {
		boltons: convertValuesToBoltonDTOs(values),
		purchases: []
	});
