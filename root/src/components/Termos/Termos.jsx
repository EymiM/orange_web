import React from "react";
import { SignOutSqure } from "../../components/SignOutSqure";
import "./style.css";

function oculta(){
  var x = document.getElementById("termos");
  x.style.visibility = "hidden";
}

export const Termos = () => {
  return (
    <div id="termos" className="termos">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <p className="element-introdu-o-este">
              1. Introdução
              <br />
              <br />
              Este documento define os termos de uso do Orange™ e a política de privacidade associada.
              <br />
              <br />
              2. Registro de Conta
              <br />
              <br />
              Os usuários devem fornecer informações precisas durante o registro.
              <br />
              Apenas maiores de idade (18 anos ou a idade legal da maioridade em sua jurisdição) podem se registrar.
              <br />
              <br />
              3. Privacidade
              <br />
              <br />
              As informações dos usuários, incluindo geolocalização, serão coletadas de acordo com nossa Política de
              Privacidade. Leia a Política de Privacidade para obter detalhes completos.
              <br />
              <br />
              4. Comportamento Responsável
              <br />
              <br />
              Os usuários devem se comportar de maneira respeitosa e não podem praticar assédio, perseguição ou
              atividades ilegais.
              <br />
              <br />
              5. Geolocalização
              <br />
              <br />A geolocalização é usada para encontros locais e mensagens geograficamente ancoradas.
              <br />
              Não compartilhamos a geolocalização com terceiros sem consentimento.
              <br />
              <br />
              6. Segurança
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
              Os usuários devem tomar medidas de segurança ao interagir com outros usuários.
              <br />
              Reporte comportamentos suspeitos ou inapropriados.
              <br />
              7. Conteúdo do Usuário
              <br />
              <br />
              Os usuários são responsáveis pelo conteúdo compartilhado, não sendo permitido conteúdo ilegal, difamatório
              ou obsceno.
              <br />
              8. Propriedade Intelectual
              <br />
              <br />
              Todos os direitos de propriedade intelectual do aplicativo são reservados.
              <br />
              9. Rescisão de Conta
              <br />
              <br />
              Reservamo-nos o direito de encerrar contas de usuários que violam os termos de uso.
              <br />
              10. Alterações nos Termos
              <br />
              <br />
              Os termos de uso podem ser atualizados periodicamente, com notificação aos usuários.
              <br />
              11. Jurisdição
              <br />
              <br />
              Os termos são regidos pelas leis da [inserir jurisdição] e qualquer disputa será resolvida nessa
              jurisdição.
              <br />
              12. Contato
              <br />
              <br />
              Para questões ou denúncias, entre em contato pelo e-mail [inserir endereço de e-mail de suporte].
              <br />
              13. Encerramento de Conta
              <br />
              <br />
              Os usuários podem encerrar suas contas a qualquer momento, com a exclusão de dados de acordo com nossa
              política de retenção de dados.
              <br />
              <br />
              Política de Privacidade do Orange™
              <br />
              <br />
              1. Coleta de Dados Pessoais
              <br />
              <br />O aplicativo coleta informações pessoais fornecidas pelos usuários durante o registro, incluindo
              nome, endereço de e-mail, data de nascimento e, quando permitido, informações de perfil adicionais.
              <br />
              2. Geolocalização
              <br />
              <br />O aplicativo coleta informações de geolocalização para facilitar a funcionalidade de encontros
              locais e mensagens geograficamente ancoradas.
              <br />
              3. Uso dos Dados Pessoais
              <br />
              <br />
              As informações pessoais coletadas são usadas para fornecer os serviços do aplicativo, incluindo a
              correspondência de usuários próximos.
              <br />
              Os dados de geolocalização são usados para promover encontros locais e mensagens ancoradas
              geograficamente.
              <br />
              4. Compartilhamento de Dados
              <br />
              <br />
              Não compartilhamos informações pessoais com terceiros sem o consentimento do usuário, exceto quando
              exigido por lei.
              <br />
              5. Privacidade dos Menores
              <br />
              <br />O aplicativo é destinado a maiores de idade (18 anos ou a idade legal da maioridade em sua
              jurisdição). Não coletamos intencionalmente informações de menores.
              <br />
              6. Segurança dos Dados
              <br />
              <br />
              Implementamos medidas de segurança para proteger os dados pessoais dos usuários contra acesso não
              autorizado, uso indevido ou divulgação.
              <br />
              7. Conteúdo do Usuário
              <br />
              <br />
              Os usuários são responsáveis pelo conteúdo que compartilham no aplicativo, e este pode ser visível para
              outros usuários próximos.
              <br />
              8. Cookies e Tecnologias Semelhantes
              <br />
              <br />
              Usamos cookies e tecnologias semelhantes para melhorar a experiência do usuário e coletar informações de
              uso do aplicativo.
              <br />
              9. Alterações na Política de Privacidade
              <br />
              <br />
              Podemos atualizar nossa política de privacidade periodicamente, e as alterações serão notificadas aos
              usuários.
              <br />
              10. Contato
              <br />
              <br />
              Para dúvidas, preocupações ou solicitações relacionadas à privacidade, entre em contato pelo e-mail
              [inserir endereço de e-mail de suporte].
              <br />
              11. Retenção de Dados
              <br />
              <br />
              Mantemos os dados do usuário apenas pelo tempo necessário para fornecer os serviços do aplicativo e de
              acordo com as leis aplicáveis.
              <br />
              12. Direitos dos Usuários
              <br />
              <br />
              Os usuários têm o direito de acessar, corrigir e excluir suas informações pessoais, bem como retirar seu
              consentimento a qualquer momento.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <p className="tituloTermos">Termos de Uso e Política de Privacidade</p>
        <div className="botao-sair">
          <a href="#superior" onClick={() => oculta()}>
            <div className="overlap-group">
              <div className="labelVoltar">Voltar</div>
              <SignOutSqure className="sign-out-squre-instance" signOutSqure="/img/sign-out-squre-1.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
