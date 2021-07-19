import React from "react";
import "./index.css";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <p>Something went wrong!</p>;
    return this.props.children;
  }
}

export default ErrorBoundary;
