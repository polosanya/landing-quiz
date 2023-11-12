export enum MaritalStatus {
  Single = 'Single',
  Relation = 'In a relationship',
  Unknown = '',
}

export interface Answer {
  id: number,
  text: string,
  emoji: string,
}

export interface Question {
  id: number,
  text: string, 
  options: Answer[],
}