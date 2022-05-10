import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import PageOne from "../../Pages/PageOne";
import PageTwo from "../../Pages/PageTwo";
import PageThree from "../../Pages/PageThree";
import Header from '../Header';
import styles from './styles.scss';

export default class App extends Component {
  render() {

    const GRAPHQL_URL = 'http://localhost:4000/graphql';
    const client = new ApolloClient({
      link: new HttpLink({ uri:  GRAPHQL_URL }),
      cache: new InMemoryCache()
    });  

    return (
      <div className={styles.appWrapper}>
        <h1>React is running</h1>
        <ApolloProvider client={client}>
          <Router>
            <Header title="TEST" />          
            <Switch>
              <Route exact path="/page-one" component={PageOne}/>
              <Route exact path="/page-two" component={PageTwo}/>
              <Route exact path="/page-three" component={PageThree}/>
            </Switch>
          </Router>
          </ApolloProvider>
      </div>
    );
  }
}