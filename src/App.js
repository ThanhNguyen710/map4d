import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import PageRoute from './components/content/route';
import Layout from './components/Layout';




function App() {

  const Content = <PageRoute/>;

  return (
    <Router>
      <Switch>

        <Route exact path={['/', '/route']}>
          <Switch>
            <Route exact path="/">
              <Layout>
                {Content}
              </Layout>
            </Route>

            <Route path="/route">
              <Layout>
                <a href="google.com.vn">Điều hướng đên google</a>
              </Layout>
            </Route>
          </Switch>
        </Route>   
      </Switch>
      
    </Router>
  );
}

export default App;