import jsPDF from 'jspdf'
import { WorkoutPlanDetail, WorkoutDay, WorkoutExercise } from '~/components/workouts/queries'

export function generateWorkoutPlanPDF(plan: WorkoutPlanDetail): void {
  const doc = new jsPDF()
  
  // Set up colors
  const primaryColor = '#10b981' // emerald-500
  const textColor = '#374151' // gray-700
  const lightGray = '#f3f4f6' // gray-100
  
  // Header
  doc.setFontSize(24)
  doc.setTextColor(primaryColor)
  doc.text(plan.title, 20, 30)
  
  // Description if available
  if (plan.description) {
    doc.setFontSize(12)
    doc.setTextColor(textColor)
    doc.text(plan.description, 20, 45)
  }
  
  // Plan info
  doc.setFontSize(10)
  doc.setTextColor('#6b7280') // gray-500
  const totalDays = plan.days.length
  const totalExercises = plan.days.reduce((total, day) => total + (day.exercises?.length || 0), 0)
  doc.text(`Total Days: ${totalDays} | Total Exercises: ${totalExercises}`, 20, 60)
  
  let yPosition = 80
  
  // Generate content for each day
  plan.days.forEach((day, dayIndex) => {
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    // Day header
    doc.setFontSize(16)
    doc.setTextColor(primaryColor)
    doc.text(`Day ${dayIndex + 1}: ${day.name}`, 20, yPosition)
    yPosition += 15
    
    // Day exercises
    if (day.exercises && day.exercises.length > 0) {
      day.exercises.forEach((exercise, exerciseIndex) => {
        // Check if we need a new page
        if (yPosition > 260) {
          doc.addPage()
          yPosition = 20
        }
        
        // Exercise name
        doc.setFontSize(12)
        doc.setTextColor(textColor)
        doc.text(`${exerciseIndex + 1}. ${exercise.name}`, 30, yPosition)
        yPosition += 8
        
        // Exercise details
        doc.setFontSize(10)
        doc.setTextColor('#6b7280') // gray-500
        
        // Sets and Reps
        doc.text(`Sets: ${exercise.sets}`, 40, yPosition)
        doc.text(`Reps: ${exercise.reps}`, 80, yPosition)
        yPosition += 6
        
        // Rest time
        const restMinutes = Math.floor(exercise.restTime / 60)
        const restSeconds = exercise.restTime % 60
        const restTimeText = restMinutes > 0 
          ? `${restMinutes}m ${restSeconds > 0 ? `${restSeconds}s` : ''}`.trim()
          : `${restSeconds}s`
        doc.text(`Rest: ${restTimeText}`, 40, yPosition)
        yPosition += 6
        
        // Notes if available
        if (exercise.notes && exercise.notes.trim()) {
          doc.text(`Notes: ${exercise.notes}`, 40, yPosition)
          yPosition += 6
        }
        
        yPosition += 8 // Space between exercises
      })
    } else {
      // No exercises message
      doc.setFontSize(10)
      doc.setTextColor('#9ca3af') // gray-400
      doc.text('No exercises added yet', 40, yPosition)
      yPosition += 15
    }
    
    yPosition += 10 // Space between days
  })
  
  // Footer
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor('#9ca3af') // gray-400
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, 290)
    doc.text(`Page ${i} of ${pageCount}`, 170, 290)
  }
  
  // Download the PDF
  doc.save(`${plan.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_workout_plan.pdf`)
}

export function generateWorkoutPlanPDFFromDays(planTitle: string, days: WorkoutDay[]): void {
  // Create a mock WorkoutPlanDetail object
  const mockPlan: WorkoutPlanDetail = {
    id: '',
    title: planTitle,
    description: null,
    createdByWhopUserId: '',
    createdAt: '',
    updatedAt: '',
    days: days
  }
  
  generateWorkoutPlanPDF(mockPlan)
}
