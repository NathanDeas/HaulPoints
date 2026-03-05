import './DashboardLayout.css'
// import Footer from "../components/Footer/Footer.jsx"

function DashboardLayout({ children }) {
    return(
    <div className='dashboard-container'>
        <div className='dashboard-header'>
            HEADER
        </div>
        <div className='dashboard-bento-layout'>
            {children}
        </div>
    </div>
    );
}

export default DashboardLayout