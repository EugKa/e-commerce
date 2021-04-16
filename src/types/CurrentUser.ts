export interface ICurrentUser {
    craetedAt: {
      nanoseconds:number;
      seconds:number;
    }
    displayName: string;
    email: string;
    id: string;
  }