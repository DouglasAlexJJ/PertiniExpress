import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  MapPin, 
  Shield, 
  Phone, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Check,
  Users
} from "lucide-react";

export default function Home() {
  // Contatos principais separados
  const whatsappNumberSandro = "5541998455070"; // Comercial
  const whatsappNumberDouglas = "5541997341333"; // Agregados
  
  const msgCliente = "Olá! Gostaria de uma cotação para transporte com a Pertini Express.";
  const msgAgregado = "Olá Douglas! Tenho interesse em agregar meu veículo na Pertini Express.";
  
  const linkSandro = `https://wa.me/${whatsappNumberSandro}?text=${encodeURIComponent(msgCliente)}`;
  const linkDouglas = `https://wa.me/${whatsappNumberDouglas}?text=${encodeURIComponent(msgAgregado)}`;
  
  const emailPrincipal = "pertiniexpress@pertiniexpress.com.br";
  const phoneSandro = "(41) 99845-5070";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-slate-900 font-sans selection:bg-[#d97706]/30">
      {/* Header Premium */}
      <header className="fixed top-0 w-full z-50 bg-[#1e3a8a]/95 backdrop-blur-sm text-white border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-[#d97706] rounded flex items-center justify-center font-bold text-xl shadow-inner">P</div>
            <span className="font-serif text-xl tracking-tight font-bold italic">PERTINI <span className="text-[#d97706]">EXPRESS</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <button onClick={() => scrollToSection('servicos')} className="hover:text-[#d97706] transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#d97706] transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-[#d97706] transition-colors">Contato</button>
            <button onClick={() => scrollToSection('agregar')} className="text-[#d97706] hover:text-white font-bold transition-colors">Agregar</button>
          </nav>

          <Button 
            className="bg-[#d97706] hover:bg-[#b46204] text-white shadow-lg transition-all duration-300"
            onClick={() => window.open(linkSandro, '_blank')}
          >
            Falar com Comercial
          </Button>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 italic drop-shadow-lg">
              Excelência e Segurança no <span className="text-[#d97706]">Transporte Rodoviário</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              Logística profissional com foco em pontualidade, monitoramento constante e preço justo para quem envia e para quem transporta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#d97706] hover:bg-[#b46204] h-14 px-8 text-lg shadow-xl" onClick={() => window.open(linkSandro, '_blank')}>
                Solicitar Cotação <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white h-14 px-8 text-lg transition-all" onClick={() => scrollToSection('servicos')}>
                Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#1e3a8a]">Soluções Logísticas Completas</h2>
            <div className="w-24 h-1 bg-[#d97706] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-[#faf8f3] text-[#d97706] rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#d97706]/20">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a]">Transporte Express</h3>
                <p className="text-slate-600 leading-relaxed">Entregas rápidas e eficientes com foco na urgência da sua carga.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-[#faf8f3] text-[#d97706] rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#d97706]/20">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a]">Cargas Monitoradas</h3>
                <p className="text-slate-600 leading-relaxed">Sua carga 100% segura. Monitoramos internamente cada etapa do transporte para sua tranquilidade.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-[#faf8f3] text-[#d97706] rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#d97706]/20">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a]">Abrangência Regional</h3>
                <p className="text-slate-600 leading-relaxed">Ampla rede de atendimento garantindo que sua mercadoria chegue ao destino com segurança.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3a8a]">Experiência que Gera Confiança</h2>
              <div className="w-16 h-1 bg-[#d97706]"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                A Pertini Express nasceu com o compromisso de oferecer um serviço de transporte rodoviário diferenciado. Entendemos que cada carga é única e exige o máximo cuidado e atenção.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Profissionais altamente capacitados e experientes",
                  "Monitoramento de carga constante por nossa gestão",
                  "Compromisso real com os prazos de entrega",
                  "Preço justo e transparência em todas as etapas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d97706]/10 text-[#d97706] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#d97706]/20 rounded-xl transform rotate-3 transition-transform hover:rotate-6 duration-500"></div>
                <div className="relative bg-[#1e3a8a] aspect-square rounded-xl shadow-2xl flex items-center justify-center p-12 overflow-hidden border border-[#1e3a8a]/50">
                  <Truck className="w-full h-full text-white/5 absolute -right-10 -bottom-10" />
                  <div className="text-center z-10">
                    <span className="text-6xl font-serif font-bold text-[#d97706] italic drop-shadow-md">20+</span>
                    <p className="text-white text-lg font-medium mt-2 tracking-wide">Anos de experiência<br/>no setor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agregue Conosco Section */}
      <section id="agregar" className="py-24 bg-[#faf8f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-[#1e3a8a] to-[#152a66] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d97706] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#d97706] rounded-xl flex items-center justify-center mb-8 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Agregue Conosco!</h2>
                <div className="w-12 h-1 bg-[#d97706] mb-6"></div>
                <p className="text-white/90 mb-8 leading-relaxed text-lg">
                  Buscamos parceiros que compartilham nossos valores de pontualidade e cuidado. Oferecemos um pagamento justo e parcerias duradouras para motoristas profissionais.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><Check className="text-[#d97706] w-5 h-5" /> <span className="font-medium">Pagamento pontual e justo</span></li>
                  <li className="flex items-center gap-3"><Check className="text-[#d97706] w-5 h-5" /> <span className="font-medium">Suporte operacional constante</span></li>
                  <li className="flex items-center gap-3"><Check className="text-[#d97706] w-5 h-5" /> <span className="font-medium">Cargas monitoradas por nós</span></li>
                </ul>
              </div>
            </div>
            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center items-center text-center bg-white">
              <h3 className="text-2xl font-bold mb-4 text-[#1e3a8a]">Seja um Parceiro Pertini</h3>
              <p className="text-slate-600 mb-8 text-lg">Fale diretamente com o Douglas para conhecer nossas condições de agregamento e começar a rodar.</p>
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white w-full md:w-auto h-14 px-10 shadow-lg text-lg transition-transform hover:scale-105"
                onClick={() => window.open(linkDouglas, '_blank')}
              >
                <MessageCircle className="mr-2 w-6 h-6" /> Falar com Douglas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer id="contato" className="bg-[#1e3a8a] text-white pt-20 pb-10 border-t-4 border-[#d97706]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#d97706] rounded flex items-center justify-center font-bold shadow-inner">P</div>
                <span className="font-serif text-xl font-bold italic tracking-tight">PERTINI <span className="text-[#d97706]">EXPRESS</span></span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Referência em logística e transporte rodoviário, conectando negócios com eficiência e segurança por todo o Brasil.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold text-[#d97706] uppercase tracking-wider text-sm border-b border-white/10 pb-2">Comercial / Clientes</h3>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d97706]" />
                  <span>{phoneSandro} (Sandro)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d97706]" />
                  <a href={`mailto:${emailPrincipal}`} className="hover:text-white transition-colors">{emailPrincipal}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <a href={linkSandro} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-[#d97706]/50">WhatsApp Vendas</a>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold text-[#d97706] uppercase tracking-wider text-sm border-b border-white/10 pb-2">Agregados / Operacional</h3>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3 text-white/80">
                  <Truck className="w-4 h-4 text-[#d97706]" />
                  <span>Fale com o Douglas</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <a href={linkDouglas} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-[#d97706]/50">WhatsApp Agregados</a>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold text-[#d97706] uppercase tracking-wider text-sm border-b border-white/10 pb-2">Atendimento</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Segunda - Sexta: 08:00 - 18:00</li>
                <li>Sábado: 08:00 - 12:00</li>
                <li className="text-[#d97706] font-medium pt-2">Cargas monitoradas diariamente</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50 tracking-wider">
            <p>&copy; 2024 PERTINI EXPRESS LTDA | CNPJ: 053.615.257/0001-26</p>
          </div>
        </div>
      </footer>
    </div>
  );
}