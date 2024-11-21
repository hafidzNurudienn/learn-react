interface Props {
  children: String;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div className="btn btn-light mt-5" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
