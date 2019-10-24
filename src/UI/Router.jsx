import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { message, Row, Col, Button, Divider } from "antd";
import Packs from "./templates/packs/Packs";
import Purchases from "./templates/purchases/Purchases";
import { Empty } from "antd";
import { getPacks } from "../APIs/packs";
import CustomButton from "./atoms/CustomButton/CustomButton";
import Root from "./templates/root/Root";

function Router() {
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
		<>
			<></>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Root} />
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
		</>
	);
}

export default Router;
