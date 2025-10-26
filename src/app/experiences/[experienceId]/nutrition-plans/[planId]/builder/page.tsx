'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card } from 'frosted-ui'
import { useState, use, useRef } from 'react'
import { Home, ChevronRight, Upload, Download, Trash2, File, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { 
  nutritionPlansQuery,
  nutritionPlanDetailQuery,
  nutritionContentQuery,
  uploadNutritionPDFMutation,
  deleteNutritionPDFMutation
} from '~/components/nutrition/queries'

interface NutritionBuilderProps {
  params: Promise<{ experienceId: string; planId: string }>
}

export default function NutritionBuilderPage({ params }: NutritionBuilderProps) {
  const { experienceId, planId } = use(params)
  const { access } = useWhop()
  const queryClient = useQueryClient()
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const isAdmin = (access as any).accessLevel === 'admin'
  
  // Redirect if not admin
  if (!isAdmin) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">You need admin access to edit nutrition plans.</p>
          <Link href={`/experiences/${experienceId}/nutrition`}>
            <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">
              Back to Nutrition
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Queries
  const { data: plan, isLoading: planLoading } = useQuery(nutritionPlanDetailQuery(experienceId, planId))
  const { data: content, isLoading: contentLoading } = useQuery(nutritionContentQuery(experienceId, planId))
  
  // Debug logging
  console.log('🔍 Nutrition Builder Debug:', {
    experienceId,
    planId,
    plan,
    content,
    contentLoading,
    planLoading
  })
  
  // State
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  // Mutations
  const uploadPDF = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append('file', file)
      
      const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content/upload`, {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error('Failed to upload PDF')
      return res.json()
    },
    onSuccess: (data) => {
      console.log('📤 Upload success:', data)
      queryClient.invalidateQueries({ queryKey: ['nutrition-content', experienceId, planId] })
      setIsUploading(false)
    },
    onError: (error) => {
      console.error('📤 Upload error:', error)
      setIsUploading(false)
    }
  })

  const deletePDF = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content/upload`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete PDF')
      return res.json()
    },
    onSuccess: (data) => {
      console.log('🗑️ Delete success:', data)
      queryClient.invalidateQueries({ queryKey: ['nutrition-content', experienceId, planId] })
    },
    onError: (error) => {
      console.error('🗑️ Delete error:', error)
    }
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (file.type !== 'application/pdf') {
      setUploadError('Please select a PDF file')
      return
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size must be less than 10MB')
      return
    }

    setIsUploading(true)
    setUploadError(null)
    uploadPDF.mutate(file)
  }

  const handleDeletePDF = () => {
    if (confirm('Are you sure you want to delete the PDF? This action cannot be undone.')) {
      deletePDF.mutate()
    }
  }

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
          <Link href={`/experiences/${experienceId}/nutrition-plans`}>
            <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">
              Back to Nutrition Plans
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
            href={`/experiences/${experienceId}/nutrition-plans`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            Nutrition Plans
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link 
            href={`/experiences/${experienceId}/nutrition-plans/${planId}`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            {plan.title}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Manage</span>
        </div>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{plan?.title || 'Nutrition Plan'}</h1>
        <p className="text-gray-600">Manage your nutrition plan content</p>
      </div>

      {/* Content Area */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">PDF Upload</h3>
            <Button 
              variant="soft" 
              onClick={() => {
                console.log('🔄 Manual refresh triggered')
                queryClient.invalidateQueries({ queryKey: ['nutrition-content', experienceId, planId] })
              }}
              className="text-sm"
            >
              Refresh
            </Button>
            {content?.contentType === 'pdf' && content.pdfUrl && (
              <div className="flex items-center gap-2">
                <a
                  href={content.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <Button
                  onClick={handleDeletePDF}
                  variant="soft"
                  className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {content?.contentType === 'pdf' && content.pdfUrl ? (
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">PDF Successfully Uploaded</h4>
                    <File className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-green-700 dark:text-green-300 mb-3">
                    <span className="font-medium">File:</span> {content.pdfFilename}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-4">
                    Your nutrition plan PDF is ready for your clients to view and download.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={content.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      View PDF
                    </a>
                    <Button
                      onClick={handleDeletePDF}
                      variant="soft"
                      className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isUploading 
                ? 'border-emerald-300 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950' 
                : uploadError 
                  ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-950'
                  : 'border-gray-300 dark:border-gray-600 hover:border-accent dark:hover:border-accent'
            }`}>
              {isUploading ? (
                <>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                  </div>
                  <h4 className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-2">Uploading PDF...</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-4">Please wait while your file is being uploaded</p>
                  <div className="w-full bg-emerald-200 dark:bg-emerald-800 rounded-full h-2 mb-4">
                    <div className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </>
              ) : uploadError ? (
                <>
                  <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-red-800 dark:text-red-200 mb-2">Upload Failed</h4>
                  <p className="text-red-600 dark:text-red-400 mb-4">{uploadError}</p>
                  <Button
                    onClick={() => {
                      setUploadError(null)
                      fileInputRef.current?.click()
                    }}
                    variant="solid"
                    className="!bg-accent hover:!bg-accent/90 !text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Upload PDF</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Drag and drop your PDF file here, or click to browse</p>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    variant="solid"
                    className="!bg-accent hover:!bg-accent/90 !text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose PDF File
                  </Button>
                  
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>Maximum file size: 10MB</p>
                    <p>Supported format: PDF only</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}