import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg)',
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo dia</p>
        <p className='journal__entry-content'>
          Morbi bibendum leo ante, a lacinia metus feugiat aliquet
        </p>
      </div>
      <div className='journal__entry-dat-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
