import React from 'react';
import { UsersContextProvider } from "../../usersContext";

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Greetings from '../../components/Greetings';
import SetUsername from '../../components/SetUsername';
import SmartTextField from '../../components/SmartTextField';
//import WithContextConnectedWrapperComponent from '../../components/WithContextConnectedWrapperComponent';

import styles from './styles.scss';

const GET_QUERY = gql`
query 
{
  hello(userName: "Toni") {
    userGreeting
  }
}
`

const PageOne = () => (
  <Query query={GET_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error!</div>;
      return (
        <div>
            <span>hello: {data.hello.userGreeting}</span>
        </div>
      )
    }}
  </Query>
)

export default PageOne;