CREATE TABLE nutrition_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_by_whop_user_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE nutrition_plan_days (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL,
  name TEXT NOT NULL,
  day_index INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE nutrition_meals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  calories INTEGER DEFAULT 0 NOT NULL,
  protein INTEGER DEFAULT 0 NOT NULL,
  carbs INTEGER DEFAULT 0 NOT NULL,
  fats INTEGER DEFAULT 0 NOT NULL,
  order_index INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE nutrition_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL,
  whop_user_id TEXT NOT NULL,
  assigned_by_whop_user_id TEXT NOT NULL,
  assigned_at TIMESTAMP DEFAULT NOW() NOT NULL,
  completed_at TIMESTAMP
);
