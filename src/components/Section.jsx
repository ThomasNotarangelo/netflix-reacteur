const Section = (props) => {
  return;
  <div>
    <h2>{props.category}</h2>
    {props.image.map((image) => {
      return <img src={image} alt="Couverture film" />;
    })}
  </div>;
};

export default Section;
