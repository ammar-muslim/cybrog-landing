import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <a href={props.href || "#"} className="primary-button">
      {props.children}
    </a>
  );
};

const SecondaryButton = (props) => {
  return (
    <a href={props.href || "#"} className="secondary-button">
      {props.children}
    </a>
  );
};

export default PrimaryButton;
export { SecondaryButton };
