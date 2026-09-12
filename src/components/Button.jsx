function Button({ icon, btnText, onClickButton, className }) {
  return (
    <button className={className} type="button" onClick={() => onClickButton()}>
      {btnText}
      {icon}
    </button>
  );
}
export default Button;
