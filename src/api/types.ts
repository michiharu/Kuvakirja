export interface ErrorResponse {
  code: number;
  message: string;
}

/* Login */
export const loginURL = '/api/v1/login';
// POST
export interface LoginPostRequest {
  id: string;
  password: string;
}

export interface LoginPostResponse {}
export interface LoginPostErrResponse {
  error: ErrorResponse
}
// DELETE -> ステータスコード200でログアウト