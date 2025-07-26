import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51PLVzo2NWgazLRYYiivyBIqlEDwkQXycDOLH7z1ZwsXCrw7oIJxPW4cOVexzDa2jpCF3DL8803VRQ3qKw5sRRnqQ00Iiwqk8zo');
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;