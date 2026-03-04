import DashboardLayout from "../../../layouts/DashboardLayout.jsx";
import '../css/DriverPage.css';
import { GetDriverBalance } from "../api/DriverDashApi";
import { useState, useEffect } from "react";


function DriverPage() {
    const token = localStorage.getItem("token");
    const claims = JSON.parse(atob(token.split('.')[1]));
    const role = claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const name = claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const id = claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    const [Balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await GetDriverBalance(id); 
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
    }, [id]);



    const driverInfo = [
        {id: 1, type: "hero-container", role: role, name: name, userid: id, balance: Balance},

    ]

    return (
        <DashboardLayout userInfo={driverInfo}/>
    );
}
export default DriverPage;