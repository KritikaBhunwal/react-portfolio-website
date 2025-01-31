const Button = ({ text, onClick }) => {
    return (
      <button 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  