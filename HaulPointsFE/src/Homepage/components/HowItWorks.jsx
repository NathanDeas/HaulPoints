
import "../css/HowItWorks.css"
function HowItWorks() {
    return ( 
        <div className="hiw-container">
            <div className="hiw-wrapper">
                <div className="hiw-left-section">
                    <div className="hiw-title">
                        <h1>NAVIGATE TO SUCCESS</h1>
                        <h2>A simple path to earning <span>more</span></h2>
                    </div>

                </div>
                <div className="hiw-right-section">
                    <div className="hiw-step drive">
                        <span className="logo">
                            <svg viewBox="0 0 20 20" width={20} height={20}>
                                <path d="M9.999 19.319A1 1 0 009.699.819 1 1 0 009.999 19.319M10.032 2.468Q4.479 2.615 2.353 8.075L7.53 8.875C8.115 8.973 8.54 7.982 9.735 7.992 11.142 8.039 11.072 8.895 12.071 8.793L17.223 7.948Q15.324 2.739 10.032 2.468ZM17.449 10.254Q16.964 16.514 10.44 17.683L10.815 12.71C10.896 11.882 11.309 11.964 11.573 11.522Q11.888 10.87 12.619 10.758L15.356 10.157Q15.576 10.303 15.931 10.297L17.449 10.254ZM9.121 17.75Q2.79 16.629 2.116 10.364L3.841 10.381Q4.131 10.398 4.309 10.243L7.197 10.856C7.904 11.149 7.806 11.407 7.998 11.592 8.181 11.868 8.608 11.959 8.724 12.659L9.121 17.75Z"
                                fill="none"
                                stroke="white"
                                strokeWidth={.4}
                                />
                            </svg>
                        </span>
                        <div className="step-content">
                            <h2>DRIVE.</h2>
                            <p>Stay focused on the road and do what you do best. Every safe mile, on‑time delivery, and solid performance automatically counts toward your progress.</p>
                        </div>
                    </div>
                    <div className="hiw-step earn">
                        <span className="logo">
                            <svg viewBox="0 0 20 20" width={20} height={20}>
                                <path d="M4.5 6.8 4.519 13.593 5.9 13.6 5.894 10.493 8.917 10.483 8.927 13.594 10.264 13.594 10.268 6.787 8.922 6.787 8.926 9.345 5.884 9.339 5.861 6.805 4.496 6.8ZM12.04 13.574 13.387 13.586 13.381 11.064 14.851 11.07Q16.652 10.975 16.953 9.263 17.083 8.117 16.398 7.42 15.955 6.895 14.981 6.794L12.061 6.785ZM13.407 9.983 13.4 7.884 14.723 7.882Q15.554 7.956 15.596 8.846 15.689 9.851 14.629 9.996ZM17.978 7.638A1 1 0 002.121 12.402 1 1 0 0017.978 7.638M5.427 1.573A1 1 0 0014.59 18.421 1 1 0 005.427 1.573Z"
                                fill="none"
                                stroke="white"
                                strokeWidth={.4}
                                />
                            </svg>
                                                       
                        </span>
                        <div className="step-content">
                            <h2>EARN.</h2>
                            <p>Your daily driving turns into measurable points behind the scenes. The better you perform, the faster you earn — no guesswork, no complicated rules.</p>
                        </div>
                    </div>
                    <div className="hiw-step rewards">
                        <span className="logo">
                            <svg viewBox="0 0 20 20" width={20} height={20}>
                                <path d="M5.817 11.398 3.639 17.347 6.509 16.035 7.891 18.885 10.003 13.084 12.127 18.889 13.471 16.009 16.318 17.326 14.171 11.411A1 1 0 005.846 2.793 1 1 0 0014.171 11.411M9.139 5.885 9.995 4.158 10.861 5.906 12.807 6.186 11.395 7.565 11.717 9.48 9.994 8.587 8.279 9.489 8.602 7.555 7.193 6.19 9.139 5.886ZM6 9A1 1 0 0013.945 5.139 1 1 0 006 9Z"
                                fill="none"
                                stroke="white"
                                strokeWidth={.4}
                                />
                            </svg>
                        </span>
                        <div className="step-content">
                            <h2>REWARDS.</h2>
                            <p>Redeem your points in your company’s store or through partner perks — from gear to gift cards — and choose the rewards that keep you rolling.</p>
                        </div>
                    </div>
                </div>

                <svg  className="road-path" 
                preserveAspectRatio="none" 
                viewBox="0 3 24 98" 
                height={102} width={22} >
                    <path 
                    d="M7.8 0 21.2 0Q19.3 2.1 18 4.7 16.3 8.3 16 11.2L16 93.7Q15.6 96 15.1 97.5 14.5 99.3 13.2 102.1L0 102.1Q1.9 99.9 3.2 97.3 5 93.1 5 90.8L5 8.5Q5.6 4.9 7.8 0Z"
                    stroke="#4D4D4D"
                    strokeWidth={3}
                    fill="#4D4D4D"
                    strokeLinecap="round"
                    />
                    <path 
                    d="M7.8 0 21.2 0Q19.3 2.1 18 4.7 16.3 8.3 16 11.2L16 93.7Q15.6 96 15.1 97.5 14.5 99.3 13.2 102.1L0 102.1Q1.9 99.9 3.2 97.3 5 93.1 5 90.8L5 8.5Q5.6 4.9 7.8 0Z"
                    stroke="white"
                    strokeWidth={.5}
                    fill="#4D4D4D"
                    strokeLinecap="round"
                    />                   
                    <path className="middle-line"
                    d="M14.2 0Q10.5 6.4 10 12.4L10 90Q10.4 95.7 6.7 102"
                    fill="none"
                    stroke="#f7b500"
                    strokeDasharray={2}
                    strokeWidth={.5}
                    />
                </svg>
            </div>
        </div>
    );
}
export default HowItWorks