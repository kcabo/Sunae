import React from 'react';
import { Theme } from '../App';

type Props = {
  theme: Theme;
};

const Preview: React.VFC<Props> = ({ theme }) => {
  return (
    <div className='md:w-full w-full mx-auto'>
      <div style={theme} className='rounded-lg text-left text-lg'>
        # 本日の予定 <br />
        - 予習 <br />
        - 復習 <br />
        <br />
        <i>Lorem ipsum</i> <br />
        <u>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
        </u>
        <br />
        also supports Emoji 🎉
      </div>
    </div>
  );
};

export default Preview;
