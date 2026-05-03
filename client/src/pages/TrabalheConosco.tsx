import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Truck, Users, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function TrabalheConosco() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    experiencia: "",
    veiculo: "",
    mensagem: ""
  });

  const emailAgregados = "douglasalex@pertiniexpress.com.br";
  const phoneDouglas = "(41) 99734-1333";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validar campos obrigatórios
      if (!formData.nome || !formData.email || !formData.telefone) {
        toast.error("Por favor, preencha todos os campos obrigatórios");
        setIsLoading(false);
        return;
      }

      // Construir corpo do email em formato HTML
      const emailBody = `
        <h2>Nova Candidatura - Trabalhe Conosco</h2>
        <p><strong>Nome:</strong> ${formData.nome}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefone:</strong> ${formData.telefone}</p>
        <p><strong>Cidade:</strong> ${formData.cidade}</p>
        <p><strong>Estado:</strong> ${formData.estado}</p>
        <p><strong>Anos de Experiência:</strong> ${formData.experiencia}</p>
        <p><strong>Tipo de Veículo:</strong> ${formData.veiculo}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${formData.mensagem.replace(/\n/g, '<br>')}</p>
      `;

      // Enviar email via mailto (fallback) ou API
      const mailtoLink = `mailto:${emailAgregados}?subject=Candidatura - ${formData.nome}&body=${encodeURIComponent(
        `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nCidade: ${formData.cidade}\nEstado: ${formData.estado}\nExperiência: ${formData.experiencia}\nVeículo: ${formData.veiculo}\n\nMensagem:\n${formData.mensagem}`
      )}`;

      // Abrir cliente de email
      window.location.href = mailtoLink;

      toast.success("Redirecionando para seu cliente de email...");
      
      // Limpar formulário após sucesso
      setTimeout(() => {
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          cidade: "",
          estado: "",
          experiencia: "",
          veiculo: "",
          mensagem: ""
        });
      }, 500);
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1113] text-slate-200 selection:bg-white/10">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-[#1a1c1e]/90 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-20">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <h1 className="text-xl font-bold text-white">Trabalhe Conosco</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium uppercase tracking-wider mx-auto">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Oportunidade de Parceria
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Faça Parte da Nossa Frota
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Buscamos motoristas e proprietários de veículos que compartilhem nossos valores de excelência, segurança e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#16181a] border-y border-white/5">
        <div className="container space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white">Por Que Trabalhar Conosco?</h3>
            <p className="text-lg text-slate-400">
              Oferecemos as melhores condições para nossos parceiros agregados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Pagamentos Pontuais",
                description: "Receba seus ganhos sempre em dia, sem atrasos."
              },
              {
                icon: Truck,
                title: "Suporte Dedicado",
                description: "Equipe sempre pronta para ajudar você."
              },
              {
                icon: MapPin,
                title: "Cargas Monitoradas",
                description: "Segurança total com rastreamento 24/7."
              },
              {
                icon: Phone,
                title: "Parceria de Longo Prazo",
                description: "Crescimento contínuo e oportunidades."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-[#1a1c1e] border-white/5 hover:border-white/20 transition-all group">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">Envie Seus Dados</h3>
              <p className="text-slate-400">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
            </div>

            <Card className="bg-[#1a1c1e] border-white/5">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-white">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-white">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(41) 99999-9999"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Localização */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cidade" className="text-white">Cidade</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        type="text"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado" className="text-white">Estado</Label>
                      <select
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Selecione um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>
                  </div>

                  {/* Experiência */}
                  <div className="space-y-2">
                    <Label htmlFor="experiencia" className="text-white">Anos de Experiência</Label>
                    <Input
                      id="experiencia"
                      name="experiencia"
                      type="text"
                      placeholder="Ex: 5 anos"
                      value={formData.experiencia}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                    />
                  </div>

                  {/* Tipo de Veículo */}
                  <div className="space-y-2">
                    <Label htmlFor="veiculo" className="text-white">Tipo de Veículo</Label>
                    <select
                      id="veiculo"
                      name="veiculo"
                      value={formData.veiculo}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Selecione o tipo de veículo</option>
                      <option value="Caminhão 3/4">Caminhão 3/4</option>
                      <option value="Caminhão Toco">Caminhão Toco</option>
                      <option value="Caminhão Truck">Caminhão Truck</option>
                      <option value="Van">Van</option>
                      <option value="Utilitário">Utilitário</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="mensagem" className="text-white">Mensagem Adicional</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte-nos um pouco sobre você e por que gostaria de trabalhar conosco..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-500 text-white h-12 font-bold text-base transition-all"
                  >
                    {isLoading ? "Enviando..." : "Enviar Candidatura"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="bg-[#16181a] border border-white/5 rounded-2xl p-8 space-y-6">
              <h4 className="text-xl font-bold text-white">Ou Entre em Contato Diretamente</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp/Telefone</p>
                    <a href={`https://wa.me/5541997341333`} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-green-500 transition-colors">
                      {phoneDouglas}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a href={`mailto:${emailAgregados}`} className="text-white font-semibold hover:text-green-500 transition-colors">
                      {emailAgregados}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1113] pt-24 pb-12 border-t border-white/5">
        <div className="container">
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium">
            <p>&copy; 2024 PERTINI EXPRESS LTDA | CNPJ: 053.615.257/0001-14</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
