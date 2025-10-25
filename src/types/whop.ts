// Whop API types
export interface WhopAccess {
  accessLevel: 'admin' | 'member' | 'no_access'
}

export interface WhopUser {
  id: string
  name: string
  username: string
  email?: string
}

export interface WhopExperience {
  id: string
  name: string
  company: {
    id: string
    title: string
  }
}
