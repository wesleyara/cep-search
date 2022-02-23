import cep from "cep-promise";
import Image from "next/image";
import { useEffect, useState } from "react";

import style from "./index.module.scss";
import ilustration from "../../Assets/Images/Search_SVG.svg";

interface Props {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

export default function CepPromise() {
  const [val, setVal] = useState<Props>();
  const [start, setStart] = useState(false);
  const [cepInpu, setCepInpu] = useState("");

  useEffect(() => {
    const cepInput = Number(cepInpu);

    if (start === true) {
      promiseSearch();
      setStart(false);
    }

    async function promiseSearch() {
      try {
        const cepAPI = await cep(cepInput);
        setVal(cepAPI);
      } catch {
        alert("Erro: CEP inválido, tente novamente novamente");
        setCepInpu("");
      }
    }
  }, [cepInpu, start]);

  function handleClick() {
    if (cepInpu.length == 8) {
      setStart(true);
    } else {
      alert("Erro: Insira a quantidade exata de caracteres.");
    }
  }

  return (
    <>
      <div className={style.cepContainer}>
        <div>
          <h1>Cep Search</h1>
        </div>

        <div className={style.bxImage}>
          <Image src={ilustration} alt="" />
        </div>

        <div className={style.bxSearch}>
          <input
            onChange={(e) => setCepInpu(e.target.value)}
            maxLength={8}
            value={cepInpu}
            type="text"
            name="cepInput"
            id="cepInput"
            placeholder="Digite o CEP (somente números)"
          />
          <button onClick={handleClick}>Pesquisar</button>
        </div>
      </div>
      <div className={style.bxData}>
        <div>
          {val && (
            <>
              <p>Cep: {val.cep}</p>
              <p>Cidade: {val.city}</p>
              <p>Bairro: {val.neighborhood}</p>
              <p>Rua: {val.street}</p>
              <p>Estado: {val.state}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
