import "./CustomButton.css";

export default function CustomButton({ children, classNames, ...other }) {
  return (
    <button className={`btn btn-lg ${classNames}`} {...other}>
      {children}
    </button>
  );
}
