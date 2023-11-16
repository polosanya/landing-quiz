export enum MaritalStatus {
  Single = 'Single',
  Relation = 'In a relationship',
  Unknown = '',
}

export enum QuestionsEndpoint {
  Single = 'Single',
  Relation = 'Relationship',
  Additional = 'Additional',
} 

export type QuestionsResponse = {
  questions: IQuestion[],
}

export type AdditionalQuestionsResponse = {
  additionalQuestions: IAdditionalQuestion[]
}

export type ReviewsResponse = {
  reviews: IReview[];
}

export interface IQuestion {
  id: number,
  slug: string,
  text: string, 
  options: IQuestionOption[],
}

export interface IQuestionOption {
  id: number,
  slug: string,
  text: string,
  emoji: string,
}

export interface IAdditionalQuestion {
  id: number,
  slug: string,
  text: string,
  question: string,
  options: IAdditionalQuestionOption[],
}

export interface IAdditionalQuestionOption {
  id: number,
  slug: string,
  text: string,
}

export interface IReview {
  id: number,
  author: string,
  text: string,
  rating: number,
}

export enum RoutesType {
  Welcome = '/',
  Skills = '/skills',
  Email = '/email',
  Loading = '/loading',
  Default = '*',
}

export interface IAnswersData {
  [questionSlug: string]: string[],
}
