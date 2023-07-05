const useSocialMedia = () => {
  const oneFacebookClick = () => {
    window.location.href = 'https://es-la.facebook.com/';
  };
  const oneInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/';
  };
  const oneTwitterClick = () => {
    window.location.href = 'https://twitter.com/';
  };

  return { oneFacebookClick, oneInstagramClick, oneTwitterClick };
};

export default useSocialMedia;
