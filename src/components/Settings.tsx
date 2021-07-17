import React from 'react';
import Picker from './Picker';
import Actions from './Actions';
import { Theme } from '../App';

type Props = {
  theme: Theme;
  updateTheme: (obj: object) => void;
};

const Settings: React.VFC<Props> = ({ theme, updateTheme }) => {
  return (
    <div
      className='w-full mx-auto h-full p-10 bg-white rounded-xl 
        backdrop-blur-xl bg-opacity-25 border border-white border-opacity-80 drop-shadow-2xl
        flex flex-col justify-between'
    >
      <div className='flex flex-col gap-6'>
        <Picker
          label='背景色'
          labelEn='Background Color'
          defaultColor={theme.backgroundColor}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateTheme({ backgroundColor: e.target.value })
          }
        />
        <Picker
          label='文字色'
          labelEn='Text Color'
          defaultColor={theme.color}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateTheme({ color: e.target.value })
          }
        />
      </div>
      <Actions theme={theme} />
    </div>
  );
};

export default Settings;
