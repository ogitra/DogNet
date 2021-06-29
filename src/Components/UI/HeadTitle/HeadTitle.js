import React, { useEffect } from 'react';

const HeadTitle = ({ title }) => {
  useEffect(() => {
    document.title = title + ' | DogsNet';
  }, []);
  return <></>;
};

export default HeadTitle;
