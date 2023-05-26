import axios, {AxiosError} from 'axios';
import {ApiError} from "../models/ApiError";

interface ApiResponse<T> {
  data?: T;
  status?: number;
  error?: {
    message: string;
    status?: number;
    data?: any;
    headers?: any;
  };
}

axios.defaults.baseURL = 'https://recruitment01.vercel.app/api/';

export async function get<T>(url: string, config = {}): Promise<ApiResponse<T>> {
  try {
    return await axios.get<T>(url, config);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<any>;
      if (axiosError.response) {
        const transformedError = {
            message: axiosError.response.data.message,
            status: axiosError.response.status,
            data: axiosError.response.data,
            headers: axiosError.response.headers,
        };
        throw new ApiError(transformedError);
      } else if (axiosError.request) {
        const transformedError = {
            message: 'No response received',
        };
        throw new ApiError(transformedError);
      } else {
        const transformedError = {
            message: axiosError.message,
        };
        throw new ApiError(transformedError);
      }
    } else {
      // Non-axios error
      const transformedError = {
          message: error.message,
      };
      throw new ApiError(transformedError);
    }
  }
}