import React from "react";
import { Fechar } from "../../components/Fechar";
import "./style.css";

function oculta(){
  var x = document.getElementById("instale");
  x.style.visibility = "hidden";
}

export const Instale = () => {
  return (
    <div id="instale" className="instale">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="texto">
            <div className="text-wrapper">Crie agora</div>
            <div className="div">sua conta do Orange</div>
          </div>
          <div className="vantagens">
            <div className="text-wrapper-2">. CRIE</div>
            <div className="text-wrapper-3">. INTERAJA</div>
            <div className="text-wrapper-4">. ACOMPANHE</div>
          </div>
          <div className="lateral">
            <div className="overlap-group">
              <div className="texto-2">
                <div className="overlap-2">
                  <div className="inferior">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">range</div>
                      <img className="laranja" alt="Laranja" src="/img/laranja.png" />
                    </div>
                    <div className="text-wrapper-6">OUR</div>
                  </div>
                  <div className="superior">
                    <div className="overlap-3">
                      <div className="rectangle" />
                      <div className="text-wrapper-7">ENJOYING</div>
                      <div className="text-wrapper-8">what’s in</div>
                    </div>
                  </div>
                </div>
                <img className="line" alt="Line" src="/img/linha16.png" />
              </div>
              <a href="https://play.google.com/store/search?q=orange&c=apps" target="_blank">
                <div className="playstore">
                  <div className="div-wrapper">
                    <div className="text-wrapper-9">ACESSE A PLAYSTORE</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a href="#" onClick={() => oculta()}>
            <Fechar className="FECHAR-instance" />
          </a>
        </div>
      </div>
    </div>
  );
};
