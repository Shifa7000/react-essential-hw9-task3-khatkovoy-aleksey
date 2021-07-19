import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import { HomePage, ContactsPage, AboutPage, ProductsPage, ProductDetailsPage } from "../Pages";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </menu>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <ErrorBoundary>
                  <HomePage {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/contacts"
              render={(props) => (
                <ErrorBoundary>
                  <ContactsPage {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/about"
              render={(props) => (
                <ErrorBoundary>
                  <AboutPage {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              exact
              path="/products"
              render={(props) => (
                <ErrorBoundary>
                  <ProductsPage {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              exact
              path="/products/:id/product_details"
              render={(props) => (
                <ErrorBoundary>
                  <ProductDetailsPage {...props} />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
