import {
  HttpInterface,
  useHttpGet,
  useHttpPatch,
  useHttpPost,
  useHttpPut,
} from "./http";

import useAutoAnimate from "./useAutoAnimate";
import useBeforeUnload from "./useBeforeUnload";
import useDebouncedCallback, { DEBOUNCE_TYPE } from "./useDebouncedCallback";
import useDocumentTitle from "./useDocumentTitle";
import useHttpParam from "./useHttpParam";
import useHttpQuery from "./useHttpQuery";
import useInfiniteMemo from "./useInfiniteMemo";
import useSleep from "./useSleep";
import useWindowDimensions from "./useWindowDimensions";
import { get, post, put, patch, head, del } from './http/HttpService'

export {
  DEBOUNCE_TYPE, HttpInterface, useAutoAnimate, useBeforeUnload, useDebouncedCallback,
  useDocumentTitle,
  useHttpGet, useHttpParam, useHttpPatch,
  useHttpPost,
  useHttpPut, useHttpQuery,
  useInfiniteMemo, useSleep, useWindowDimensions,
  get, post, put, patch, head, del
};

