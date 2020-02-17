import React from 'react';
import './loading.css';

function Loading() {
  return (
    <div className="loading">
      <h2>Refactoring your matches</h2>
      <img className="loadingIcon"
        src='https://user-images.githubusercontent.com/58707118/74624812-f2555e00-5117-11ea-9825-7ca3a6623c88.png'
        alt='refactoring'></img>
    </div>
  );
}

export default Loading;
