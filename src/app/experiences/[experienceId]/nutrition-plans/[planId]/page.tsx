'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { Home, ChevronRight, Download, FileText, File, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { use, useState } from 'react'
import { useWhop } from '~/components/whop-context'
import { nutritionPlanDetailQuery, nutritionContentQuery } from '~/components/nutrition/queries'

interface NutritionPlanViewProps {
  params: Promise<{ experienceId: string; planId: string }>
}

export default function NutritionPlanViewPage({ params }: NutritionPlanViewProps) {
  const { experienceId, planId } = use(params)
  const { access } = useWhop()
  const [activeTab, setActiveTab] = useState<'text' | 'pdf'>('text')
  
  const isAdmin = (access as any).accessLevel === 'admin'

  // Queries
  const { data: plan, isLoading: planLoading } = useQuery(nutritionPlanDetailQuery(experienceId, planId))
  const { data: content, isLoading: contentLoading } = useQuery(nutritionContentQuery(experienceId, planId))

  if (planLoading || contentLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!plan) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Plan Not Found</h1>
          <p className="text-gray-600 mb-6">The nutrition plan you're looking for doesn't exist.</p>
          <Link href={`/experiences/${experienceId}/nutrition`}>
            <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">
              Back to Nutrition
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            href={`/experiences/${experienceId}`}
            className="flex items-center gap-1 text-gray-600 hover:text-accent transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link 
            href={`/experiences/${experienceId}/nutrition`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            Nutrition
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">{plan.title}</span>
        </div>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h1>
        {plan.description && (
          <p className="text-gray-600">{plan.description}</p>
        )}
      </div>

      {/* Content Area */}
      <Card className="p-6">
        {content?.contentType === 'pdf' && content.pdfUrl ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Nutrition Plan PDF</h3>
                <div className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <File className="w-4 h-4" />
                  PDF Ready
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={content.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <File className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">PDF Nutrition Plan Available</h4>
                  <p className="text-green-700 dark:text-green-300 mb-3">
                    <span className="font-medium">File:</span> {content.pdfFilename}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-4">
                    Your nutrition plan is ready to view and download.
                  </p>
                  <a
                    href={content.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : content?.contentType === 'text' && content.content ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Nutrition Plan Content</h3>
            </div>
            
            <div 
              className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Content Available</h3>
            <p className="text-gray-600 mb-4">
              This nutrition plan doesn't have any content yet.
            </p>
            {isAdmin && (
              <Link href={`/experiences/${experienceId}/nutrition-plans/${planId}/builder`}>
                <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">
                  Add Content
                </Button>
              </Link>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}
