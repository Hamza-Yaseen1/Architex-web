import '@fortawesome/fontawesome-free/css/all.min.css';

interface IProps {
  text: string;
  bg: string; 
  color:string
}

function Button(props: IProps) {
  return (
    <section className="button">
      <button className={`flex items-center ${props.bg} ${props.color} font-medium py-2 px-16 rounded`}>
        {props.text}
        &nbsp;&nbsp;&nbsp;
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </section>
  );
}

export default Button;
