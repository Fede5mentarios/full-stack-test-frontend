import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { message } from "antd";
import Packs from "./templates/packs/Packs";
import Purchases from "./templates/purchases/Purchases";
import { Empty } from "antd";
import { getPacks } from "../APIs/packs";

function Router({ dispatch }) {
	const [packs, setPacks] = useState(undefined);

	const fetchPacks = () =>
		getPacks()
			.then(setPacks)
			.catch(err => {
				message.error(err.message);
				return setPacks([]);
			});

	if (packs === undefined) fetchPacks();

	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/config"
					component={() => <Packs packs={packs} fetchPacks={fetchPacks} />}
				/>
				<Route
					exact
					path="/compras"
					component={() => <Purchases packs={packs} />}
				/>
				<Route
					component={() => <Empty description={"Error 404 Page not found"} />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
