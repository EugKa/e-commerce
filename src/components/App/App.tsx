import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from '../Header';
import './base.scss'
import { AppRoute, routes, ROUTES_URLS } from './routes';
import styles from './App.module.scss'
import { connect } from 'react-redux';
import { ProtectedRoute } from '../protected-route';
import { Dispatch } from 'redux';
import { checkUserSession } from '../../store/auth';
interface AppProps {
  checkUserSession: () => void
}


class App extends React.Component<AppProps> {
  componentDidMount() {
    const { checkUserSession } =this.props
    checkUserSession()
  }
  renderRoute = (route:AppRoute, i: number) => {
    if(route.isProtected) {
      return <ProtectedRoute
              exact={route.exact}
              key={i}
              path={route.path}
              render={route.render}/>
    } else {
      return <Route 
              exact={route.exact} 
              key={i} 
              path={route.path} 
              render={(props) => route.render({...props})}/>
    }
    
  }
  render() {    
    return (
      <div className={styles.page}>
        <Header/>
        <div className={styles.component}>
          <Switch>
              {routes.map(this.renderRoute)}
              <Redirect to={ROUTES_URLS.NOT_FOUND}/>
          </Switch>
        </div>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});


const ConnectApp = connect(null,mapDispatchToProps)(App)

export { ConnectApp as App}
