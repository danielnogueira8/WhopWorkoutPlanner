-- Add workout completion tracking to existing workout_assignments table
ALTER TABLE workout_assignments 
ADD COLUMN completed_at TIMESTAMP;

-- Create workout_sessions table for tracking individual workout sessions
CREATE TABLE workout_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    plan_id UUID NOT NULL,
    day_id UUID NOT NULL,
    whop_user_id TEXT NOT NULL,
    started_at TIMESTAMP DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMP,
    notes TEXT
);

-- Create exercise_logs table for tracking individual exercise performance
CREATE TABLE exercise_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID NOT NULL,
    exercise_id UUID NOT NULL,
    sets INTEGER NOT NULL DEFAULT 0,
    reps INTEGER NOT NULL DEFAULT 0,
    weight INTEGER NOT NULL DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Add indexes for better performance
CREATE INDEX idx_workout_sessions_user_id ON workout_sessions(whop_user_id);
CREATE INDEX idx_workout_sessions_plan_id ON workout_sessions(plan_id);
CREATE INDEX idx_workout_sessions_day_id ON workout_sessions(day_id);
CREATE INDEX idx_exercise_logs_session_id ON exercise_logs(session_id);
CREATE INDEX idx_exercise_logs_exercise_id ON exercise_logs(exercise_id);

