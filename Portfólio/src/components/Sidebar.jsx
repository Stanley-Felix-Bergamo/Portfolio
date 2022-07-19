import SocialNetworks from './SocialNetworks';

import InformationContainer from './informationContainer';

import Avatar from '../img/Stan.png';

import '../styles/components/sidebar.sass';


export const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Stanley Felix Bergamo" />
            <p className='title'>Desenvolvedor Front End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">
                Download currículo
            </a>
        </aside >
    )
}

export default Sidebar;