export type Email = `${string}@${string}.${string}`;

export interface LoginFormState {
  title?: string;
  message?: string;
  error: boolean;
}
