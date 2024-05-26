import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <section className={`container4 ${className}`}>
      <img className="image-icon1" alt="" src="/image@2x.png" />
      <div className="heading-1-help-center-wrapper">
        <h1 className="heading-11">Help Center</h1>
      </div>
      <div className="welcome-to-where-the-answers-a-wrapper">
        <div className="welcome-to-where">
          Welcome to where the answers are.
        </div>
      </div>
      <div className="search2">
        <div className="input2" />
        <img className="button-search1" alt="" src="/button--search.svg" />
      </div>
    </section>
  );
};

export default Container;
