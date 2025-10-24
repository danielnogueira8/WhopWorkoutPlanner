-- Add rest time and notes columns to workout_exercises table
ALTER TABLE workout_exercises 
ADD COLUMN rest_time INTEGER NOT NULL DEFAULT 60;

ALTER TABLE workout_exercises 
ADD COLUMN notes TEXT;
