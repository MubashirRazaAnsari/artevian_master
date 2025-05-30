"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log the error to an error reporting service here
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            We apologize for the inconvenience. Please try refreshing the page
            or contact support if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
              <p className="text-red-600 font-mono text-sm">
                {this.state.error.toString()}
              </p>
              <pre className="mt-2 text-xs overflow-auto">
                {this.state.errorInfo?.componentStack}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
