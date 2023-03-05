import {
  useHttpGet,
  useHttpPatch,
  useHttpPost,
  useHttpPut,
  HttpInterface,
} from "./http";

import useDebouncedCallback, { DEBOUNCE_TYPE } from "./useDebouncedCallback";
import useWindowDimensions from "./useWindowDimensions";
import useBeforeUnload from "./useBeforeUnload";
import useDocumentTitle from "./useDocumentTitle";

export {
  useDebouncedCallback,
  useDocumentTitle,
  useHttpGet,
  useHttpPatch,
  useHttpPost,
  useHttpPut,
  HttpInterface,
  DEBOUNCE_TYPE,
  useWindowDimensions,
  useBeforeUnload,
};
