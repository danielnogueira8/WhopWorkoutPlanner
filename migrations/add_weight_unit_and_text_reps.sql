-- Add weight unit column to workout_exercises table
ALTER TABLE workout_exercises 
ADD COLUMN weight_unit TEXT NOT NULL DEFAULT 'lbs';

-- Change reps column from integer to text to allow free-form input
ALTER TABLE workout_exercises 
ALTER COLUMN reps TYPE TEXT USING reps::TEXT;
