import React from "react";
import { ArrowRight } from "../../components/ArrowRight";
import { Bookmark } from "../../components/Bookmark";
import { CalendarAddFill } from "../../components/CalendarAddFill";
import { Camera } from "../../components/Camera";
import { CircleLeft } from "../../components/CircleLeft";
import { Download } from "../../components/Download";
import { Drink } from "../../components/Drink";
import { ExpandRight } from "../../components/ExpandRight";
import { GroupAddLight } from "../../components/GroupAddLight";
import { GroupFill } from "../../components/GroupFill";
import { ImgLoadBoxFill } from "../../components/ImgLoadBoxFill";
import { LayersFill } from "../../components/LayersFill";
import { LightningLight } from "../../components/LightningLight";
import { MeatballsMenu } from "../../components/MeatballsMenu";
import { PainelTelas } from "../../components/PainelTelas";
import { Trophy } from "../../components/Trophy";
import { Termos } from "../../components/Termos/Termos";
import { Instale} from "../../components/Instale/Instale";
import { Mapa } from "../../components/Mapa";
import "./style.css";

function mostraTermos(){
  var x = document.getElementById("termos");
  x.style.visibility = "visible";
}

function mostraInstale(){
  var x = document.getElementById("instale");
  x.style.visibility = "visible";
}

const eventos = [
  { lat: -18.9132, lng: -48.2254, titulo: 'Evento' }
];

