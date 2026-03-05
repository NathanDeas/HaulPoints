import { GetDriverBalance } from "../api/DriverDashApi";
import { useEffect, useState } from "react";
import '../css/DriverHero.css'

function DriverHero({userInfo}) {
    const [Balance, setBalance] = useState(0);
    function calculate(num1, num2)
    {
        return (num1/num2);
    }
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await GetDriverBalance(userInfo.id); 
                if (!response.success)
                {
                    console.warn(response.message)
                    return;
                }
                setBalance(response.balance)
                } catch (error) {
                    console.error("Error fetching driver balance:", error);
                }
        };
        fetchBalance();
    }, [userInfo.id]);
    return (
        <div className="hero-container">
            <div className="hero-basic-Info">
                <div>
                    <span> Welcome Back, </span>
                    {userInfo.name}
                </div>
                <div className="Supplemental-Info">
                    <h2>Your Id: {userInfo.id}</h2>
                    <h2>Organization: </h2>
                </div>
            </div>
            
            <div className="hero-balance">
                HaulPoints: {Balance}
            </div>

            <div className="hero-incentive">
                Your Next Goal: 
                <progress max={10000} value={Balance}/>
            </div>
        </div>

    );
}

export default DriverHero