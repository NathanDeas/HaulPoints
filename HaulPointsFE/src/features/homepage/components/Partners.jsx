import "../css/Partners.css"
function Partners() {
    return (
        <div className="partners-container">
            <h1>Trusted By Companies You Know</h1>
            <div className="carousel">
                <div className="icon-wrapper">
                    <div className="icon-container">
                        <img src="/Company Logos/BORCELLE.png" />
                        <img src="/Company Logos/FIRELINE.png" />
                        <img src="/Company Logos/HANOVER.png" />
                        <img src="/Company Logos/MIDCOAST.png" />
                        <img src="/Company Logos/REDRIVER.png" />
                        <img src="/Company Logos/SUNBELT.png" />
                    </div>
                    <div aria-hidden className="icon-container-copy">
                        <img src="/Company Logos/BORCELLE.png" />
                        <img src="/Company Logos/FIRELINE.png" />
                        <img src="/Company Logos/HANOVER.png" />
                        <img src="/Company Logos/MIDCOAST.png" />
                        <img src="/Company Logos/REDRIVER.png" />
                        <img src="/Company Logos/SUNBELT.png" />
                    </div>
                </div>
            </div>
            <div className="link-to-partners">Find Yours</div>
        </div>
    );
}
export default Partners;