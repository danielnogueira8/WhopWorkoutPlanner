'use client'

import { useState } from 'react'
import { Dialog, Button } from 'frosted-ui'
import { 
  Sparkles, 
  Dumbbell, 
  Apple, 
  Users, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'

interface OnboardingModalProps {
  open: boolean
  onClose: () => void
  onComplete: () => void
}

const onboardingSteps = [
  {
    icon: Sparkles,
    title: 'Welcome to Your Fitness Coaching Dashboard!',
    description: 'This is your central hub for managing clients, workout plans, and nutrition programs. Let\'s take a quick tour of everything you can do here.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: Dumbbell,
    title: 'Workout Plans - Build Custom Programs',
    description: 'Navigate to "Workout Plans" to build custom workout programs with multiple training days. Add exercises with sets, reps, weights, and rest periods. Use the builder to organize days and assign plans to clients.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: Apple,
    title: 'Nutrition Plans - Design Meal Programs',
    description: 'Go to "Nutrition Plans" to create detailed nutrition plans or upload PDF meal guides. Organize meals by day with macro tracking. Assign plans to keep clients on track with their nutritional goals.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: Users,
    title: 'Clients - Manage Your Athletes',
    description: 'Visit the "Clients" page to view all your clients in one place. Quickly assign workout and nutrition plans. Track their progress and see who needs attention. Bulk assign plans to multiple clients at once.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: MessageSquare,
    title: 'Inbox - Stay Connected',
    description: 'Use the "Inbox" to stay connected with your clients through direct messaging. Send instructions, answer questions, and provide support. Get notified of new messages in real-time.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
]

export function OnboardingModal({ open, onClose, onComplete }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  const currentStepData = onboardingSteps[currentStep]
  const Icon = currentStepData.icon
  const isLastStep = currentStep === onboardingSteps.length - 1

  return (
    <Dialog.Root open={open} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Content className="max-w-lg">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
              {currentStepData.title}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="py-6">
          {/* Icon */}
          <div className={`w-16 h-16 ${currentStepData.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <Icon className={`w-8 h-8 ${currentStepData.color}`} />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Progress Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-emerald-600'
                    : index < currentStep
                    ? 'bg-emerald-300'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            Step {currentStep + 1} of {onboardingSteps.length}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-2">
            {currentStep > 0 && (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {!isLastStep && (
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-gray-600 dark:text-gray-400 transition-colors duration-200"
              >
                Skip
              </Button>
            )}
            <Button
              variant="solid"
              onClick={handleNext}
              className="!bg-accent hover:!bg-accent/90 !text-white transition-colors duration-200"
            >
              {isLastStep ? (
                'Get Started'
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

