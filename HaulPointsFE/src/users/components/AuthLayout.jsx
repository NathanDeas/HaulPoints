import "../css/AuthLayout.css"

function AuthLayout  ({ children }) {
    return (
        <div className="auth-page-layout">
            <div className="page-left-img">
                <img className="logo" src="/HaulPointsLogo-BlackText.png"></img>
                <img className="stock-truck-image" src="/Loginregister-image-left.jpg"></img>
            </div>
            <div className="page-right-forms">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout