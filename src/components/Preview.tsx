import React from 'react';

const Preview: React.VFC = () => {
  return (
    <div className='md:w-full w-full mx-auto'>
      <div className='rounded-lg bg-gray-600 text-white p-7 leading-loose text-left text-lg'>
        # 本日の予定 <br />
        - 予習 <br />
        - 復習 <br />
        <br />
        <i>Lorem ipsum</i> <br />
        <u>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
        </u>
        <br />
        also supported Emoji 🎉
      </div>
    </div>
  );
};

export default Preview;
