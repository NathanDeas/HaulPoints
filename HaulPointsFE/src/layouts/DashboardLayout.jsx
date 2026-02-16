import './DashboardLayout.css'
// import Footer from "../components/Footer/Footer.jsx"

function DashboardLayout({ userInfo }) {
    
    const dashcontent = userInfo.map(content =>
        <div className={content.type} key={content.id}>
            <span>{content.role}</span>
        </div>
    );
    return(
    <div className='dashboard-container'>
        <div className='dashboard-header'>
            HEADER
        </div>
        <div className='dashboard-bento-layout'>
            {dashcontent}
        </div>
    </div>
    );
}

export default DashboardLayout