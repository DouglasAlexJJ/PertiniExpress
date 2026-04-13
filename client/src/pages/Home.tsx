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
  ArrowRight,
  Check,
  Users
} from "lucide-react";

export default function Home() {
  // Contatos principais
  const whatsappNumberSandro = "5541998455070"; // Comercial/Clientes
  const whatsappNumberDouglas = "5541997341333"; // Agregados/Motoristas
  
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
    <div className="min-h-screen bg-[#faf8f3] text-slate-900 font-sans selection:bg-amber-200">
      {/* Header Corrigido */}
      <header className="fixed top-0 w-full z-50 bg-[#1e3a8a]/95 backdrop-blur-sm text-white border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center font-bold text-xl shadow-inner">P</div>
            <span className="font-serif text-xl tracking-tight font-bold italic">PERTINI <span className="text-amber-500">EXPRESS</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <button onClick={() => scrollToSection('servicos')} className="hover:text-amber-400 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-amber-400 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-amber-400 transition-colors">Contato</button>
            <button onClick={() => scrollToSection('agregar')} className="text-amber-500 hover:text-amber-400 font-bold border-b-2 border-amber-500">Agregar</button>
          </nav>

          <Button 
            className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
            onClick={() => window.open(linkSandro, '_blank')}
          >
            Falar com Comercial
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 italic">
              Excelência e Segurança no <span className="text-amber-500">Transporte Rodoviário</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
              Logística profissional com foco em pontualidade, monitoramento constante e preço justo para quem envia e para quem transporta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 h-14 px-8 text-lg" onClick={() => window.open(linkSandro, '_blank')}>
                Solicitar Cotação <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg" onClick={() => scrollToSection('servicos')}>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Soluções Logísticas Completa</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transporte Express</h3>
                <p className="text-slate-600 leading-relaxed">Entregas rápidas e eficientes com foco na urgência da sua carga.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Monitoramento Constante</h3>
                <p className="text-slate-600 leading-relaxed">Sua carga 100% segura. Monitoramos cada etapa do transporte para sua tranquilidade.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Abrangência Regional</h3>
                <p className="text-slate-600 leading-relaxed">Ampla rede de atendimento garantindo que sua mercadoria chegue ao destino.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Section Corrigida */}
      <section id="sobre" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Experiência que Gera Confiança</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                A Pertini Express nasceu com o compromisso de oferecer um serviço de transporte rodoviário diferenciado. Entendemos que cada carga é única e exige o máximo cuidado.
              </p>
              <div className="space-y-4">
                {[
                  "Profissionais altamente capacitados",
                  "Monitoramento de carga por gestão interna",
                  "Compromisso real com prazos de entrega",
                  "Preço justo e transparência em todas as pontas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-600/10 rounded-xl transform rotate-3"></div>
                <div className="relative bg-[#1e3a8a] aspect-square rounded-xl shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                  <Truck className="w-full h-full text-white/10 absolute -right-10 -bottom-10" />
                  <div className="text-center z-10">
                    <span className="text-6xl font-serif font-bold text-amber-500 italic">20+</span>
                    <p className="text-white text-lg font-medium mt-2">Anos de experiência no setor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agregue Conosco Section - NOVA */}
      <section id="agregar" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-10 md:p-16 bg-[#1e3a8a] text-white">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Users className="w-10 h-10 text-[#1e3a8a]" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Agregue Conosco!</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Buscamos parceiros que compartilham nossos valores de pontualidade e cuidado. Oferecemos um pagamento justo e parcerias duradouras para motoristas profissionais.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check className="text-amber-500" /> Pagamento pontual</li>
                <li className="flex items-center gap-3"><Check className="text-amber-500" /> Suporte operacional constante</li>
                <li className="flex items-center gap-3"><Check className="text-amber-500" /> Cargas monitoradas</li>
              </ul>
            </div>
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Seja um Parceiro</h3>
              <p className="text-slate-600 mb-8">Fale diretamente com o Douglas para conhecer nossas condições de agregamento.</p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 w-full md:w-auto h-14 px-10 shadow-lg text-lg"
                onClick={() => window.open(linkDouglas, '_blank')}
              >
                <MessageCircle className="mr-2 w-6 h-6" /> Agregue seu Veículo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé e Contatos */}
      <footer id="contato" className="bg-[#1e3a8a] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-bold">P</div>
                <span className="font-serif text-lg font-bold italic tracking-tight">PERTINI <span className="text-amber-500">EXPRESS</span></span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Referência em logística e transporte rodoviário, conectando negócios com eficiência e segurança.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-amber-500 uppercase tracking-wider text-sm">Comercial (Sandro)</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{phoneSandro}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href={`mailto:${emailPrincipal}`} className="hover:text-white transition-colors">{emailPrincipal}</a>
                </li>
                <li className="flex items-center gap-2 underline text-amber-500">
                   <a href={linkSandro} target="_blank" rel="noopener noreferrer">WhatsApp Vendas</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-amber-500 uppercase tracking-wider text-sm">Operacional (Douglas)</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2 font-medium">Fale comigo para agregar seu veículo</li>
                <li className="flex items-center gap-2 underline text-amber-500">
                  <a href={linkDouglas} target="_blank" rel="noopener noreferrer">WhatsApp Agregados</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-amber-500 uppercase tracking-wider text-sm">Atendimento</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Segunda - Sexta: 08:00 - 18:00</li>
                <li>Sábado: 08:00 - 12:00</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-xs text-white/40">
            <p>&copy; 2024 PERTINI EXPRESS LTDA | CNPJ: 053.615.257/0001-26</p>
          </div>
        </div>
      </footer>
    </div>
  );
}