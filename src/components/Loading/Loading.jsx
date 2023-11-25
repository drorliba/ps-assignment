import React from 'react';
import './Loading.css';

function Loading() {
  const skeletonCount = 6;
  const skeletons = Array.from({ length: skeletonCount }).map((_, index) => (
    <div key={index} className="skeleton-card"></div>
  ));

  return (<>{skeletons}</>);
}

export default Loading;