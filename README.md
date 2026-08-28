# Landing Page — Sintia Calgarotto Fabiane (Fonoaudióloga)

Versão inicial ("basicão") da landing page, feita em HTML/CSS/JS puro — sem
build, sem dependências. É só abrir o `index.html` no navegador.

## Estrutura

```
index.html
assets/
  css/style.css
  js/script.js
  img/          (vazia por enquanto — coloque fotos aqui)
```

## O que já está preenchido

- Nome: Sintia Calgarotto Fabiane
- Cidade: Cascavel, PR
- Formação: FGA Neurofuncional e Neuromuscular, pós-graduada em Gerontologia
  pelo Hospital Israelita Albert Einstein
- Foco: idosos e doenças raras
- Serviços: Atendimento Domiciliar, Atendimento em Consultório (GastroClínica),
  Exame de Videofluoroscopia, Reabilitação Neurofuncional
- Podcast: FuncionalMente
- Instagram: já linkado (https://www.instagram.com/fonosintiacalgarotto)

## O que falta preencher

Procure no `index.html` pelos atributos `data-fill="..."` — são os botões
com link de placeholder (`href="#"`):

| data-fill   | Onde aparece                  | O que colocar no `href`              |
|-------------|--------------------------------|----------------------------------------|
| whatsapp    | Botão "Agendar consulta" (3x) | `https://wa.me/55DDDNÚMERO`            |
| spotify     | Seção Podcast                  | link do episódio/podcast no Spotify    |
| linkedin    | Seção Contato                  | URL do perfil do LinkedIn              |
| email       | Seção Contato                  | `mailto:email@exemplo.com`             |
| lattes      | Seção Contato                  | URL do Currículo Lattes                |

Também dá pra usar Ctrl+F/Cmd+F por `href="#"` para achar todos de uma vez.

Outros pontos marcados como "a preencher":
- Número do CRFa (seção Sobre)
- Foto profissional: hoje tem um avatar com as iniciais "SF" no lugar da foto
  (`.avatar-placeholder` no CSS). Basta colocar a imagem em `assets/img/` e
  trocar esse bloco por uma `<img>` no `index.html`.

## Como visualizar

Abra o arquivo `index.html` direto no navegador (duplo clique) ou, se
preferir um servidor local:

```
cd "landing page fonoaudiologia"
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Como publicar (gratuito)

- **GitHub Pages**: em Settings → Pages do repositório, aponte para a branch
  `main` e pasta raiz. A página fica em `https://<usuario>.github.io/<repo>/`.
- **Netlify / Vercel**: arraste a pasta do projeto no painel deles, ou conecte
  o repositório do GitHub direto.

## Próximos passos sugeridos

1. Mostrar para a Sintia e anotar o que ela quer mudar (textos, cores, fotos).
2. Preencher os links reais (tabela acima).
3. Trocar o avatar de iniciais por uma foto profissional dela.
4. Decidir se entram outras seções (depoimentos, mais serviços, FAQ, mapa/localização).
