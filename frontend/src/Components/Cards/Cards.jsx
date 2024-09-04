import "./Cards.css";


function Cards({image,name }) {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>

     
      
      </div>
    
  );
}

export default Cards;
