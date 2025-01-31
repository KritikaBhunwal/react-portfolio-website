const Card = ({ title, description }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;
  