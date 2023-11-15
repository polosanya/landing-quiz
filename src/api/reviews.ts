import { ReviewsResponse } from "@helpers/types";
import { client } from "./fetchClient";

export const getReviews = () => {
  return client.get<ReviewsResponse>(`reviews.json`);
}
