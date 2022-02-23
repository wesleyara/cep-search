import style from "./index.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <p>&copy; 2022 Todos direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:wesleyara.contato@gmail.com"
          >
            Wesley Araújo.
          </a>
        </p>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          className={style.redes}
          href="mailto:wesleyara.contato@gmail.com"
        >
          <AiOutlineMail />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={style.redes}
          href="https://github.com/wesleyara"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={style.redes}
          href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
