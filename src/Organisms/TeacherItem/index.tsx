import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/43359988?s=460&u=d20bcac13447714b0a8de72436a1929ded882abe&v=4"
          alt="Rafael Dias"
        />
        <div>
          <strong>Rafael Dias de Souza</strong>
          <span>React</span>
        </div>
      </header>

      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque.
        <br />
        Corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia
        deserunt mollitia animi, id est laborum et dolorum fuga.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
