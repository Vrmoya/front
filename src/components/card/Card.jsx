import { Link } from "react-router-dom";
export default function Card({
   onClose,
   name,
   status,
   species,
   gender,
   origin,
   image,
   id
 }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>#{id}</h2>
         <Link to = {`/detail/${id}`}><h2>{name}</h2></Link>
         <img src={image} alt='' />
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
        
      </div>
   );
}
