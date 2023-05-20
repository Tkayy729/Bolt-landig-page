


interface ButtonProps {
  className: string;
  dataToggle?: string;
  dataTarget?: string;
  ariaControls?: string;
  ariaExpanded?: string;
  ariaLabel?: string;
  style?: any
  onClick?: any
  title?:string
}

const MyButton = (props: ButtonProps) => {
  return (
    <button
      className={props.className}
      style={props.style}
      type="button"
      onClick={props.onClick}
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {props.title}
    </button>
  );
};

export default MyButton;
