import engagementIdeas from './mockDatabase';

// Main function to match user inputs with appropriate ideas
export function generateIdeas(userInput) {
  const { productType, targetAudience, budget, channels } = userInput;
  
  // Apply filters based on user input
  let matchedIdeas = engagementIdeas.filter(idea => {
    // Filter by budget (if idea's minimum budget is within user's budget)
    if (idea.budgetRange.min > budget) {
      return false;
    }
    
    // Filter by target audience (if there's any overlap)
    if (targetAudience.length > 0) {
      const audienceMatch = idea.targetAudiences.some(audience => 
        targetAudience.includes(audience)
      );
      if (!audienceMatch) return false;
    }
    
    // Additional filters could be applied here based on product type, channels, etc.
    
    return true;
  });
  
  // Sort ideas by relevance (this is a simplified version)
  matchedIdeas = sortIdeasByRelevance(matchedIdeas, userInput);
  
  // Limit to 10 ideas max for the first version
  return matchedIdeas.slice(0, 10);
}

// Helper function to calculate relevance score and sort ideas
function sortIdeasByRelevance(ideas, userInput) {
  const { targetAudience, budget } = userInput;
  
  // Calculate a score for each idea
  const scoredIdeas = ideas.map(idea => {
    let score = 0;
    
    // Higher score for better audience match
    if (targetAudience.length > 0) {
      const audienceMatchCount = idea.targetAudiences.filter(audience => 
        targetAudience.includes(audience)
      ).length;
      score += (audienceMatchCount / targetAudience.length) * 50;
    } else {
      score += 25; // Default score if no audience selected
    }
    
    // Higher score for budget fit (ideas closer to user's budget get higher scores)
    const budgetMidpoint = (idea.budgetRange.min + idea.budgetRange.max) / 2;
    const budgetFit = 1 - Math.abs(budgetMidpoint - budget) / budget;
    score += budgetFit * 30;
    
    // Add some randomness to ensure variety
    score += Math.random() * 20;
    
    return { ...idea, relevanceScore: score };
  });
  
  // Sort by score (highest first)
  return scoredIdeas.sort((a, b) => b.relevanceScore - a.relevanceScore);
}