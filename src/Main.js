import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Layout  } from 'antd';
import {Aside,BreadNav,LayoutHeader,Setting} from './Layout';
import Loader from './components/Loader/';
import {isLogin} from './utils';
import { loadUserInfo, loadAppInfo } from './actions';
import Common from './Common/';
import Developer from './Developer/';
import Ledger from './Ledger/';

const { Content, Footer } = Layout;
class Main extends PureComponent{
	componentWillMount(){
		if(!isLogin){
			this.props.history.push('/login')
		}
	}
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(loadUserInfo());
		dispatch(loadAppInfo());
	}

	render(){
		const {menuCollapsed,menuItem} = this.props.app;
		const asideProps = {menuCollapsed,menuItem}
		return(
			<Layout className="ant-layout-has-sider">
				<Loader fullScreen spinning={this.props.app.loading} />
				<Aside {...asideProps} />
				<Layout>
					<LayoutHeader />
					<BreadNav />
					<Content className="content">
						<Switch>
							<Route path="/common" component={Common}/>
							<Route path="/ledger" component={Ledger}/>
							<Route path="/developer" component={Developer}/>
						</Switch>
					</Content>
					<Footer className="footer">
						ERPNext ©2017 Created by Heshm
					</Footer>
					<Setting />
				</Layout>
			</Layout>
		)
	}
}

export default connect(({app}) => ({app}))(Main);