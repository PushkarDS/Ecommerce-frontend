import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
const PaymentWithNavigation = () => {
    const navigate = useNavigate();
  
    // This callback will run after Stripe elements are loaded
    const handleElementsLoad = () => {
      navigate('/process/payment');
    };
  
    return <Payment onElementsLoad={handleElementsLoad} />;
  };
  
  export default PaymentWithNavigation