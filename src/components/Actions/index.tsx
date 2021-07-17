import React, { useState } from 'react';
import OpenMemoButton from './OpenMemoButton';
import ViewCodeButton from './ViewCodeButton';
import Modal from './Modal';
import { Theme } from '../../App';

type Props = {
  theme: Theme;
};

const constructURL = (theme: Theme) => {
  return String.raw`data:text/html, <head><meta charset="UTF-8"><title>メモ</title><style> body {background-color:%23282C34; color:white; line-height: 2; padding: 20px; font-family: sans-serif; } </style><link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1UlEQVQ4T5XTS0gbQRgH8P83s6ti26Ai9SRUE4rP4EmlJyHxYhUptmlBvSp4EQ8efB0UFCkUacFDpMfiY8GL+CiaPg5tMRVKiHhQox68BJFUNAEfuxnZojGbjZrOZdjh+/9mhm+WkMLYL62xnTNpCoR8ATFi83/5cB2jFPII2B0KgV7FagV6rOueUf37XmA1p8piyctYS5flp4bNrpA7gZXH5YWc8zmZS6V5WRZwxhIM0WkAtkpqKpgkDQLiLHQSngufno8ByNVTMucwIyJoAAJ25w4BhXpAi0YRPDqGqmmxXc0I/Y4BAqA9uzMsgMzrRDJE4hy5jx5upsmSD5rabzjBdpmjlzEajr+oGREbmWfpz6pD3uOkXdgtdwwJooFbkENNU6tqD9Z3b30H49PzxUXff/558mstIxE5ikRaK/e8n+LXDVf4qHzO0aB6AbLZvv44TUQAzFr9npdJAUVReAgPlgioBbAFNdroGHnfQgx9cYF5q9/TkBRwKwtvAXQDWNYuxJuO5vq/emHA7uwjoFcAQc6oqcC34jMBEzMLTYKgAHiXjUiPy+W6aT4AvcX0bzIPck8vWsHENxLoanv9fDaVn8twAvfM4gDSMNn+om7nf8N6/SVJwrSForoMogAAAABJRU5ErkJggg=="></head><body contenteditable></body>`;
};

const Actions: React.VFC<Props> = ({ theme }) => {
  const [isOpen, setOpen] = useState(false);
  const URL = constructURL(theme);

  return (
    <div className='flex justify-end mt-10 gap-4'>
      <Modal
        isOpen={isOpen}
        closeModal={() => {
          setOpen(false);
        }}
        URL={URL}
      />
      <ViewCodeButton
        openModal={() => {
          setOpen(true);
        }}
      />
      <OpenMemoButton URL={URL} />
    </div>
  );
};

export default Actions;
