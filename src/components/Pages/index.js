import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class HomePage extends React.Component {
  render() {
    return <div className="HomePage">HomePage</div>;
  }
}

export class ContactsPage extends React.Component {
  render() {
    return <div className="ContactsPage">ContactsPage</div>;
  }
}

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        AboutPage
        <Exception />
      </div>
    );
  }
}

export class ProductsPage extends React.Component {
  render() {
    return (
      <div className="ProductsPage">
        <p>ProductsPage</p>
        <Link to="/products/13259/product_details">Product id - 13259</Link>
      </div>
    );
  }
}

export class ProductDetailsPage extends React.Component {
  render() {
    return <div className="ProductDetailsPage">ProductDetailsPage. Product ID - {this.props.match.params.id}</div>;
  }
}

export class Exception extends React.Component {
  render() {
    throw new Error("RandomException");
    return <div className="RandomException"> </div>;
  }
}
