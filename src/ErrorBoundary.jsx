import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    // Clear potentially corrupted state/keys and reload
    localStorage.removeItem("narrateai_last_story"); // if we store it later
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
          color: "#e2e8f0",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "40px",
            maxWidth: "550px",
            width: "100%",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
          }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>⚠️</div>
            <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Something went wrong
            </h1>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
              An unexpected error occurred during rendering. You can try reloading or resetting the application state.
            </p>

            {this.state.error && (
              <div style={{
                textAlign: "left",
                background: "rgba(0, 0, 0, 0.3)",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                marginBottom: "24px",
                fontSize: "12px",
                fontFamily: "monospace",
                color: "#f87171",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                maxHeight: "150px"
              }}>
                <strong>Error:</strong> {this.state.error.toString()}
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#e2e8f0",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.2s"
                }}
              >
                Reload Page
              </button>
              <button
                onClick={this.handleReset}
                style={{
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(239,68,68,0.4)",
                  transition: "all 0.2s"
                }}
              >
                Reset App State
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
