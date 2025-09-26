// src/app/models/post.model.ts
export enum PostState {
  Available = 'Available',
  Pending = 'Pending',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export interface Post {
  id: string;
  createdAt: string | Date;

  sourceCountry: string;
  sourceAmount: number;
  sourceCurrency: string;

  targetCountry: string;
  targetAmount: number;
  targetCurrency: string;

  rate: number; // e.g. 1 sourceCurrency = rate targetCurrency

  applicantsCount: number;
  state: PostState;
}
