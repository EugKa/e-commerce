import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from '../Header';
import './base.scss'
import { AppRoute, routes, ROUTES_URLS } from './routes';
import styles from './App.module.scss'
import { readUser } from '../../store/auth';
import { connect } from 'react-redux';
interface AppProps {
  onReadUser: () => void
}


class App extends React.Component<AppProps> {
  componentDidMount() {
    const { onReadUser } = this.props;
    onReadUser()
   
  }
  renderRoute = (route:AppRoute, i: number) => {
    return <Route exact={route.exact} 
                  key={i} 
                  path={route.path} 
                  render={(props) => route.render({...props})}
            />
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

const mapDispatchToProps = (dispatch:any) => ({
  onReadUser: () => dispatch(readUser())
});


const ConnectApp = connect(null,mapDispatchToProps)(App)

export { ConnectApp as App}
