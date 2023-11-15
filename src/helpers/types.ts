export enum MaritalStatus {
  Single = 'Single',
  Relation = 'In a relationship',
  Unknown = '',
}

export interface Answer {
  id: number,
  slug: string,
  text: string,
  emoji: string,
}

export interface Question {
  id: number,
  slug: string,
  text: string, 
  options: Answer[],
}

export interface Progress {
  id: number,
  slug: string,
  text: string,
  question: string,
  options: ProgressOption[],
}

export interface ProgressOption {
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
  // [questionSlug: string]: Answer['slug'][];
  [questionSlug: string]: string[],
}

// export interface Statistics {
//   email: string,
//   maritalStatus: MaritalStatus,
//   answers: AnswersData[]
// }
