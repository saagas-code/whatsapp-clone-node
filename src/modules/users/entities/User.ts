import { randomUUID } from 'crypto';


export class User {
  id?: string;
  name: string
  number: string
  password: string;
  avatar: string;
  created_at?: Date
  updated_at?: Date | null
  
  constructor() {
    if(!this.id) {
      this.id = randomUUID()
    }
    if(!this.created_at) {
      this.created_at = new Date()
    }
    if(!this.avatar) {
      this.avatar = 'default'
    }
  }
}

