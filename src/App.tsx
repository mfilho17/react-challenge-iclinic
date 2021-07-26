import './App.css';
import WhatsAppBar from './components/WhatsAppBar';
import Header from './components/Header';
import Banner from './components/Banner';
import Section1 from './components/Section1';
import SectionImgText from './components/SectionImgText';
import SectionBlue from './components/SectionBlue';
import Footer from './components/Footer';

import imgTeleconsulta from './assets/images/content/teleconsulta.png';
import imgIntegracao from './assets/images/content/integracao.png';
import imgTeleconsultaW from './assets/images/content/teleconsulta-whatsapp.png';
import imgTeleconsultaG from './assets/images/content/teleconsulta-gravar.png';
import imgSeguranca from './assets/images/content/seguranca.png';
import imgDevices from './assets/images/content/devices.png';

function App() {
  return (
    <>
      <WhatsAppBar />
      <Header />
      <Banner />
      <Section1 />
      <SectionImgText direction="right" video="https://www.youtube.com/embed/_-bdo17MZlg" title="Conheça a Teleconsulta iClinic" text="Veja como a Teleconsulta do iClinic pode te auxiliar nos seus atendimentos, para que você mantenha a experiência do seu paciente com a clínica mesmo que à distância." />
      <SectionImgText direction="left" img={imgTeleconsulta} title="Atenda sem sair de casa" text="Realize seus atendimentos de forma digital e remota, orientando seus pacientes com a qualidade e experiência das consultas. Converse ao vivo por ligações de áudio e vídeo e ainda tenha o apoio dos recursos de Chat e Anotações, podendo marcar informações úteis sobre a consulta." />
      <SectionImgText direction="right" img={imgIntegracao} title="Teleconsulta integrada ao prontuário eletrônico" text="A solução de Telemedicina da iClinic é completamente integrada ao prontuário eletrônico do sistema. Você pode ver o vídeo do seu paciente ao mesmo tempo que consulta e preenche o prontuário. Muito mais praticidade e segurança para os seus atendimentos." />
      <SectionImgText direction="left" img={imgTeleconsultaW} title="Lembrete automático da teleconsulta por WhatsApp" text="O iClinic envia lembretes de consulta automáticos para os seus pacientes que possuem uma teleconsulta agendada. Esses lembretes já vão com o link e código de acesso, facilitando o ingresso do seu paciente na sala de espera virtual da teleconsulta." />
      <SectionImgText direction="right" img={imgTeleconsultaG} title="Grave suas teleconsultas" text="Você pode gravar as teleconsultas que desejar e anexá-las ao prontuário do seu paciente. Você vai poder consultar os vídeos sempre que desejar e tornar o processo de registro da consulta ainda mais prático." />
      <SectionImgText direction="left" img={imgSeguranca} title="Garanta a segurança dos seus dados com o software médico iClinic" text="Tenha a garantia de proteção e validade dos dados do consultório e dos seus pacientes, utilizando um sistema em nuvem que possui criptografia SSL 256 bits, e o acesso aos dados sigilosos é realizado apenas pelo profissional de saúde. Seu dados seguros e protegidos sempre!" />
      <SectionImgText direction="right" img={imgDevices} title="Melhore toda a experiência do seu paciente" text="Com a Teleconsulta do iClinic, você estará sempre próximo de seu paciente, mesmo que à distância. Realize seus atendimentos de qualquer lugar e para qualquer região. Nunca foi tão fácil realizar consultas com seus pacientes de uma forma digital." />
      <SectionBlue />
      <Footer />
    </>
  );
}

export default App;
