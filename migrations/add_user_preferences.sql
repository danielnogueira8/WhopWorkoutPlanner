CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  whop_user_id TEXT NOT NULL UNIQUE,
  experience_id TEXT NOT NULL,
  onboarding_completed BOOLEAN DEFAULT FALSE NOT NULL,
  onboarding_completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_user_preferences_whop_user_id ON user_preferences(whop_user_id);
CREATE INDEX idx_user_preferences_experience_id ON user_preferences(experience_id);

