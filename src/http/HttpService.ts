import { completeNavigationProgress, startNavigationProgress } from '@mantine/nprogress';
import axios, { AxiosError } from 'axios';
import { sleep } from '../concurrency/thread.ts';

async function get<Type>(url: string, throttle?: number): Promise<[Type, AxiosError]> {
  try {
    console.log(completeNavigationProgress, startNavigationProgress)
    startNavigationProgress();
    throttle && (await sleep(throttle));
    const { data } = await axios.get<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function post<Type>(url: string, body?: any): Promise<[Type, AxiosError]> {
  startNavigationProgress();
  try {
    const { data } = body ? await axios.post<Type>(url, body) : await axios.post<Type>(url);
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
    const { data } = body ? await axios.put<Type>(url, body) : await axios.put<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function head<Type>(url: string): Promise<[Type, AxiosError]> {
  try {
    startNavigationProgress();
    const { data } = await axios.head<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function patch<Type>(url: string, body?: any): Promise<[Type, AxiosError]> {
  startNavigationProgress();
  try {
    const { data } = body ? await axios.patch<Type>(url, body) : await axios.patch<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

async function del<Type>(url: string, body?: any): Promise<[Type, AxiosError]> {
  startNavigationProgress();
  try {
    const { data } = body ? await axios.delete<Type>(url, body) : await axios.delete<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    completeNavigationProgress();
    return Promise.resolve([undefined, e]);
  }
}

export { get, post, put, patch, head, del };
