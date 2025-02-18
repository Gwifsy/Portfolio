import { ReactComponent as Linkedin } from '@/assets/icon-social/icon-linkedin.svg';
import { ReactComponent as Github } from '@/assets/icon-social/icon-github.svg';
import { ReactComponent as Twitter } from '@/assets/icon-social/icon-twitter.svg';
import { ReactComponent as Circle } from '@/assets/icon-social/icon-circle-button.svg';
import PropTypes from 'prop-types';
const IconSocial = ({ className = "" }) => {
    return (
        <div className={` ${className}`}>
            <a className="icon-sociale" href="/">
                <Circle />
                <Linkedin className="icon-center-social" />
            </a>
            <a className="icon-sociale" href="/">
                <Circle />
                <Twitter className="icon-center-social" />
            </a>
            <a className="icon-sociale" href="/">
                <Circle />
                <Github className="icon-center-social" />
            </a>
        </div>
    );
};
IconSocial.propTypes = {
    className: PropTypes.string,
};
export default IconSocial