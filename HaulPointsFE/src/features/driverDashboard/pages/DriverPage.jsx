import DashboardLayout from "../../../layouts/DashboardLayout.jsx";
import '../css/DriverPage.css';
import DriverHero from '../components/DriverHero.jsx';


function DriverPage() {
    const token = localStorage.getItem("token");
    const claims = JSON.parse(atob(token.split('.')[1]));
    const BasicInfo = {
        role : claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        name : claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        id : claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    }

    return (
        <DashboardLayout>
            <DriverHero userInfo = {BasicInfo}/>
        </DashboardLayout>
    );
}
export default DriverPage;