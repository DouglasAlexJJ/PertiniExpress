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
  Check
} from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Premium Professionalism with Textures
 * - Deep blue (#1e3a8a) for trust and professionalism
 * - Gold/Bronze (#d97706) for premium highlights
 * - Warm beige/cream background (#faf8f3) for elegance
 * - Lora serif for headings, Poppins sans-serif for body
 * - Subtle textures and refined animations
 */

export default function Home() {
  // Contatos principais
  const whatsappNumber1 = "5541998455070"; // Sandro
  const whatsappNumber2 = "5541997341333"; // Douglas
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre os serviços da Pertini Express.";
  const whatsappLink1 = `https://wa.me/${whatsappNumber1}?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappLink2 = `https://wa.me/${whatsappNumber2}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress1 = "pertiniexpress@pertiniexpress.com.br";
  const emailAddress2 = "douglasalex@pertiniexpress.com.br";
  const phone1 = "(41) 99845-5070";
  const phone2 = "(41) 99734-1333";
  const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663091390989/ZU74dY8PLxXNfdVWFymdwu/pertini-express-logo_a5eb312f.png";

  const services = [
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Frota moderna e bem mantida para garantir a segurança e pontualidade de suas cargas em todo o Brasil."
    },
    {
      icon: MapPin,
      title: "Rastreamento em Tempo Real",
      description: "Sistema avançado de GPS que permite acompanhar sua carga a qualquer momento, de qualquer lugar."
    },
    {
      icon: Shield,
      title: "Segurança de Carga",
      description: "Equipes treinadas e equipamentos de segurança de última geração para proteger seus bens."
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Prazos otimizados e rotas eficientes para garantir a entrega no menor tempo possível."
    }
  ];

  const benefits = [
    "Frota moderna e certificada",
    "Motoristas experientes e treinados",
    "Cobertura em todo o Brasil",
    "Seguro abrangente",
    "Atendimento 24/7",
    "Rastreamento GPS"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="Pertini Express" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
          <a 
            href={whatsappLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-gradient">
              Transporte de Excelência para Seu Negócio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Pertini Express oferece soluções de transporte rodoviário de primeira qualidade, com frota moderna, equipes treinadas e tecnologia avançada para garantir a segurança e pontualidade de suas cargas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white h-12 px-8 rounded-lg font-medium flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale Conosco no WhatsApp
              </Button>
            </a>
            <a href={`mailto:${emailAddress1}`}>
              <Button variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-lg font-medium flex items-center justify-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </Button>
            </a>
            </div>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden premium-shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663091390989/ZU74dY8PLxXNfdVWFymdwu/hero-frota-moderna-HHxSvHHQeYjNFu8NiaZ7oz.webp"
              alt="Frota moderna Pertini Express"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="container space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-primary">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos soluções completas de transporte com tecnologia de ponta e atendimento personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border hover:border-accent transition-colors group">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-lora font-semibold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden premium-shadow">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663091390989/ZU74dY8PLxXNfdVWFymdwu/rastreamento-logistica-PUPYSW3kgzf8CUWWTh9aVH.webp"
              alt="Sistema de rastreamento"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Por Que Escolher a Pertini Express?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundada por Sandro Augusto da Rocha, profissional com ampla experiência no setor de transportes, a Pertini Express oferece soluções confiáveis, seguras e eficientes para suas necessidades logísticas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <h2 className="text-primary mb-4">Segurança em Primeiro Lugar</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sua carga é nossa responsabilidade. Contamos com sistemas de segurança de última geração, equipes treinadas e cobertura de seguro abrangente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proteção Total</h3>
                  <p className="text-sm text-muted-foreground">Seguro abrangente para todas as suas cargas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Rastreamento 24/7</h3>
                  <p className="text-sm text-muted-foreground">Acompanhe sua carga em tempo real</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Frota Certificada</h3>
                  <p className="text-sm text-muted-foreground">Veículos modernos e bem mantidos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden premium-shadow-lg order-1 md:order-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663091390989/ZU74dY8PLxXNfdVWFymdwu/seguranca-carga-RjidXLvdMsqrLWTAPf.webp"
              alt="Segurança de carga"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Speed Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden premium-shadow">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663091390989/ZU74dY8PLxXNfdVWFymdwu/entrega-rapida-85oueMQWuvnSPfcNR4d2zD.webp"
              alt="Entrega rápida"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Entrega Rápida e Confiável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Com rotas otimizadas e equipes eficientes, garantimos prazos cumpridos e entregas no tempo certo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Otimização de Rotas</h3>
                  <p className="text-sm text-muted-foreground">Tecnologia avançada para os melhores caminhos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Equipes Dedicadas</h3>
                  <p className="text-sm text-muted-foreground">Profissionais experientes e comprometidos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Suporte 24/7</h3>
                  <p className="text-sm text-muted-foreground">Sempre disponível para suas necessidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden premium-shadow-lg">
            <div className="absolute inset-0 gradient-accent opacity-90"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative p-12 md:p-20 text-center space-y-8 max-w-2xl mx-auto">
              <h2 className="text-white">Pronto para Transportar Suas Cargas?</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Entre em contato conosco e descubra como a Pertini Express pode atender às suas necessidades de transporte com excelência e profissionalismo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 h-12 px-8 rounded-lg font-medium flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <a href={`mailto:${emailAddress1}`}>
              <Button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/30 h-12 px-8 rounded-lg font-medium flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                E-mail
              </Button>
            </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="Pertini Express" className="h-10 w-auto" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Transporte rodoviário de excelência para todo o Brasil.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Navegação</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{phone1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{phone2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${emailAddress1}`} className="hover:text-white transition-colors text-xs">{emailAddress1}</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Horário</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Seg - Sex: 08:00 - 18:00</li>
                <li>Sábado: 08:00 - 12:00</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-sm text-white/80">
            <p>&copy; 2024 PERTINI EXPRESS LTDA | CNPJ: 053.615.257/0001-14 | Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
