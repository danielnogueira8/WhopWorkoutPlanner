'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card, TextField } from 'frosted-ui'
import { useState, useEffect, useRef } from 'react'
import { Send, Search, MessageSquare, Clock, Check, CheckCheck, User, Users } from 'lucide-react'
import { useWhop } from '~/components/whop-context'
import { inboxQuery, sendMessageMutation, usersQuery } from '~/components/workouts/queries'

export default function InboxPage() {
  const { access, experience, user } = useWhop()
  const isAdmin = (access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'
  const [selectedUserId, setSelectedUserId] = useState<string>('')
  const [message, setMessage] = useState('')
  const [search, setSearch] = useState('')
  const [messageSearch, setMessageSearch] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [visibleCount, setVisibleCount] = useState(10)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const clientListRef = useRef<HTMLDivElement>(null)
  const qc = useQueryClient()

  const { data: users } = useQuery({ ...usersQuery(experience.id, isAdmin ? search : undefined), enabled: isAdmin })
  const { data: messages, isLoading: isLoadingMessages } = useQuery({
    ...inboxQuery(experience.id, isAdmin ? (selectedUserId || undefined) : undefined),
    refetchInterval: 5000, // Poll every 5 seconds for real-time updates
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Auto-scroll to bottom when component mounts
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const sendMessage = useMutation({
    mutationFn: async () => sendMessageMutation(experience.id).mutationFn({ content: message, userId: isAdmin ? (selectedUserId || undefined) : undefined }),
    onSuccess: () => {
      setMessage('')
      qc.invalidateQueries({ queryKey: ['inbox', experience.id] })
      setIsTyping(false)
    },
  })

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !sendMessage.isPending) {
        sendMessage.mutate()
      }
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 1) {
      return 'Just now'
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else if (diffInHours < 168) { // 7 days
      return `${Math.floor(diffInHours / 24)}d ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  const getMessageStatus = (message: any) => {
    // Simple status logic - in a real app, you'd track read receipts
    const isOwnMessage = message.senderUserId === user.id
    if (!isOwnMessage) return null
    
    // Simulate message status based on time
    const messageTime = new Date(message.createdAt).getTime()
    const now = Date.now()
    const timeDiff = now - messageTime
    
    if (timeDiff < 10000) { // 10 seconds
      return 'sending'
    } else if (timeDiff < 60000) { // 1 minute
      return 'sent'
    } else {
      return 'delivered'
    }
  }

  const selectedUser = users?.find(u => u.id === selectedUserId)
  
  // Filter messages based on search
  const filteredMessages = messages?.filter(m => 
    !messageSearch || m.content.toLowerCase().includes(messageSearch.toLowerCase())
  ) ?? []

  // Handle client list scrolling for pagination
  const handleClientScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    const { scrollTop, scrollHeight, clientHeight } = element
    const isNearBottom = scrollHeight - scrollTop <= clientHeight + 100
    
    if (isNearBottom && visibleCount < (users?.length || 0)) {
      setVisibleCount(prev => prev + 5)
    }
  }

  // Reset visible count when search changes
  useEffect(() => {
    setVisibleCount(10)
  }, [search])

  // Get visible users for pagination
  const visibleUsers = users?.slice(0, visibleCount) || []

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-accent" />
          Inbox
        </h1>
        <p className="text-sm opacity-70 mt-1">Chat with your trainer or clients</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ height: 'calc(100vh - 200px)' }}>
        {isAdmin && (
            <Card>
              <div className="p-3 md:p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="font-medium text-sm">Clients</span>
                </div>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-accent" />
                  <TextField.Input 
                    placeholder="Search clients..." 
                    value={search} 
                    onChange={(e: any) => setSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div 
                  ref={clientListRef}
                  className="overflow-y-scroll space-y-1 border border-gray-200 dark:border-gray-700 rounded-lg p-2"
                  onScroll={handleClientScroll}
                  style={{ 
                    scrollbarWidth: 'thin',
                    height: 'calc(100vh - 300px)'
                  }}
                >
                {users?.length === 0 ? (
                  <div className="text-center py-8 text-sm opacity-70">
                    <User className="w-8 h-8 mx-auto mb-2 text-accent" />
                    No clients found
                  </div>
                ) : (
                  <>
                    {visibleUsers.map((u) => (
                      <div 
                        key={u.id} 
                        className={`px-3 py-3 rounded-lg cursor-pointer transition-colors ${
                          selectedUserId === u.id 
                            ? 'bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent'
                        }`} 
                        onClick={() => setSelectedUserId(u.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{u.name || u.username}</div>
                            <div className="text-xs opacity-70 truncate">@{u.username}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {visibleCount < (users?.length || 0) && (
                      <div className="text-center py-4 text-xs opacity-60">
                        Scroll down to load more clients...
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </Card>
        )}

          <Card className="md:col-span-2">
            <div className="p-3 md:p-4 h-full flex flex-col min-h-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                {selectedUser ? (
                  <>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">{selectedUser.name || selectedUser.username}</div>
                      <div className="text-xs opacity-70">@{selectedUser.username}</div>
                    </div>
                  </>
                ) : (
                  <div className="text-sm opacity-70">
                    {isAdmin ? 'Select a client to start chatting' : 'Chat with your trainer'}
                  </div>
                )}
              </div>
              
              {/* Message Search */}
              {selectedUser && (
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-accent" />
                  <TextField.Input 
                    placeholder="Search messages..." 
                    value={messageSearch} 
                    onChange={(e: any) => setMessageSearch(e.target.value)}
                    className="pl-8 w-48 text-sm"
                    size="sm"
                  />
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto space-y-3 p-2">
              {isLoadingMessages ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-sm opacity-70">Loading messages...</div>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 text-accent" />
                    <div className="text-sm opacity-70">
                      {messageSearch ? 'No messages found' : 'No messages yet'}
                    </div>
                    <div className="text-xs opacity-50 mt-1">
                      {messageSearch ? 'Try a different search term' : 'Start the conversation!'}
                    </div>
                  </div>
                </div>
              ) : (
                filteredMessages.map((m) => {
                  const isOwnMessage = m.senderUserId === user.id
                  const status = getMessageStatus(m)
                  
                  return (
                    <div key={m.id} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] ${isOwnMessage ? 'order-2' : 'order-1'}`}>
                        <div className={`px-4 py-2 rounded-2xl ${
                          isOwnMessage 
                            ? 'bg-blue-500 text-white rounded-br-md' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md'
                        }`}>
                          <div className="text-sm">{m.content}</div>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 text-xs opacity-70 ${
                          isOwnMessage ? 'justify-end' : 'justify-start'
                        }`}>
                          <span>{formatTime(m.createdAt)}</span>
                          {isOwnMessage && status && (
                            <div className="ml-1">
                              {status === 'sending' && <Clock className="w-3 h-3 text-accent" />}
                              {status === 'sent' && <Check className="w-3 h-3 text-accent" />}
                              {status === 'delivered' && <CheckCheck className="w-3 h-3 text-accent" />}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <TextField.Input 
                  placeholder={isAdmin && !selectedUserId ? "Select a client to message..." : "Type a message..."}
                  value={message} 
                  onChange={(e: any) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isAdmin && !selectedUserId}
                  className="flex-1"
                />
                <Button 
                  disabled={!message.trim() || (isAdmin && !selectedUserId) || sendMessage.isPending} 
                  onClick={() => sendMessage.mutate()}
                  variant="soft"
                  className="rounded-lg px-4 h-10 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-accent" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}