export const Frame = () => {
  return (
    <div id="tela" className="frame">
      <div className="overlap-wrapper">
        <div className="overlap-4">
          <div className="div-2">
            <div className="overlap-5">
              <div className="div-2">
                <div className="geral-site">
                  <div id="superior" className="superior">
                    <div className="logo-superior">
                      <div className="text-wrapper">Orange</div>
                      <div className="text-wrapper-2">ENJOYING WHAT’S IN</div>
                      <img className="laranja" alt="Laranja" src="/img/laranja.png" />
                    </div>
                    <div className="opes-superior">
                      <a href="#" onClick={() => mostraTermos()}>
                        <div className="termos">
                          <p className="p">Termos de Uso e Política de Privacidade</p>
                          <img className="line-3" alt="Line" src="/img/line-14-3.png" />
                        </div>
                      </a>
                      <a href="#" onClick={() => mostraInstale()}>
                        <div className="baixar">
                          <div className="text-wrapper-3">Baixar agora</div>
                          <img className="line-4" alt="Line" src="/img/line-14-3.png" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div id="contato" className="referenciaBotaoContato"></div>
                  <div className="inferior">
                    <div className="overlap-6">
                      <div className="rectangle-5" />
                      <div className="logo-inferior">
                        <div className="text-wrapper-4">range</div>
                        <img className="orange" alt="Orange" src="/img/orange1-3.png" />
                      </div>
                      <div className="texto-inferior">
                        <div className="text-wrapper-5">©</div>
                        <p className="text-wrapper-6">Todos os direitos reservados, 2023.</p>
                      </div>
                      <div className="texto-superior">
                        <div className="text-wrapper-7">Nossa Equipe</div>
                        <p className="text-wrapper-8">
                          Caso possua quaisquer dúvidas quanto ao aplicativo Orange, entre em contato com a nossa
                          equipe. Aceitamos sugestões, assim como prezamos ouvir por reclamações quando necessário.
                        </p>
                      </div>
                      <div className="criadores">
                        <div className="overlap-group-6">
                          <div className="eymi-montufar-ufu-br">
                            eymi.montufar@ufu.br
                            <br />
                            +55 (34) 98700-6727
                          </div>
                          <div className="rafael-teixeira-ufu">
                            rafael.teixeira@ufu.br
                            <br />
                            +55 (34) 98821-1441
                          </div>
                          <div className="caikebl-ufu-br">
                            caikebl@ufu.br
                            <br />
                            +55 (34) 99639-3293
                          </div>
                          <div className="mauriciocnandreata">
                            mauriciocnandreata@ufu.br
                            <br />
                            +55 (34) 98400-3786
                          </div>
                          <div className="gustavo-kono-ufu-br">
                            gustavo.kono@ufu.br
                            <br />
                            +55 (34) 99126-8383
                          </div>
                        </div>
                        <div className="text-wrapper-9">Eymi Montúfar</div>
                        <div className="text-wrapper-10">Rafael Campos</div>
                        <div className="text-wrapper-11">Caike Barbaresco</div>
                        <div className="text-wrapper-12">Mauricio Andreata</div>
                        <div className="text-wrapper-13">Gustavo Kono</div>
                        <img className="foto-usuario" alt="Foto usuario" src="/img/foto-usuario.png" />
                        <img className="foto-postagem" alt="Foto postagem" src="/img/foto-postagem-10.png" />
                        <img className="foto-postagem-2" alt="Foto postagem" src="/img/foto-postagem-9.png" />
                        <img className="foto" alt="Foto" src="/img/foto-9.png" />
                        <img className="foto-postagem-3" alt="Foto postagem" src="/img/foto-postagem-8.png" />
                      </div>
                      <div className="ellipse-15" />
                      <div className="ellipse-16" />
                      <div className="ellipse-17" />
                    </div>
                  </div>
                </div>
                <div className="pagina">
                  <div id="conheca" className="conhea">
                    <div className="overlap-7">
                      <div className="opcoes">
                        <div className="acompanhar">
                          <div className="overlap-group-7">
                            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-4272.png" />
                            <div className="rectangle-7" />
                            <div className="text-wrapper-14">ACOMPANHE</div>
                          </div>
                          <div className="text-wrapper-15">eventos</div>
                        </div>
                        <div className="criar">
                          <div className="overlap-group-7">
                            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-4272.png" />
                            <div className="rectangle-8" />
                            <div className="text-wrapper-14">CRIE</div>
                          </div>
                          <div className="text-wrapper-15">de tudo</div>
                        </div>
                        <div className="interaja">
                          <div className="overlap-group-7">
                            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-4272.png" />
                            <div className="rectangle-8" />
                            <GroupFill
                              className="group-fill-instance"
                              divClassName="group-fill-4"
                              ellipseClassName="group-fill-2"
                              ellipseClassNameOverride="group-fill-3"
                              img="/img/subtract-23.png"
                              overlapClassName="group-fill-5"
                              overlapGroupClassName="design-component-instance-node"
                              rectangle="/img/rectangle-4160-8.png"
                              rectangleClassName="group-fill-8"
                              subtract="/img/subtract-24.png"
                              subtractClassName="group-fill-6"
                              subtractClassNameOverride="group-fill-7"
                            />
                            <div className="text-wrapper-14">INTERAJA</div>
                          </div>
                          <div className="text-wrapper-16">amigos/eventos</div>
                        </div>
                        <div className="usurio">
                          <div className="overlap-8">
                            <div className="rectangle-9" />
                            <div className="text-wrapper-17">PERFIL</div>
                            <img className="icon-user" alt="Icon user" src="/img/icon-user.png" />
                          </div>
                          <div className="text-wrapper-15">usuário/empresa</div>
                        </div>
                      </div>
                      <div className="botoes">
                        <a href="#" onClick={() => mostraInstale()}>
                          <div className="element-button-large">
                            <div className="button-label">INSTALAR AGORA</div>
                          </div>
                        </a>
                        <a href="#" onClick={() => mostraTermos()}>
                          <div className="button-label-wrapper">
                            <div className="button-label-2">Políticas de Privacidade</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="titulo">
                      <div className="text-wrapper-18">Conheça</div>
                      <img className="line-5" alt="Line" src="/img/line-14-2.png" />
                    </div>
                    <p className="text-wrapper-19">
                      Apresentam-se mais sobre as funcionalidades disponíveis no Orange que não estão disponíveis por
                      meio do website. Além disso, você pode conferir algumas telas do aplicativo abaixo.
                    </p>
                    <p className="text-wrapper-20">Aproveite o tour pelo app!</p>
                  </div>
                  <div id="eventos" className="eventos">
                    <div className="overlap-9">
                      <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-4262.png" />
                      <div className="titulo-2">
                        <div className="overlap-group-8">
                          <div className="text-wrapper-21">Eventos</div>
                          <div className="text-wrapper-22">INTERAJA COM MAIS PESSOAS</div>
                          <div className="ellipse-18" />
                        </div>
                        <img className="line-6" alt="Line" src="/img/line-15.png" />
                      </div>
                      <div className="eventos-2">
                        <div className="eventos-3">
                          <div className="evento">
                            <div className="overlap-group-wrapper">
                              <div className="overlap-10">
                                <img className="borda-evento" alt="Borda evento" src="/img/borda-evento.png" />
                                <GroupFill
                                  className="group-fill-9"
                                  img="/img/subtract-25.png"
                                  rectangle="/img/rectangle-4160-9.png"
                                  subtract="/img/subtract-26.png"
                                />
                                <p className="text-wrapper-23">
                                  Na descrição do evento, escreva um texto que desperte a atenção do público. Dê um
                                  breve contexto do seu evento online e coloque todas as informações necessárias para
                                  que o público entenda do que se trata e se sinta atraído para garantir sua
                                  participação!
                                </p>
                                <div className="text-wrapper-24">ARQ SEILA QUAL</div>
                                <div className="group-2">
                                  <div className="text-wrapper-25">novembro</div>
                                  <div className="text-wrapper-26">04</div>
                                </div>
                                <div className="simbolo-evento">
                                  <div className="overlap-11">
                                    <div className="text-wrapper-27">Festa</div>
                                    <LightningLight className="lightning-light-instance" />
                                  </div>
                                </div>
                                <div className="group-3">
                                  <div className="text-wrapper-28">Ver mais</div>
                                  <div className="group-4">
                                    <div className="div-wrapper">
                                      <div className="overlap-group-9">
                                        <img className="foto-2" alt="Foto" src="/img/foto-3.png" />
                                        <img className="foto-3" alt="Foto" src="/img/foto-2.png" />
                                        <img className="foto-4" alt="Foto" src="/img/foto-4.png" />
                                      </div>
                                    </div>
                                    <div className="group-5">
                                      <div className="overlap-12">
                                        <div className="ellipse-19" />
                                        <MeatballsMenu className="design-component-instance-node-2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="botao-local">
                                  <div className="overlap-13">
                                    <img className="localizao" alt="Localizao" src="/img/localiza-o.png" />
                                    <div className="botao-editar" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="botoes-evento">
                              <Bookmark bookmark="/img/bookmark.png" className="bookmark-instance" />
                              <GroupAddLight
                                className="group-add-light-instance"
                                groupClassName="group-add-light-3"
                                img="/img/vector-572.png"
                                overlapClassName="group-add-light-2"
                                overlapGroupClassName="group-add-light-4"
                                rectangle="/img/rectangle-4160.png"
                                rectangleClassName="group-add-light-6"
                                subtract="/img/subtract-11.png"
                                subtractClassName="group-add-light-5"
                                vector="/img/vector-571.png"
                                vectorClassName="group-add-light-7"
                                vectorClassNameOverride="group-add-light-8"
                              />
                              <Camera camera="/img/camera.png" className="camera-instance" />
                            </div>
                          </div>
                          <div className="evento-2">
                            <div className="overlap-group-wrapper">
                              <div className="overlap-10">
                                <img className="borda-evento" alt="Borda evento" src="/img/borda-evento.png" />
                                <GroupFill
                                  className="group-fill-9"
                                  img="/img/subtract-25.png"
                                  rectangle="/img/rectangle-4160-9.png"
                                  subtract="/img/subtract-26.png"
                                />
                                <p className="text-wrapper-23">
                                  Na descrição do evento, escreva um texto que desperte a atenção do público. Dê um
                                  breve contexto do seu evento online e coloque todas as informações necessárias para
                                  que o público entenda do que se trata e se sinta atraído para garantir sua
                                  participação!
                                </p>
                                <div className="text-wrapper-24">CATSU 2024</div>
                                <div className="group-2">
                                  <div className="text-wrapper-25">agosto</div>
                                  <div className="text-wrapper-26">18</div>
                                </div>
                                <div className="simbolo-evento">
                                  <div className="overlap-11">
                                    <div className="text-wrapper-27">Festa</div>
                                    <LightningLight className="lightning-light-instance" />
                                  </div>
                                </div>
                                <div className="group-6">
                                  <div className="text-wrapper-29">Evento recém-lançado!</div>
                                  <div className="group-7" />
                                </div>
                                <div className="botao-local-2">
                                  <div className="overlap-13">
                                    <img className="localizao" alt="Localizao" src="/img/localiza-o.png" />
                                    <div className="botao-editar" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="botoes-evento">
                              <Bookmark bookmark="/img/bookmark.png" className="bookmark-instance" />
                              <GroupAddLight
                                className="group-add-light-instance"
                                groupClassName="group-add-light-3"
                                img="/img/vector-572.png"
                                overlapClassName="group-add-light-2"
                                overlapGroupClassName="group-add-light-4"
                                rectangle="/img/rectangle-4160.png"
                                rectangleClassName="group-add-light-6"
                                subtract="/img/subtract-11.png"
                                subtractClassName="group-add-light-5"
                                vector="/img/vector-571.png"
                                vectorClassName="group-add-light-7"
                                vectorClassNameOverride="group-add-light-8"
                              />
                              <Camera camera="/img/camera.png" className="camera-instance" />
                            </div>
                          </div>
                          <div className="evento-3">
                            <div className="overlap-group-wrapper">
                              <div className="overlap-10">
                                <img className="borda-evento" alt="Borda evento" src="/img/borda-evento.png" />
                                <GroupFill
                                  className="group-fill-9"
                                  img="/img/subtract-25.png"
                                  rectangle="/img/rectangle-4160-9.png"
                                  subtract="/img/subtract-26.png"
                                />
                                <p className="text-wrapper-23">
                                  Na descrição do evento, escreva um texto que desperte a atenção do público. Dê um
                                  breve contexto do seu evento online e coloque todas as informações necessárias para
                                  que o público entenda do que se trata e se sinta atraído para garantir sua
                                  participação!
                                </p>
                                <div className="text-wrapper-24">NIVER DA EYMI</div>
                                <div className="group-2">
                                  <div className="text-wrapper-25">dezembro</div>
                                  <div className="text-wrapper-26">05</div>
                                </div>
                                <div className="simbolo-evento">
                                  <div className="overlap-11">
                                    <div className="text-wrapper-27">Festa</div>
                                    <LightningLight className="lightning-light-instance" />
                                  </div>
                                </div>
                                <div className="group-8">
                                  <div className="text-wrapper-30">Ver mais</div>
                                  <div className="group-9">
                                    <div className="group-10">
                                      <div className="overlap-group-9">
                                        <img
                                          className="foto-postagem-4"
                                          alt="Foto postagem"
                                          src="/img/foto-postagem-6.png"
                                        />
                                        <img className="foto-5" alt="Foto" src="/img/foto-2.png" />
                                        <img className="foto-6" alt="Foto" src="/img/foto-4.png" />
                                      </div>
                                    </div>
                                    <div className="group-11">
                                      <div className="overlap-12">
                                        <div className="ellipse-19" />
                                        <MeatballsMenu className="design-component-instance-node-2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="botao-local-3">
                                  <div className="overlap-13">
                                    <img className="localizao" alt="Localizao" src="/img/localiza-o.png" />
                                    <div className="botao-editar" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="botoes-evento">
                              <Bookmark bookmark="/img/bookmark.png" className="bookmark-instance" />
                              <GroupAddLight
                                className="group-add-light-instance"
                                groupClassName="group-add-light-3"
                                img="/img/vector-572.png"
                                overlapClassName="group-add-light-2"
                                overlapGroupClassName="group-add-light-4"
                                rectangle="/img/rectangle-4160.png"
                                rectangleClassName="group-add-light-6"
                                subtract="/img/subtract-11.png"
                                subtractClassName="group-add-light-5"
                                vector="/img/vector-571.png"
                                vectorClassName="group-add-light-7"
                                vectorClassNameOverride="group-add-light-8"
                              />
                              <Camera camera="/img/camera.png" className="camera-instance" />
                            </div>
                          </div>
                          <div className="evento-4">
                            <div className="overlap-group-wrapper">
                              <div className="overlap-10">
                                <img className="borda-evento" alt="Borda evento" src="/img/borda-evento.png" />
                                <GroupFill
                                  className="group-fill-9"
                                  img="/img/subtract-25.png"
                                  rectangle="/img/rectangle-4160-9.png"
                                  subtract="/img/subtract-26.png"
                                />
                                <p className="text-wrapper-23">
                                  Na descrição do evento, escreva um texto que desperte a atenção do público. Dê um
                                  breve contexto do seu evento online e coloque todas as informações necessárias para
                                  que o público entenda do que se trata e se sinta atraído para garantir sua
                                  participação!
                                </p>
                                <div className="text-wrapper-24">CHURRASCO DO KONO</div>
                                <div className="group-2">
                                  <div className="text-wrapper-25">outubro</div>
                                  <div className="text-wrapper-26">22</div>
                                </div>
                                <div className="simbolo-evento-2">
                                  <div className="text-wrapper-31">Festa</div>
                                </div>
                                <div className="group-12">
                                  <div className="text-wrapper-30">Ver mais</div>
                                  <div className="group-9">
                                    <div className="group-10">
                                      <div className="overlap-group-9">
                                        <img className="foto-2" alt="Foto" src="/img/foto-3.png" />
                                        <img className="foto-5" alt="Foto" src="/img/foto-2.png" />
                                        <img className="foto-6" alt="Foto" src="/img/foto-1.png" />
                                      </div>
                                    </div>
                                    <div className="group-11">
                                      <div className="overlap-12">
                                        <div className="ellipse-19" />
                                        <MeatballsMenu className="design-component-instance-node-2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="botao-local-4">
                                  <div className="overlap-13">
                                    <img className="localizao" alt="Localizao" src="/img/localiza-o.png" />
                                    <div className="botao-editar" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="botoes-evento">
                              <Bookmark bookmark="/img/bookmark.png" className="bookmark-instance" />
                              <GroupAddLight
                                className="group-add-light-instance"
                                groupClassName="group-add-light-3"
                                img="/img/vector-572.png"
                                overlapClassName="group-add-light-2"
                                overlapGroupClassName="group-add-light-4"
                                rectangle="/img/rectangle-4160.png"
                                rectangleClassName="group-add-light-6"
                                subtract="/img/subtract-11.png"
                                subtractClassName="group-add-light-5"
                                vector="/img/vector-571.png"
                                vectorClassName="group-add-light-7"
                                vectorClassNameOverride="group-add-light-8"
                              />
                              <Camera camera="/img/camera.png" className="camera-instance" />
                            </div>
                          </div>
                        </div>
                        <div className="ellipse-20" />
                      </div>
                      <div className="opes">
                        <div className="pesquisar">
                          <img className="vector-5" alt="Vector" src="/img/vector-10.png" />
                        </div>
                        <div className="POST">
                          <div className="cupomicon">
                            <img className="intersect" alt="Intersect" src="/img/intersect-1.png" />
                            <img className="intersect-2" alt="Intersect" src="/img/intersect.png" />
                          </div>
                          <div className="overlap-group-10">
                            <div className="text-wrapper-32">NOVO CUPOM</div>
                          </div>
                        </div>
                        <div className="FOTO">
                          <div className="overlap-14">
                            <div className="text-wrapper-33">NOVO EVENTO</div>
                          </div>
                          <CalendarAddFill className="design-component-instance-node-3" />
                        </div>
                      </div>
                      <p className="por-meio-do-orange">
                        Por meio do Orange, você poderá acessar eventos recentes, criados por usuários comuns do Orange,
                        assim como contas empresariais. Isso lhe permite entrar em contato mais facilmente com as
                        pessoas nas proximidades.
                        <br />
                        <br />
                        Além disso, você poderá criar seus próprios eventos e compartilhá-los com seus amigos. Interaja
                        sem dificuldades com toda a sua região!
                      </p>
                      <div className="more">
                        <div className="overlap-15">
                          <div className="text-wrapper-34">Carregar mais eventos</div>
                          <img className="layers-fill-2" alt="Layers fill" src="/img/layers-fill.png" />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-21" />
                    <div className="ellipse-22" />
                    <div className="ellipse-23" />
                  </div>
                  <div className="overlap-16">
                    <div id="postagens" className="postagens">
                      <div className="overlap-17">
                        <div className="rectangle-11" />
                        <div className="more-2">
                          <div className="overlap-15">
                            <div className="text-wrapper-34">Carregar mais postagens</div>
                            <LayersFill className="design-component-instance-node-2" />
                          </div>
                        </div>
                        <div className="postagens-2">
                          <div className="postagem">
                            <div className="overlap-18">
                              <div className="texto-postagem">Olhem os @Rafael aqui</div>
                              <div className="perfil-postagem">
                                <div className="overlap-group-11">
                                  <div className="tempo">14 dias atrás</div>
                                  <div className="nome">Eymi</div>
                                </div>
                                <img className="img-2" alt="Foto postagem" src="/img/foto-postagem-5.png" />
                              </div>
                              <div className="reacoes-wrapper">
                                <div className="reacoes">
                                  <div className="overlap-19">
                                    <img className="vector-6" alt="Vector" src="/img/vector-16.png" />
                                    <img className="vector-7" alt="Vector" src="/img/vector-15.png" />
                                    <img className="vector-8" alt="Vector" src="/img/vector-14.png" />
                                    <div className="text-wrapper-35">32</div>
                                    <div className="text-wrapper-36">3</div>
                                  </div>
                                </div>
                              </div>
                              <div className="opcoes-2">
                                <div className="tres-pontos">
                                  <div className="ellipse-24" />
                                  <div className="ellipse-25" />
                                  <div className="ellipse-26" />
                                </div>
                                <img className="botao-repostar" alt="Botao repostar" src="/img/botao-repostar-5.png" />
                              </div>
                            </div>
                          </div>
                          <div className="postagem-2">
                            <div className="overlap-20">
                              <div className="rectangle-12" />
                              <div className="perfil-postagem-2">
                                <div className="overlap-21">
                                  <div className="tempo-2">1h atrás</div>
                                  <div className="nome-2">Maurício</div>
                                </div>
                                <div className="foto-wrapper">
                                  <img className="img-2" alt="Foto" src="/img/foto.png" />
                                </div>
                              </div>
                              <img className="img-postagem" alt="Img postagem" src="/img/img-postagem-4.png" />
                              <div className="tres-pontos-2">
                                <div className="ellipse-24" />
                                <div className="ellipse-25" />
                                <div className="ellipse-26" />
                              </div>
                              <img className="botao-repostar-2" alt="Botao repostar" src="/img/botao-repostar-4.png" />
                              <div className="texto-postagem-2">Ja to sem ideia</div>
                              <div className="reacoes-2">
                                <div className="overlap-19">
                                  <img className="vector-6" alt="Vector" src="/img/vector-16.png" />
                                  <img className="vector-7" alt="Vector" src="/img/vector-15.png" />
                                  <img className="vector-8" alt="Vector" src="/img/vector-14.png" />
                                  <div className="text-wrapper-35">32</div>
                                  <div className="text-wrapper-36">3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="postagem-3">
                            <div className="overlap-22">
                              <div className="perfil-postagem-3">
                                <div className="overlap-group-12">
                                  <div className="tempo-3">48 minutos atrás</div>
                                  <div className="nome-3">Caike</div>
                                </div>
                                <img className="img-2" alt="Foto postagem" src="/img/foto-postagem-3.png" />
                              </div>
                              <div className="overlap-23">
                                <div className="reacoes-3">
                                  <div className="overlap-19">
                                    <img className="vector-6" alt="Vector" src="/img/vector-16.png" />
                                    <img className="vector-7" alt="Vector" src="/img/vector-15.png" />
                                    <img className="vector-8" alt="Vector" src="/img/vector-14.png" />
                                    <div className="text-wrapper-35">32</div>
                                    <div className="text-wrapper-36">3</div>
                                  </div>
                                </div>
                              </div>
                              <div className="opcoes-3">
                                <div className="tres-pontos-3">
                                  <div className="ellipse-24" />
                                  <div className="ellipse-25" />
                                  <div className="ellipse-26" />
                                </div>
                                <img className="botao-repostar" alt="Botao repostar" src="/img/botao-repostar-3.png" />
                              </div>
                              <div className="texto-postagem">Bora ru?</div>
                            </div>
                          </div>
                          <div className="postagem-4">
                            <div className="overlap-24">
                              <div className="perfil-postagem-4">
                                <div className="overlap-group-13">
                                  <div className="tempo-4">33 minutos atrás</div>
                                  <div className="nome-4">Kono</div>
                                </div>
                                <img className="img-2" alt="Foto postagem" src="/img/foto-postagem-2.png" />
                              </div>
                              <div className="overlap-25">
                                <div className="reacoes-4">
                                  <div className="overlap-19">
                                    <img className="vector-6" alt="Vector" src="/img/vector-16.png" />
                                    <img className="vector-7" alt="Vector" src="/img/vector-15.png" />
                                    <img className="vector-8" alt="Vector" src="/img/vector-14.png" />
                                    <div className="text-wrapper-35">32</div>
                                    <div className="text-wrapper-36">3</div>
                                  </div>
                                </div>
                              </div>
                              <div className="opcoes-4">
                                <div className="tres-pontos-3">
                                  <div className="ellipse-24" />
                                  <div className="ellipse-25" />
                                  <div className="ellipse-26" />
                                </div>
                                <img className="botao-repostar" alt="Botao repostar" src="/img/botao-repostar-2.png" />
                              </div>
                              <div className="texto-postagem-3">Eu e meu time</div>
                            </div>
                          </div>
                          <div className="postagem-5">
                            <div className="overlap-26">
                              <div className="rectangle-13" />
                              <div className="perfil-postagem-5">
                                <div className="overlap-group-14">
                                  <div className="tempo-5">21 minutos atrás</div>
                                  <div className="nome-5">Caike</div>
                                </div>
                                <img className="img-2" alt="Foto postagem" src="/img/foto-postagem-1.png" />
                              </div>
                              <img className="img-postagem-2" alt="Img postagem" src="/img/img-postagem-1.png" />
                              <div className="opcoes-5">
                                <div className="tres-pontos-3">
                                  <div className="ellipse-24" />
                                  <div className="ellipse-25" />
                                  <div className="ellipse-26" />
                                </div>
                                <img className="botao-repostar" alt="Botao repostar" src="/img/botao-repostar-1.png" />
                              </div>
                              <p className="texto-postagem-4">Ah, veio com plastico dnv...</p>
                              <div className="reacoes-5">
                                <div className="overlap-19">
                                  <img className="vector-6" alt="Vector" src="/img/vector-16.png" />
                                  <img className="vector-7" alt="Vector" src="/img/vector-15.png" />
                                  <img className="vector-8" alt="Vector" src="/img/vector-14.png" />
                                  <div className="text-wrapper-35">32</div>
                                  <div className="text-wrapper-36">3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="postagem-6">
                            <div className="overlap-27">
                              <div className="perfil-postagem-6">
                                <div className="overlap-group-15">
                                  <div className="tempo-6">5 minutos atrás</div>
                                  <div className="nome-6">Eymi</div>
                                </div>
                                <img className="img-2" alt="Foto postagem" src="/img/foto-postagem.png" />
                              </div>
                              <div className="overlap-28">
                                <div className="reacoes-6">
                                  <div className="overlap-19">
                                    <img className="vector-6" alt="Vector" src="/img/vector-13.png" />
                                    <img className="vector-7" alt="Vector" src="/img/vector-12.png" />
                                    <img className="vector-8" alt="Vector" src="/img/vector-11.png" />
                                    <div className="text-wrapper-35">32</div>
                                    <div className="text-wrapper-36">3</div>
                                  </div>
                                </div>
                              </div>
                              <div className="opcoes-6">
                                <div className="tres-pontos">
                                  <div className="ellipse-24" />
                                  <div className="ellipse-25" />
                                  <div className="ellipse-26" />
                                </div>
                                <img className="botao-repostar" alt="Botao repostar" src="/img/botao-repostar.png" />
                              </div>
                              <div className="texto-postagem-5">Eu tava lá!</div>
                            </div>
                          </div>
                        </div>
                        <div className="opes-2">
                          <div className="pesquisar">
                            <img className="vector-5" alt="Vector" src="/img/vector-10.png" />
                          </div>
                          <div className="POST-2">
                            <img className="chat-plus-fill" alt="Chat plus fill" src="/img/chat-plus-fill.png" />
                            <div className="overlap-group-16">
                              <div className="text-wrapper-37">NOVO POST</div>
                            </div>
                          </div>
                          <div className="FOTO">
                            <ImgLoadBoxFill className="design-component-instance-node-3" />
                            <div className="overlap-29">
                              <div className="text-wrapper-38">NOVA FOTO</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-wrapper-39">Postagens</div>
                        <img className="line-7" alt="Line" src="/img/line-15.png" />
                        <p className="text-wrapper-40">
                          No Orange, você poderá visualizar postagens recentes acerca dos locais da sua cidade e eventos
                          que ocorrerão. Você ficará por dentro de tudo que acontece ao seu redor!
                        </p>
                        <p className="voc-pode-criar-suas">
                          Você pode criar suas próprias postagens de acordo com suas últimas visitas a locais da região.
                          <br />
                          <br />
                          Compartilhe suas experiências!
                        </p>
                        <p className="text-wrapper-41">
                          Acompanhe as postagens de seus amigos e muito mais! Disponível apenas no app.
                        </p>
                        <div className="text-wrapper-42">FIQUE POR DENTRO</div>
                        <div className="ellipse-27" />
                      </div>
                      <div className="ellipse-28" />
                      <div className="ellipse-29" />
                      <div className="ellipse-30" />
                      <div className="ellipse-31" />
                    </div>
                    <div className="inicio">
                      <div id="mapa" className="mapa">
                        <div className="overlap-30">
                          <div className="topico">
                            <p className="text-wrapper-43">
                              No Orange, você terá acesso a um mapa que apresentará, de forma simples e muito bem
                              visualizável, eventos próximos a você, assim como mensagens ancoradas a pontos do mapa que
                              você poderá ler apenas se estiver lá!
                            </p>
                            <img className="line-8" alt="Line" src="/img/line-15.png" />
                            <p className="text-wrapper-44">VEJA O QUE ESTÁ AO SEU ALCANCE</p>
                            <div className="overlap-group-17">
                              <div className="ellipse-32" />
                              <div className="text-wrapper-45">Mapa</div>
                            </div>
                          </div>
                          <div className="bolinhas">
                            <div className="ellipse-33" />
                            <div className="ellipse-34" />
                            <div className="ellipse-35" />
                            <div className="ellipse-36" />
                          </div>
                        </div>
                        
                        <div className="mapa-2">
                        <Mapa eventos={eventos} />
                          <div className="overlap-31">
                            <img className="mapa-3" alt="Mapa" src="/img/mapa.png" />
                            <div className="eventos-prximos">
                              <div className="trofeu">
                                <div className="overlap-group-18">
                                  <img className="vector-9" alt="Vector" src="/img/vector-9.png" />
                                  <img className="ellipse-37" alt="Ellipse" src="/img/ellipse-210-2.png" />
                                  <Trophy className="trophy-instance" trophy="/img/trophy-2.png" />
                                </div>
                              </div>
                              <img className="raio" alt="Raio" src="/img/raio-1.png" />
                              <div className="trofeu-2">
                                <div className="overlap-group-18">
                                  <img className="vector-9" alt="Vector" src="/img/vector-8.png" />
                                  <img className="ellipse-37" alt="Ellipse" src="/img/ellipse-210-1.png" />
                                  <Trophy className="trophy-instance" trophy="/img/trophy-1.png" />
                                </div>
                              </div>
                              <div className="bar">
                                <div className="overlap-32">
                                  <img className="vector-10" alt="Vector" src="/img/vector-7.png" />
                                  <div className="ellipse-38" />
                                  <Drink className="drink-instance" drink="/img/drink-4.png" />
                                </div>
                              </div>
                              <div className="bar-2">
                                <div className="overlap-32">
                                  <img className="vector-10" alt="Vector" src="/img/vector-6.png" />
                                  <div className="ellipse-38" />
                                  <Drink className="drink-instance" drink="/img/drink-3.png" />
                                </div>
                              </div>
                              <div className="bar-3">
                                <div className="overlap-32">
                                  <img className="vector-10" alt="Vector" src="/img/vector-5.png" />
                                  <div className="ellipse-38" />
                                  <Drink className="drink-instance" drink="/img/drink-2.png" />
                                </div>
                              </div>
                              <div className="bar-4">
                                <div className="overlap-32">
                                  <img className="vector-10" alt="Vector" src="/img/vector-4.png" />
                                  <div className="ellipse-38" />
                                  <Drink className="drink-instance" drink="/img/drink-1.png" />
                                </div>
                              </div>
                              <img className="bandeira" alt="Bandeira" src="/img/bandeira-3.png" />
                              <img className="bandeira-2" alt="Bandeira" src="/img/bandeira-2.png" />
                              <img className="bandeira-3" alt="Bandeira" src="/img/bandeira-1.png" />
                            </div>
                            <div className="msg-ancoradas">
                              <img className="msg" alt="Msg" src="/img/msg-8.png" />
                              <img className="msg-2" alt="Msg" src="/img/msg-7.png" />
                              <img className="msg-3" alt="Msg" src="/img/msg-6.png" />
                              <img className="msg-4" alt="Msg" src="/img/msg-5.png" />
                              <img className="msg-5" alt="Msg" src="/img/msg-4.png" />
                              <img className="msg-6" alt="Msg" src="/img/msg-3.png" />
                              <img className="msg-7" alt="Msg" src="/img/msg-2.png" />
                              <img className="msg-8" alt="Msg" src="/img/msg-1.png" />
                            </div>
                            <div className="detalhes-evento">
                              <div className="overlap-33">
                                <div className="text-wrapper-46">TITULO DO EVENTO</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="legenda">
                          <div className="eventos-4">
                            <div className="bar-5">
                              <div className="drink-wrapper">
                                <Drink className="drink-2" drink="/img/drink.png" />
                              </div>
                            </div>
                            <div className="overlap-34">
                              <div className="trofeu-3">
                                <div className="overlap-35">
                                  <img className="ellipse-39" alt="Ellipse" src="/img/ellipse-210.png" />
                                  <Trophy className="trophy-2" trophy="/img/trophy.png" />
                                </div>
                                <div className="text-wrapper-47">RODAS DE CONVERSA</div>
                              </div>
                              <div className="text-wrapper-48">CAMPEONATOS</div>
                              <img className="img-3" alt="Bandeira" src="/img/bandeira.png" />
                            </div>
                            <img className="img-3" alt="Raio" src="/img/raio.png" />
                            <p className="text-wrapper-49">ATIVAÇÕES</p>
                            <div className="text-wrapper-50">BARES</div>
                          </div>
                          <img className="msg-9" alt="Msg" src="/img/msg.png" />
                        </div>
                      </div>
                      <div className="propagandas">
                        <div className="marketing">
                          <div className="migrao">
                            <div className="overlap-36">
                              <a href="#" onClick={() => mostraInstale()}>
                                <div className="migrar-botao">
                                  <div className="overlap-group-19">
                                    <div className="rectangle-14" />
                                    <div className="text-wrapper-51">MIGRAR AGORA*</div>
                                  </div>
                                </div>
                              </a>
                              <div className="texto-superior-2">
                                <p className="orange-apresenta">
                                  <span className="span">Orange</span>
                                  <span className="text-wrapper-52">&nbsp;</span>
                                  <span className="text-wrapper-53">apresenta: Conheça os benefícios de</span>
                                </p>
                                <p className="do-nosso-plano">
                                  <span className="text-wrapper-53">do nosso</span>
                                  <span className="text-wrapper-52">&nbsp;</span>
                                  <span className="text-wrapper-54">plano empresarial</span>
                                </p>
                                <div className="fazer-parte">
                                  <div className="overlap-group-20">
                                    <div className="text-wrapper-55">FAZER PARTE</div>
                                  </div>
                                </div>
                              </div>
                              <div className="vantagens">
                                <div className="criatividade">
                                  <div className="text-wrapper-56">
                                    Mais
                                    <br />
                                    criatividade
                                  </div>
                                  <div className="overlap-group-21">
                                    <img className="vector-11" alt="Vector" src="/img/vector-216.png" />
                                    <img className="vector-12" alt="Vector" src="/img/vector-215.png" />
                                  </div>
                                </div>
                                <div className="possibilidade">
                                  <div className="text-wrapper-56">
                                    Mais
                                    <br />
                                    possibilidades
                                  </div>
                                  <img className="subtract-7" alt="Subtract" src="/img/subtract.png" />
                                </div>
                                <div className="visibilidade">
                                  <div className="overlap-37">
                                    <div className="ellipse-light" />
                                    <img
                                      className="ellipse-light-2"
                                      alt="Ellipse light"
                                      src="/img/ellipse-66-light.png"
                                    />
                                    <img className="vector-13" alt="Vector" src="/img/vector-1.png" />
                                  </div>
                                  <div className="maior-visibilidade">
                                    Maior
                                    <br />
                                    visibilidade
                                  </div>
                                </div>
                              </div>
                              <p className="text-wrapper-57">
                                *Você poderá migrar para usuário comum novamente, mesmo possuindo uma conta empresarial
                              </p>
                              <p className="a-SUA-EQUIPE-j-TEM">
                                A SUA EQUIPE JÁ TEM
                                <br />
                                UMA CONTA EMPRESARIAL?
                              </p>
                            </div>
                          </div>
                          <div className="overlap-38">
                            <div className="propagandas-wrapper">
                              <div className="propagandas-2">
                                <a
                                  className="saiba"
                                  href="https://www.peteletricaufu.com.br/ceel/evento/inicio/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <div className="overlap-group-22">
                                    <div className="text-wrapper-58">Saiba mais</div>
                                    <ArrowRight className="arrow-right-instance" />
                                  </div>
                                </a>
                                <img className="postagem-empresa" alt="Postagem" src="/img/postagem-empresa2.png" />
                                <a
                                  className="saiba-2"
                                  href="https://peteletricaufu.com.br/pet/2023/10/xeque-mate-tarde-do-xadrez/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <div className="overlap-39">
                                    <div className="text-wrapper-59">Saiba mais</div>
                                    <ArrowRight arrowRight="/img/arrow-right.png" className="arrow-right-2" />
                                  </div>
                                </a>
                                <img className="postagem-7" alt="Postagem" src="/img/postagem-empresa1.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="aba-pesquisa">
                          <div className="vector-wrapper">
                            <img className="vector-14" alt="Vector" src="/img/vector.png" />
                          </div>
                          <div className="overlap-40">
                            <img className="line-9" alt="Line" src="/img/line-12.png" />
                            <input className="pesquise-por-uma" placeholder="Pesquise por uma etiqueta..." />
                          </div>
                          <div className="etiquetas">
                            <div className="etiqueta">
                              <div className="overlap-group-24">
                                <div className="text-wrapper-60">ANIME</div>
                              </div>
                            </div>
                            <div className="etiqueta-2">
                              <div className="overlap-41">
                                <div className="text-wrapper-60">FESTA</div>
                              </div>
                            </div>
                            <div className="etiqueta-3">
                              <div className="overlap-42">
                                <div className="text-wrapper-60">CINEMA</div>
                              </div>
                            </div>
                            <div className="etiqueta-4">
                              <div className="overlap-43">
                                <div className="text-wrapper-60">SAÚDE</div>
                              </div>
                            </div>
                            <div className="etiqueta-5">
                              <div className="overlap-44">
                                <div className="text-wrapper-60">À TOA</div>
                              </div>
                            </div>
                            <div className="etiqueta-6">
                              <div className="overlap-45">
                                <div className="text-wrapper-60">COMIDA</div>
                              </div>
                            </div>
                            <div className="etiqueta-7">
                              <div className="overlap-46">
                                <div className="text-wrapper-60">REBELDES</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="botoes-superior">
                  <a href="#" onClick={() => mostraInstale()}>
                    <div className="download-wrapper">
                      <Download className="download-instance" download="/img/download-1.png" />
                    </div>
                  </a>
                  <div className="overlap-47">
                    <a href="#contato">
                      <div className="contato">
                        <div className="overlap-group-25">
                          <img className="img-4" alt="Ctt" src="/img/ctt-1.png" />
                          <div className="text-wrapper-61">CONTATO</div>
                        </div>
                      </div>
                    </a>
                    <a href="#conheca">
                      <div className="conhea-2">
                        <div className="overlap-group-25">
                          <img className="img-4" alt="Conh" src="/img/conh-1.png" />
                          <div className="text-wrapper-62">CONHEÇA</div>
                        </div>
                      </div>
                    </a>
                    <a href="#eventos">
                      <div className="eventos-5">
                        <div className="overlap-48">
                          <img className="evnt" alt="Evnt" src="/img/evnt-1.png" />
                          <div className="text-wrapper-63">EVENTOS</div>
                        </div>
                      </div>
                    </a>
                    <a href="#postagens">
                      <div className="postagens-3">
                        <div className="overlap-49">
                          <img className="img-5" alt="Post" src="/img/post-1.png" />
                          <div className="text-wrapper-64">POSTAGENS</div>
                        </div>
                      </div>
                    </a>
                    <a href="#mapa">
                      <div className="mapa-4">
                        <div className="overlap-50">
                          <img className="map" alt="Map" src="/img/map-1.png" />
                          <div className="text-wrapper-65">MAPA</div>
                        </div>
                      </div>
                    </a>
                    <a href="#superior">
                      <div className="inicio-2">
                        <div className="overlap-51">
                          <img className="inicio-botao" alt="Inicio botao" src="/img/inicio-botao-1.png" />
                          <div className="text-wrapper-66">INICIO</div>
                          <img className="botao-inicio" alt="Botao inicio" src="/img/botao-inicio-1.png" />
                          <img className="divisria" alt="Divisria" src="/img/divis-ria.png" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <div className="menu">
                  <div className="botoes-superior-2">
                    <div className="download-instance-wrapper">
                      <Download className="download-2" download="/img/download.png" />
                    </div>
                    <div className="overlap-52">
                      <div className="contato-2">
                        <div className="overlap-group-26">
                          <img className="ctt" alt="Ctt" src="/img/ctt.png" />
                          <div className="text-wrapper-67">CONTATO</div>
                        </div>
                      </div>
                      <div className="conhea-3">
                        <div className="overlap-group-26">
                          <img className="conh" alt="Conh" src="/img/conh.png" />
                          <div className="text-wrapper-68">CONHEÇA</div>
                        </div>
                      </div>
                      <div className="eventos-6">
                        <div className="overlap-53">
                          <img className="evnt-2" alt="Evnt" src="/img/evnt.png" />
                          <div className="text-wrapper-69">EVENTOS</div>
                        </div>
                      </div>
                      <div className="postagens-4">
                        <div className="overlap-54">
                          <img className="post" alt="Post" src="/img/post.png" />
                          <div className="text-wrapper-70">POSTAGENS</div>
                        </div>
                      </div>
                      <div className="mapa-5">
                        <div className="overlap-49">
                          <img className="img-5" alt="Map" src="/img/map.png" />
                          <div className="text-wrapper-71">MAPA</div>
                        </div>
                      </div>
                      <div className="inicio-3">
                        <div className="overlap-55">
                          <img className="inicio-botao-2" alt="Inicio botao" src="/img/inicio-botao.png" />
                          <div className="text-wrapper-72">INICIO</div>
                          <img className="botao-inicio-2" alt="Botao inicio" src="/img/botao-inicio.png" />
                          <img className="divisria-2" alt="Divisria" src="/img/divis-ria.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="botao-esconder">
                    <CircleLeft className="circle-left-instance" />
                  </div>
                </div>
                <div className="botao-menu">
                  <a href="#superior">
                    <div className="laranja-vector-wrapper">
                      <div className="laranja-vector">
                        <div className="coisinhos-wrapper">
                          <img className="coisinhos" alt="Coisinhos" src="/img/coisinhos.png" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <img className="line-10" alt="Line" src="/img/line-17.png" />
                </div>
              </div>
            </div>
          </div>
          <PainelTelas
            className="painel-telas-instance"
            property1="frame-10"
            telas="/img/telas-1.png"
            telasClassName="painel-telas-2"
          />
        </div>
        <div className="termos-wrapper">
          <Termos></Termos>
        </div>
      </div>
      <Instale></Instale>
    </div>
  );
};
