import ButtonPath from '../ButtonPath';
import { ReactComponent as Linkedin } from '@/assets/icon-social/icon-linkedin.svg';
import { ReactComponent as Github } from '@/assets/icon-social/icon-github.svg';
import { ReactComponent as Twitter } from '@/assets/icon-social/icon-twitter.svg';
import { ReactComponent as TextH1 } from '@/assets/text-h1-home.svg';
import { ReactComponent as TextH2 } from '@/assets/text-H2-home.svg';

const BodyHome = () => {
    return (
        <section className='container-title-button-social-home'>
            <div className="container-social">
                <a className="icon-social" href="/"><Linkedin /></a>
                <a className="icon-social" href="/"><Twitter className='icon-twitter' /></a>
                <a className="icon-social" href="/"><Github /></a>
            </div>
            <div className="container-title-button-home">
                <TextH1 className="text-h1-home" />
                <TextH2 className="text-h2-home" />
                <ButtonPath />
            </div>
        </section>
    );
}

export default BodyHome