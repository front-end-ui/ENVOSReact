import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(){

  const user = useSelector(state=> state.user);

  
  return (
    <div className="flex gap-2 px-5 py-2 font-medium ">
        <Link to={'/'}>{user.name}</Link>

      <div className="flex gap-2">
        <Link to={'/products'}>Products</Link>
      </div> 
    </div>
  )
}