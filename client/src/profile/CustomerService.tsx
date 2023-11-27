import { useNavigate } from "react-router-dom";

type Props = {}

export default function CustomerService({}: Props) {
    const navigate = useNavigate();
  const handleClick =  () => {
    try {
        console.log('this is handleclick');
        navigate(`/connect`);
      } catch (err) {
        console.error((err as Error).message);
      }    
  };
  return (
    <div onClick={handleClick}>
        CustomerService</div>
  )
}