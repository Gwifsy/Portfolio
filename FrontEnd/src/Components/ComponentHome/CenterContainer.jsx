import ButtonPath from '../ButtonPath';
import IconSocial from '../IconSocial.jsx';
import { ReactComponent as TextH1 } from '@/assets/text-h1-home.svg';
import { ReactComponent as TextH2 } from '@/assets/text-H2-home.svg';
const CenterContainer = () => {
    return (
        <section className='container-title-button-social-home'>
            <IconSocial className='container-social' />
            <div className="container-title-button-home">
                <TextH1 className="text-h1-home" />
                <TextH2 className="text-h2-home" />
                <ButtonPath />
            </div>
        </section>
    );
}

export default CenterContainer