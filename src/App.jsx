import NarrateAI from './NarrateAI';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <NarrateAI />
    </ErrorBoundary>
  );
}

export default App;
