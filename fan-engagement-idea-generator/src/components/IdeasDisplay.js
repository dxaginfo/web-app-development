import React from 'react';
import IdeaCard from './IdeaCard';

function IdeasDisplay({ ideas, filters, onFilterChange }) {
  // Apply filters to ideas
  const filteredIdeas = ideas.filter(idea => {
    // Filter by category if a category filter is active
    if (filters.category && filters.category !== 'all') {
      if (idea.category !== filters.category) return false;
    }
    
    // Filter by budget if a max budget is set
    if (filters.maxBudget) {
      if (idea.budgetRange.min > filters.maxBudget) return false;
    }
    
    // Filter by difficulty if set
    if (filters.maxDifficulty) {
      if (idea.difficultyLevel > filters.maxDifficulty) return false;
    }
    
    return true;
  });

  // Get unique categories from all ideas
  const categories = [...new Set(ideas.map(idea => idea.category))];

  return (
    <div className="ideas-container">
      <div className="filters">
        <h3>Filter Ideas</h3>
        <div className="filter-group">
          <label>Category:</label>
          <select 
            name="category" 
            value={filters.category} 
            onChange={e => onFilterChange({...filters, category: e.target.value})}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Max Budget: ${filters.maxBudget ? filters.maxBudget.toLocaleString() : 'Any'}</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={filters.maxBudget || 100000}
            onChange={e => onFilterChange({...filters, maxBudget: parseInt(e.target.value, 10)})}
          />
        </div>
        
        <div className="filter-group">
          <label>Max Difficulty (1-5): {filters.maxDifficulty || 'Any'}</label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={filters.maxDifficulty || 5}
            onChange={e => onFilterChange({...filters, maxDifficulty: parseInt(e.target.value, 10)})}
          />
        </div>
      </div>
      
      <div className="ideas-grid">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} />
          ))
        ) : (
          <p className="no-results">No ideas match your current filters. Try adjusting them.</p>
        )}
      </div>
    </div>
  );
}

export default IdeasDisplay;