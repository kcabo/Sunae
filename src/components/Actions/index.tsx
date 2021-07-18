import React, { useState } from 'react';
import CopyCodeButton from './CopyCodeButton';
import ViewCodeButton from './ViewCodeButton';
import Modal from './Modal';
import { Theme } from '../../App';

type Props = {
  theme: Theme;
};

const constructURL = (theme: Theme) => {
  const backgroundColor = theme.backgroundColor.replace('#', '');
  const textColor = theme.color.replace('#', '');
  const paddingSize = theme.padding;
  const lineHeight = theme.lineHeight;
  const style = `<style>body{background-color:%23${backgroundColor};color:${textColor};line-height:${lineHeight};padding:${paddingSize}px;font-family:sans-serif;}</style>`;
  return `data:text/html,<head><meta charset="UTF-8"><title>メモ</title>${style}<link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0JFMTkzMSIgZD0iTTIzLjcgMjMuM2wtMTEtMTEgOS40LTcuOCA5LjQgOS40eiIvPjxwYXRoIGZpbGw9IiNERDJFNDQiIGQ9Ik0zNC42IDE0YTQuNCA0LjQgMCAwMS02LjMgMGwtNi4yLTYuM2E0LjQgNC40IDAgMTE2LjItNi4zbDYuMyA2LjNhNC40IDQuNCAwIDAxMCA2LjJ6Ii8+PHBhdGggZmlsbD0iIzk5QUFCNSIgZD0iTTE0IDE3LjhTLS42IDM1IC4yIDM1LjhjLjguOCAxOC0xMy44IDE4LTEzLjhMMTQgMTcuOHoiLz48cGF0aCBmaWxsPSIjREQyRTQ0IiBkPSJNMjUuMiAyOGE0LjQgNC40IDAgMDEtNi4yIDBMOCAxN2E0LjQgNC40IDAgMDE2LjMtNi4ybDExIDExYTQuNCA0LjQgMCAwMTAgNi4yeiIvPjwvc3ZnPg=="></head><body contenteditable></body>`;
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
      <CopyCodeButton URL={URL} />
    </div>
  );
};

export default Actions;
