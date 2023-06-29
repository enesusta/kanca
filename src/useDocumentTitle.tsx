import { useEffect, useState } from "react";

const useDocumentTitle = (param: string) => {
  const app = process.env.REACT_APP_NAME;
  const initialTitle = app ? `${param} | ${app}` : param;
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    if (param) document.title = title;
  }, [param]);

  return [title, setTitle];
};

export default useDocumentTitle;