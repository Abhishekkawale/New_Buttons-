// src/app/models/response-wrapper.model.ts

export interface ResponseWrapper<T> {
  data: T;
  error?: string;
  // You can add more properties as needed
}
