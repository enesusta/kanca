import {
  completeNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import axios, { AxiosError } from "axios";

async function get<Type>(url: string): Promise<[Type, AxiosError]> {
  try {
    startNavigationProgress();
    const { data } = await axios.get<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function post<Type>(
  url: string,
  body?: any
): Promise<[Type, AxiosError]> {
  startNavigationProgress();
  try {
    const { data } = body
      ? await axios.post<Type>(url, body)
      : await axios.post<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function put<Type>(url: string, body?: any): Promise<[Type, AxiosError]> {
  try {
    startNavigationProgress();
    const { data } = body
      ? await axios.put<Type>(url, body)
      : await axios.put<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function patch<Type>(
  url: string,
  body?: any
): Promise<[Type, AxiosError]> {
  startNavigationProgress();
  try {
    const { data } = body
      ? await axios.put<Type>(url, body)
      : await axios.put<Type>(url);

    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

export { get, post, put, patch };
