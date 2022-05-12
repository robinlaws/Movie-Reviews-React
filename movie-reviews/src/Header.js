import { Link } from 'react-router-dom';

import '.index.css';

const HeaderLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);

    return <Link to={`/${page}`}>{title}</Link>;
};

const Header = () => {
    return (
        <div className = 'topnav'>
            <HeaderLink page = "home" />
            <HeaderLink page = "Reviews" />
            <HeaderLink page = "LeaveReview" />
        </div>
    );
};

export default Header;