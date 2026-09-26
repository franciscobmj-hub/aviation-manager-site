# Aviation Manager — website institucional

Site estático responsivo criado com a identidade visual oficial do Aviation Manager.

## Páginas
- `index.html` — Home
- `funcionalidades.html` — Visão geral dos módulos
- `agendamento.html` — Agendamento e notificações
- `revisoes.html` — Revisões e auditoria
- `custos-relatorios.html` — Custos e relatórios
- `manutencao.html` — Componentes, motores e manutenção
- `integracoes.html` — Google Calendar, Gmail e WhatsApp
- `administracao-aeronaves.html` — Teaser “Em breve”
- `seguranca.html` — Segurança e OAuth
- `contato.html` — Contato
- `acesso.html` — Entrada para o aplicativo
- `termos.html` e `privacidade.html` — modelos iniciais legais

## Antes de publicar
Edite `assets/config.js` e preencha:
- `appUrl`: URL pública do aplicativo
- `contactEmail`: e-mail comercial
- `whatsappUrl`: opcional para contato comercial
- `siteUrl`: URL final do site

## Hospedagem
O projeto é estático e pode ser enviado para hospedagem web, Locaweb, GoDaddy, Cloudflare Pages, Netlify ou outro serviço equivalente.

A pasta deve ser publicada mantendo `index.html`, as demais páginas e a pasta `assets/` no mesmo nível.

## Importante
Os textos de Termos de Uso e Política de Privacidade são modelos iniciais. Revise juridicamente antes do lançamento comercial.


## Versão bilíngue
- Português (pt-BR) permanece como versão principal na raiz do site.
- Inglês disponível em `/en/`.
- Seletor PT | EN no cabeçalho.
- `hreflang` e `sitemap.xml` configurados para SEO bilíngue.
