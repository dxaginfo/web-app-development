import React from 'react';

function IdeaCard({ idea }) {
  return (
    <div className="idea-card">
      <div className="idea-category">{idea.category}</div>
      <h3>{idea.title}</h3>
      <p className="idea-description">{idea.description}</p>
      
      <div className="idea-meta">
        <div className="meta-item">
          <span className="meta-label">Budget:</span>
          <span className="meta-value">${idea.budgetRange.min.toLocaleString()} - ${idea.budgetRange.max.toLocaleString()}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Difficulty:</span>
          <span className="meta-value">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className={i < idea.difficultyLevel ? "star filled" : "star"}>★</span>
            ))}
          </span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Time to Implement:</span>
          <span className="meta-value">{idea.timeToImplement}</span>
        </div>
      </div>
      
      <div className="implementation-steps">
        <h4>Implementation Steps:</h4>
        <ol>
          {idea.implementationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="idea-metrics">
        <h4>Potential Metrics:</h4>
        <ul className="metrics-list">
          {idea.potentialMetrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </div>
      
      {idea.exampleBrands.length > 0 && (
        <div className="example-brands">
          <span className="example-label">Examples: </span>
          {idea.exampleBrands.join(', ')}
        </div>
      )}
    </div>
  );
}

export default IdeaCard;