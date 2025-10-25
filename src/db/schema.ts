import { pgTable, text, timestamp, uuid, integer } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const tasks = pgTable('tasks', {
	id: uuid('id').defaultRandom().primaryKey(),
	title: text('title').notNull(),
	description: text('description'),
	completed: text('completed').notNull().default('false'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Workout planning schema
export const workoutPlans = pgTable('workout_plans', {
	id: uuid('id').defaultRandom().primaryKey(),
	experienceId: text('experience_id').notNull(), // Whop experience id (string)
	title: text('title').notNull(),
	description: text('description'),
	createdByWhopUserId: text('created_by_whop_user_id').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const workoutPlanDays = pgTable('workout_plan_days', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	name: text('name').notNull(), // e.g. "Leg day"
	dayIndex: integer('day_index').notNull().default(0), // ordering within plan
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const workoutExercises = pgTable('workout_exercises', {
	id: uuid('id').defaultRandom().primaryKey(),
	dayId: uuid('day_id').notNull(),
	name: text('name').notNull(),
	reps: text('reps').notNull().default('0'),
	sets: integer('sets').notNull().default(0),
	currentWeight: integer('current_weight').notNull().default(0),
	maxWeight: integer('max_weight').notNull().default(0),
	weightUnit: text('weight_unit').notNull().default('lbs'),
	restTime: integer('rest_time').notNull().default(60), // in seconds
	notes: text('notes'), // coaching cues, form tips
	orderIndex: integer('order_index').notNull().default(0),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const workoutAssignments = pgTable('workout_assignments', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	whopUserId: text('whop_user_id').notNull(),
	assignedByWhopUserId: text('assigned_by_whop_user_id').notNull(),
	assignedAt: timestamp('assigned_at').defaultNow().notNull(),
	completedAt: timestamp('completed_at'), // When the entire plan was completed
})

// Workout session logs - tracks individual workout sessions
export const workoutSessions = pgTable('workout_sessions', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	dayId: uuid('day_id').notNull(),
	whopUserId: text('whop_user_id').notNull(),
	startedAt: timestamp('started_at').defaultNow().notNull(),
	completedAt: timestamp('completed_at'),
	notes: text('notes'),
})

// Exercise logs - tracks individual exercise performance in a session
export const exerciseLogs = pgTable('exercise_logs', {
	id: uuid('id').defaultRandom().primaryKey(),
	sessionId: uuid('session_id').notNull(),
	exerciseId: uuid('exercise_id').notNull(),
	sets: integer('sets').notNull().default(0),
	reps: integer('reps').notNull().default(0),
	weight: integer('weight').notNull().default(0),
	notes: text('notes'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Optional relations for convenience (not enforced FKs to keep flexibility with Supabase UUIDs)
export const workoutPlansRelations = relations(workoutPlans, ({ many }) => ({
	days: many(workoutPlanDays),
	assignments: many(workoutAssignments),
	sessions: many(workoutSessions),
}))

export const workoutPlanDaysRelations = relations(workoutPlanDays, ({ many }) => ({
	exercises: many(workoutExercises),
	sessions: many(workoutSessions),
}))

export const workoutSessionsRelations = relations(workoutSessions, ({ many }) => ({
	exerciseLogs: many(exerciseLogs),
}))

// Inbox messages per experience and user conversation
export const inboxMessages = pgTable('inbox_messages', {
	id: uuid('id').defaultRandom().primaryKey(),
	experienceId: text('experience_id').notNull(),
	// Non-admin participant user id to identify the conversation
	conversationUserId: text('conversation_user_id').notNull(),
	senderUserId: text('sender_user_id').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	readAt: timestamp('read_at'), // When the message was read by the recipient
})

// Nutrition planning schema
export const nutritionPlans = pgTable('nutrition_plans', {
	id: uuid('id').defaultRandom().primaryKey(),
	experienceId: text('experience_id').notNull(), // Whop experience id (string)
	title: text('title').notNull(),
	description: text('description'),
	createdByWhopUserId: text('created_by_whop_user_id').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const nutritionPlanDays = pgTable('nutrition_plan_days', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	name: text('name').notNull(), // e.g. "Monday", "Day 1"
	dayIndex: integer('day_index').notNull().default(0), // ordering within plan
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const nutritionMeals = pgTable('nutrition_meals', {
	id: uuid('id').defaultRandom().primaryKey(),
	dayId: uuid('day_id').notNull(),
	name: text('name').notNull(), // e.g. "Breakfast", "Lunch"
	description: text('description'),
	calories: integer('calories').notNull().default(0),
	protein: integer('protein').notNull().default(0), // in grams
	carbs: integer('carbs').notNull().default(0), // in grams
	fats: integer('fats').notNull().default(0), // in grams
	orderIndex: integer('order_index').notNull().default(0),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const nutritionAssignments = pgTable('nutrition_assignments', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	whopUserId: text('whop_user_id').notNull(),
	assignedByWhopUserId: text('assigned_by_whop_user_id').notNull(),
	assignedAt: timestamp('assigned_at').defaultNow().notNull(),
	completedAt: timestamp('completed_at'), // When the entire plan was completed
})

// Nutrition plan content - stores either text content or PDF file info
export const nutritionPlanContent = pgTable('nutrition_plan_content', {
	id: uuid('id').defaultRandom().primaryKey(),
	planId: uuid('plan_id').notNull(),
	contentType: text('content_type').notNull(), // 'pdf' or 'text'
	content: text('content'), // For text content (HTML)
	pdfUrl: text('pdf_url'), // For PDF file URL
	pdfFilename: text('pdf_filename'), // Original PDF filename
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Nutrition relations
export const nutritionPlansRelations = relations(nutritionPlans, ({ many, one }) => ({
	days: many(nutritionPlanDays),
	assignments: many(nutritionAssignments),
	content: one(nutritionPlanContent),
}))

export const nutritionPlanContentRelations = relations(nutritionPlanContent, ({ one }) => ({
	plan: one(nutritionPlans, {
		fields: [nutritionPlanContent.planId],
		references: [nutritionPlans.id],
	}),
}))

export const nutritionPlanDaysRelations = relations(nutritionPlanDays, ({ many }) => ({
	meals: many(nutritionMeals),
}))
