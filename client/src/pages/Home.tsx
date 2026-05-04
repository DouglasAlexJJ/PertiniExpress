import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  MapPin, 
  Shield, 
  Zap, 
  Phone, 
  Mail, 
  MessageCircle,
  Check,
  Users
} from "lucide-react";

export default function Home() {
  const whatsappNumberSandro = "5541998455070";
  const whatsappNumberDouglas = "5541997341333";
  
  const msgCliente = "Olá! Gostaria de uma cotação e conhecer mais sobre os serviços da Pertini Express.";
  const msgAgregado = "Olá Douglas! Tenho interesse em agregar meu veículo na Pertini Express.";
  
  const whatsappLinkSandro = `https://wa.me/${whatsappNumberSandro}?text=${encodeURIComponent(msgCliente)}`;
  const whatsappLinkDouglas = `https://wa.me/${whatsappNumberDouglas}?text=${encodeURIComponent(msgAgregado)}`;
  
  const emailAddress1 = "sandro.rocha@pertiniexpress.com.br";
  const emailAddress2 = "douglasalex@pertiniexpress.com.br";
  
  const phoneSandro = "(41) 99845-5070";
  const phoneDouglas = "(41) 99734-1333";
  
  const logoUrl = "/logo-new.webp";

  const services = [
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Frota moderna e bem mantida para garantir a segurança e pontualidade de suas cargas com preço justo."
    },
    {
      icon: MapPin,
      title: "Cargas Monitoradas",
      description: "Acompanhamento e monitoramento interno constante da sua carga para garantir total segurança durante todo o trajeto."
    },
    {
      icon: Shield,
      title: "Segurança de Carga",
      description: "Equipes treinadas e gestão rigorosa de segurança para proteger seus bens do início ao fim."
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Prazos otimizados e rotas eficientes para garantir a entrega no menor tempo possível."
    }
  ];

  const benefits = [
    "Frota moderna",
    "Motoristas experientes e parceiros",
    "Preço justo para clientes e agregados",
    "Seguro abrangente de cargas",
    "Atendimento personalizado",
    "Cargas 100% monitoradas internamente"
  ];

  return (
    <div className="min-h-screen bg-[#0f1113] text-slate-200 selection:bg-white/10">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-[#1a1c1e]/90 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="Pertini Express" className="h-14 md:h-16 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Sobre</a>
            <a href="#cotacao" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Cotação</a>
            <a href="#contato" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contato</a>

          </nav>
          <a 
            href={whatsappLinkSandro}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all text-sm font-semibold shadow-lg shadow-green-900/20"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Logística de Alta Performance
            </div>
            <h1 className="text-gradient leading-[1.2] pb-2">
              Transporte de Excelência para Seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A Pertini Express oferece soluções de transporte rodoviário de primeira qualidade, com monitoramento rigoroso e foco total na segurança da sua carga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#cotacao">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white h-14 px-10 rounded-full font-bold text-base transition-all">
                  Solicitar Cotação
                </Button>
              </a>
              <a href={whatsappLinkSandro} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-full font-bold text-base border-white/10 text-white hover:bg-white/5">
                  Fale com o Comercial
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#1a1c1e] border border-white/10 flex items-center justify-center shadow-2xl">
              <img 
                src={logoUrl} 
                alt="Pertini Express Logo" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#16181a] border-y border-white/5">
        <div className="container space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-white">Nossos Serviços</h2>
            <p className="text-lg text-slate-400">
              Soluções completas de transporte com foco total em segurança e atendimento personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-[#1a1c1e] border-white/5 hover:border-white/20 transition-all group">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-32 bg-gradient-to-b from-[#0f1113] to-[#16181a]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1113]">
              <img 
                src="/mapa-brasil.jpg"
                alt="Mapa de Atuação Brasil"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1113] via-transparent to-transparent"></div>
              
              {/* Pontos de destaque no mapa (efeito visual) */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping delay-700"></div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Por Que Escolher a <span className="text-green-500">Pertini Express?</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Fundada por Sandro Augusto da Rocha, a Pertini Express oferece soluções confiáveis e eficientes, valorizando tanto o cliente quanto nossos motoristas parceiros em todo o território nacional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-slate-200 font-semibold text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-slate-300 italic">
                  "Nossa missão é conectar o Brasil com segurança e agilidade, tratando cada carga como se fosse nossa."
                </p>
                <p className="text-white font-bold mt-4">— Sandro Augusto da Rocha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Atuação Section */}
      <section className="py-24">
        <div className="container space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-white">Atuamos em Todo o Brasil</h2>
            <p className="text-lg text-slate-400">
              Com uma rede de parceiros espalhada por todo o território nacional, garantimos entrega rápida e segura em qualquer região do Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#16181a] border-white/5 hover:border-white/20 transition-all">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="text-4xl font-bold text-green-500">27</div>
                <h3 className="text-xl font-semibold text-white">Estados Atendidos</h3>
                <p className="text-slate-400 text-sm">Cobertura completa em todo o Brasil</p>
              </CardContent>
            </Card>
            <Card className="bg-[#16181a] border-white/5 hover:border-white/20 transition-all">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="text-4xl font-bold text-green-500">24/7</div>
                <h3 className="text-xl font-semibold text-white">Suporte Contínuo</h3>
                <p className="text-slate-400 text-sm">Atendimento em tempo real</p>
              </CardContent>
            </Card>
            <Card className="bg-[#16181a] border-white/5 hover:border-white/20 transition-all">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="text-4xl font-bold text-green-500">100%</div>
                <h3 className="text-xl font-semibold text-white">Rastreamento</h3>
                <p className="text-slate-400 text-sm">Todas as cargas monitoradas</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#16181a] border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Principais Regiões de Atuação</h3>
              <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Região Sudeste:</strong> SP, RJ, MG, ES
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Região Sul:</strong> PR, SC, RS
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Região Centro-Oeste:</strong> GO, MT, MS, DF
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Região Nordeste:</strong> BA, PE, CE, RN, PB
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Região Norte:</strong> PA, AM, RO, AC, AP, TO, RR
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <strong>Maranhão e Piauí</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cotação Section */}
      <section id="cotacao" className="py-24 bg-[#16181a] border-y border-white/5">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-white">Solicite Uma Cotação</h2>
              <p className="text-lg text-slate-400">
                Preencha o formulário abaixo com os dados da sua carga e receba uma cotação personalizada.
              </p>
            </div>

            <Card className="bg-[#1a1c1e] border-white/5">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const mailtoLink = `mailto:pertini@pertiniexpress.com.br?subject=Solicitação de Cotação&body=${encodeURIComponent(
                    `Nome: ${formData.get('nome')}\nEmail: ${formData.get('email')}\nTelefone: ${formData.get('telefone')}\n\nDados da Carga:\nOrigem: ${formData.get('origem')}\nDestino: ${formData.get('destino')}\nTipo de Carga: ${formData.get('tipo')}\nPeso: ${formData.get('peso')}\nDimensões: ${formData.get('dimensoes')}\n\nObservações: ${formData.get('observacoes')}`
                  )}`;
                  window.location.href = mailtoLink;
                }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Nome Completo *</label>
                      <input type="text" name="nome" placeholder="Seu nome" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email *</label>
                      <input type="email" name="email" placeholder="seu@email.com" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Telefone/WhatsApp *</label>
                    <input type="tel" name="telefone" placeholder="(XX) 9XXXX-XXXX" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Origem (Cidade/Estado) *</label>
                      <input type="text" name="origem" placeholder="São Paulo, SP" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Destino (Cidade/Estado) *</label>
                      <input type="text" name="destino" placeholder="Rio de Janeiro, RJ" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Tipo de Carga *</label>
                    <input type="text" name="tipo" placeholder="Ex: Eletrônicos, Alimentos, Móveis, etc" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Peso (kg) *</label>
                      <input type="number" name="peso" placeholder="1000" required className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Dimensões (L x A x P)</label>
                      <input type="text" name="dimensoes" placeholder="100x100x100 cm" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Observações Adicionais</label>
                    <textarea name="observacoes" placeholder="Informações importantes sobre a carga..." rows={4} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white h-12 font-bold">
                    Enviar Cotação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Agregar Section */}
      <section id="agregar" className="py-24 bg-[#16181a] border-y border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
                <Users className="w-4 h-4" /> Para Motoristas
              </div>
              <h2 className="text-white">Agregue seu Veículo Conosco</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Buscamos parceiros que compartilhem nossos valores. Acreditamos que o sucesso começa com o respeito e o preço justo aos nossos agregados.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Pagamentos pontuais", 
                "Suporte dedicado", 
                "Parceria de longo prazo", 
                "Cargas monitoradas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-slate-200 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href={whatsappLinkDouglas} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 h-14 px-10 rounded-full font-bold text-base shadow-xl shadow-white/5">
                  Fale com o Douglas
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1c1e] to-[#0f1113] border border-white/10 flex flex-col justify-center items-center text-center p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto shadow-2xl">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl text-white">Faça Parte da Frota</h3>
              <p className="text-slate-400 text-lg max-w-xs mx-auto">
                Traga seu veículo e venha crescer junto com quem valoriza seu trabalho.
              </p>
            </div>
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#0f1113] pt-24 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <img src={logoUrl} alt="Pertini Express" className="h-12 w-auto" />
              <p className="text-slate-500 text-sm leading-relaxed">
                Transporte rodoviário de excelência, unindo segurança para clientes e valorização para parceiros.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navegação</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>

                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Comercial</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>{phoneSandro}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <a href={`mailto:${emailAddress1}`} className="hover:text-white transition-colors">{emailAddress1}</a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Agregados</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>{phoneDouglas}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <a href={`mailto:${emailAddress2}`} className="hover:text-white transition-colors">{emailAddress2}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium">
            <p>&copy; 2024 PERTINI EXPRESS LTDA | CNPJ: 053.615.257/0001-14</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
