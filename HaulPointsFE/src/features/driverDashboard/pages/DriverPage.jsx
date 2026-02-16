import DashboardLayout from "../../../layouts/DashboardLayout.jsx"
import '../css/DriverPage.css'

function DriverPage() {
    const token = localStorage.getItem("token");
    // console.log(token);
    const claims = JSON.parse(atob(token.split('.')[1]));
    console.log(claims)
    const role = claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const name = claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const id = claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    console.log(role)
    console.log(name)
    console.log(id)
    const driverInfo = [
        {id: 1, type: "hero-container", role: role, name: name, userid: id},
        {id:2, type: "content-placeholder", role: role, name: name, userid: id},
        {id:3, type: "content-placeholder tall", role: role, name: name, userid: id},
        {id:3, type: "content-placeholder tall", role: role, name: name, userid: id},
        {id:2, type: "content-placeholder", role: role, name: name, userid: id},
        {id:4, type: "content-placeholder two", role: role, name: name, userid: id}
    ]

    return (
        <DashboardLayout userInfo={driverInfo}/>
    );
}
export default DriverPage;