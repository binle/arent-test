import goToTopImage from './../../styles/images/go-to-top.png';

export const ScrollTopComponent = () => {
  return (
    <div
      className="go-to-top"
      onClick={() => document.getElementById('root')!.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={goToTopImage} alt="Go to top" />
    </div>
  );
};
