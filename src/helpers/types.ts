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
  questions: Question[],
}

export type AdditionalQuestionsResponse = {
  additionalQuestions: AdditionalQuestion[]
}

export interface Question {
  id: number,
  slug: string,
  text: string, 
  options: QuestionOption[],
}

export interface QuestionOption {
  id: number,
  slug: string,
  text: string,
  emoji: string,
}

export interface AdditionalQuestion {
  id: number,
  slug: string,
  text: string,
  question: string,
  options: AdditionalQuestionOption[],
}

export interface AdditionalQuestionOption {
  id: number,
  slug: string,
  text: string,
}

export enum RoutesType {
  Welcome = '/',
  Skills = '/skills',
  Email = '/email',
  Loading = '/loading',
  Default = '*',
}

export interface AnswersData {
  [questionSlug: string]: string[],
}
