// SEÇÃO DE MAPA DE ATUAÇÃO - Adicionar antes da seção Agregar (antes da linha 198)
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

// SEÇÃO DE COTAÇÃO - Adicionar antes da seção Agregar (antes da linha 198)
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
            const mailtoLink = `mailto:contato@pertiniexpress.com.br?subject=Solicitação de Cotação&body=${encodeURIComponent(
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
