import React, { useState } from 'react';
import InputForm from './components/InputForm';
import IdeasDisplay from './components/IdeasDisplay';
import { generateIdeas } from './utils/matchingAlgorithm';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    maxBudget: null,
    maxDifficulty: null
  });

  const handleFormSubmit = (formData) => {
    const matchedIdeas = generateIdeas(formData);
    setIdeas(matchedIdeas);
    setShowResults(true);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Fan Engagement Idea Generator</h1>
        <p>Generate innovative ways to engage your fans beyond your core product</p>
      </header>

      <main>
        {!showResults ? (
          <InputForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="results-container">
            <button 
              className="back-button"
              onClick={() => setShowResults(false)}
            >
              ← Back to Form
            </button>
            <h2>Your Personalized Fan Engagement Ideas</h2>
            <IdeasDisplay 
              ideas={ideas} 
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>
        )}
      </main>

      <footer>
        <p>Fan Engagement Idea Generator © 2025</p>
      </footer>
    </div>
  );
}

export default App;