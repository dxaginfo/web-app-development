const engagementIdeas = [
  {
    "id": "idea-001",
    "title": "AR Team Mascot Hunt",
    "category": "AR Experience",
    "description": "A location-based augmented reality game where fans hunt for virtual versions of team mascots around the venue or city.",
    "implementationSteps": [
      "Create 3D models of mascot",
      "Develop AR application or partner with existing AR platform",
      "Map virtual mascot locations",
      "Design reward system for completed hunts"
    ],
    "budgetRange": {
      "min": 5000,
      "max": 25000,
      "currency": "USD"
    },
    "difficultyLevel": 3,
    "timeToImplement": "4-8 weeks",
    "targetAudiences": ["families", "tech-savvy fans", "casual-fans"],
    "potentialMetrics": ["app downloads", "hunt completions", "social shares"],
    "exampleBrands": ["Orlando Magic", "Pokemon Go partnership"]
  },
  {
    "id": "idea-002",
    "title": "Virtual Fan Meetups",
    "category": "Digital Content",
    "description": "Scheduled virtual meetups where fans can interact with players, staff, or other fans in a moderated online environment.",
    "implementationSteps": [
      "Select video conferencing platform",
      "Create schedule of events",
      "Develop registration system",
      "Train participants on virtual etiquette"
    ],
    "budgetRange": {
      "min": 1000,
      "max": 5000,
      "currency": "USD"
    },
    "difficultyLevel": 2,
    "timeToImplement": "2-4 weeks",
    "targetAudiences": ["die-hard-fans", "young-adults", "remote fans"],
    "potentialMetrics": ["registration numbers", "attendance", "fan satisfaction surveys"],
    "exampleBrands": ["Miami Heat", "Dallas Cowboys"]
  },
  {
    "id": "idea-003",
    "title": "Community Service Day",
    "category": "Community Event",
    "description": "Organize a day where fans can join team members in community service projects, strengthening community bonds and brand values.",
    "implementationSteps": [
      "Partner with local charity",
      "Plan service activities",
      "Create registration system",
      "Develop social media campaign"
    ],
    "budgetRange": {
      "min": 2000,
      "max": 10000,
      "currency": "USD"
    },
    "difficultyLevel": 3,
    "timeToImplement": "6-12 weeks",
    "targetAudiences": ["families", "die-hard-fans", "community-minded fans"],
    "potentialMetrics": ["volunteer signups", "social media engagement", "positive press coverage"],
    "exampleBrands": ["Seattle Seahawks", "Golden State Warriors"]
  },
  {
    "id": "idea-004",
    "title": "Fan Content Creation Contest",
    "category": "Contest",
    "description": "Competition where fans submit user-generated content (videos, artwork, etc.) related to the team, with prizes for winners.",
    "implementationSteps": [
      "Define contest rules and submission guidelines",
      "Create submission platform",
      "Develop judging criteria",
      "Arrange prizes"
    ],
    "budgetRange": {
      "min": 1000,
      "max": 7500,
      "currency": "USD"
    },
    "difficultyLevel": 2,
    "timeToImplement": "3-6 weeks",
    "targetAudiences": ["young-adults", "creative fans", "social media users"],
    "potentialMetrics": ["submission count", "social sharing", "website traffic"],
    "exampleBrands": ["Los Angeles Lakers", "Netflix fan art contests"]
  },
  {
    "id": "idea-005",
    "title": "Interactive Halftime Show",
    "category": "In-venue Experience",
    "description": "A halftime show where fans in the venue can participate through their smartphones, creating collective visual effects or sounds.",
    "implementationSteps": [
      "Develop mobile web app for participation",
      "Create visual/audio effects system",
      "Test with small groups",
      "Prepare in-venue instructions"
    ],
    "budgetRange": {
      "min": 7500,
      "max": 30000,
      "currency": "USD"
    },
    "difficultyLevel": 4,
    "timeToImplement": "8-12 weeks",
    "targetAudiences": ["in-venue fans", "tech-savvy fans", "experience seekers"],
    "potentialMetrics": ["participation rate", "social media mentions", "fan satisfaction"],
    "exampleBrands": ["Cleveland Cavaliers", "Dallas Mavericks"]
  },
  {
    "id": "idea-006",
    "title": "Personalized Milestone Recognition",
    "category": "Digital Content",
    "description": "System to recognize individual fan milestones (years as a fan, games attended, etc.) with personalized digital content.",
    "implementationSteps": [
      "Develop tracking system for fan milestones",
      "Create templated congratulatory content",
      "Set up automated delivery system",
      "Design shareable social media assets"
    ],
    "budgetRange": {
      "min": 2500,
      "max": 15000,
      "currency": "USD"
    },
    "difficultyLevel": 3,
    "timeToImplement": "4-8 weeks",
    "targetAudiences": ["die-hard-fans", "season ticket holders", "long-term fans"],
    "potentialMetrics": ["open rates", "social shares", "positive feedback"],
    "exampleBrands": ["New York Yankees", "Spotify Wrapped"]
  },
  {
    "id": "idea-007",
    "title": "Predictive Game Contest",
    "category": "Contest",
    "description": "Fan competition to predict game outcomes, player stats, or other events, with leaderboards and prizes.",
    "implementationSteps": [
      "Define prediction categories",
      "Build prediction submission platform",
      "Create scoring system",
      "Set up prize structure"
    ],
    "budgetRange": {
      "min": 2000,
      "max": 10000,
      "currency": "USD"
    },
    "difficultyLevel": 2,
    "timeToImplement": "3-6 weeks",
    "targetAudiences": ["stats-focused fans", "competitive fans", "casual-fans"],
    "potentialMetrics": ["number of participants", "retention rate", "time spent on platform"],
    "exampleBrands": ["NFL Play Predictor", "ESPN Streak for the Cash"]
  },
  {
    "id": "idea-008",
    "title": "Behind-the-Scenes Content Series",
    "category": "Digital Content",
    "description": "Regularly released digital content showing behind-the-scenes aspects of the team or organization.",
    "implementationSteps": [
      "Plan content calendar",
      "Arrange filming access",
      "Develop editing workflow",
      "Create distribution strategy"
    ],
    "budgetRange": {
      "min": 3000,
      "max": 20000,
      "currency": "USD"
    },
    "difficultyLevel": 3,
    "timeToImplement": "Ongoing (2-4 weeks setup)",
    "targetAudiences": ["die-hard-fans", "content consumers", "social media followers"],
    "potentialMetrics": ["view counts", "subscriber growth", "engagement time"],
    "exampleBrands": ["Hard Knocks (NFL)", "Drive to Survive (F1)"]
  },
  {
    "id": "idea-009",
    "title": "Virtual Reality Game Day Experience",
    "category": "AR Experience",
    "description": "VR experience allowing remote fans to feel like they're at the venue, with customizable viewpoints and interactive elements.",
    "implementationSteps": [
      "Select VR technology partner",
      "Install multi-angle cameras in venue",
      "Develop VR application",
      "Create subscription or access model"
    ],
    "budgetRange": {
      "min": 25000,
      "max": 100000,
      "currency": "USD"
    },
    "difficultyLevel": 5,
    "timeToImplement": "12-24 weeks",
    "targetAudiences": ["tech-savvy fans", "remote fans", "premium experience seekers"],
    "potentialMetrics": ["subscriptions", "usage time", "premium feature adoption"],
    "exampleBrands": ["NextVR partnerships", "Manchester United VR Experience"]
  },
  {
    "id": "idea-010",
    "title": "Fan Advisory Board",
    "category": "Community Event",
    "description": "Select group of fans who provide regular feedback on team initiatives and represent the fan community.",
    "implementationSteps": [
      "Develop application process",
      "Define advisory board structure",
      "Create meeting schedule and format",
      "Establish feedback implementation process"
    ],
    "budgetRange": {
      "min": 1000,
      "max": 5000,
      "currency": "USD"
    },
    "difficultyLevel": 2,
    "timeToImplement": "4-8 weeks",
    "targetAudiences": ["die-hard-fans", "community leaders", "long-term supporters"],
    "potentialMetrics": ["application numbers", "implemented suggestions", "fan sentiment"],
    "exampleBrands": ["Seattle Sounders", "Green Bay Packers"]
  }
];

export default engagementIdeas;