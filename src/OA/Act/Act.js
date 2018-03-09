import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Model from './routes/Model';
import Form from './routes/Form';
import Process from './routes/Process';

const Act = ({match}) => {
	return (
		<Switch>
			<Route exact path={`${match.url}/model`} component={Model}/>
			<Route exact path={`${match.url}/form`} component={Form}/>
			<Route exact path={`${match.url}/process`} component={Process}/>
		</Switch>
	)
}


export default Act;