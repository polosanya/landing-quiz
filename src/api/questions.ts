import { AdditionalQuestionsResponse, QuestionsEndpoint, QuestionsResponse } from "@helpers/types";
import { client } from "./fetchClient";


export const getQuestions = (endpoint: QuestionsEndpoint) => {
  return client.get<QuestionsResponse>(`questions${endpoint}.json`);
}

export const getAdditionalQuestions = () => {
  return client.get<AdditionalQuestionsResponse>(`questions${QuestionsEndpoint.Additional}.json`);
}
