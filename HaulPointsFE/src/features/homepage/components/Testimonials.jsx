import "../css/Testimonials.css"
function Testimonials() {
    const testimonials = [
        {
            id: 1,
            pfp: "https://images.unsplash.com/photo-1760944016370-0490373446f7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Raymond H.',
            role: 'Fleet Driver',
            message: 'HaulPoints actually makes me feel recognized for the miles I put in. I hit my quarterly safety goal and cashed out for new work boots. Super easy to use.',
            date: 'October 2026'
        },
        {
            id: 2,
            pfp: "https://images.unsplash.com/photo-1574757974346-45bae947d89a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Shawn D.',
            role: 'Fleet Driver',
            message: 'The app shows exactly what I need to do to earn more. No guessing, no paperwork. I hit my delivery target and picked up a new jacket with my points.',
            date: 'May 2025'

        },
        {
            id: 3,
            pfp: "https://images.unsplash.com/photo-1633665503034-78f3628a86e7?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Derrick S.',
            role: 'Fleet Driver',
            message: 'It’s motivating. I check my HaulPoints every morning before I start my route. Makes the long weeks feel worth it when you see the rewards stack up.',
            date: 'January 2025'
        },
        {
            id: 4,
            pfp: "https://images.unsplash.com/photo-1688619101855-396f4f06710e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Heather S.',
            role: 'Fleet Driver',
            message: 'I appreciate how transparent everything is. No guessing what I qualify for. I redeemed my points for a new pair of sunglasses for the road.',
            date: 'July 2024'
        },



    ]
    const testList = testimonials.map(testi =>
        <li className="testimonial-card" key={testi.id}>
            <div className="testi-name">{testi.name}</div>
            <div className="testi-role">{testi.role}</div>
            <div className="testi-photo"><img src={testi.pfp}/></div>
            <p className="testi-message">"{testi.message}"</p>
        </li>
    )

    return (
        <div className="testimonial-container">
            <h1>See What Other Drivers Are Saying</h1>
            <ul className="testimonials-wrapper">
                {testList}
            </ul>
        </div>

    )
}
export default Testimonials