import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const informationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icone" />
            <div>
                <h3>Telefone</h3>
                <p>(16) 99451-4952</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>Stanley.Felix.Bergamo@outlook.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>SP / Ribeirão Preto</p>
            </div>
        </div>

    </section>

};

export default informationContainer;