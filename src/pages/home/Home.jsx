import "./Home.css";
import homeIllustration from "../../assets/images/home-illustration.png";
import { LocateFixed, LocateOffIcon } from "lucide-react";
import { useLocation } from "../../hooks/useLocation";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const { fetchCurrentLocation, addDemoCoordinate } = useLocation();

    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-logo">Swiggato</div>
            <div className="home-body">
                <div className="home-details">
                    <div className="home-text">
                        <span>
                            Your <span>Cravings</span>,
                        </span>
                        <span>Delivered at the speed of a click. </span>
                        <span>
                            The quickest way to find your <span>food</span>
                        </span>
                    </div>

                    <div className="btn-container">
                        <button
                            onClick={async () => {
                                await fetchCurrentLocation();
                                navigate("/restaurant");
                            }}
                            className="primary-btn location-btn search-size"
                        >
                            <LocateFixed />
                            Location
                        </button>

                        <button
                            onClick={async () => {
                                await addDemoCoordinate();
                                navigate("/restaurant");
                            }}
                            className="primary-btn search-size"
                        >
                            <LocateOffIcon />
                            Demo
                        </button>
                    </div>
                </div>
                <div className="home-illustration">
                    <img src={homeIllustration} alt="" loading="lazy" />
                </div>
            </div>

            <div className="home-footer">
                <Link to={"https://https://github.com/vikramsingh2110"} target="_blank">
                    Created🧡@vikramsingh2110
                </Link>
            </div>
        </div>
    );
}
