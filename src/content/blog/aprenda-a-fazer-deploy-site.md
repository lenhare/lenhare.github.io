---
author: Renan Lenhare
pubDatetime: 2024-08-22T19:26:00Z
modDatetime: 2024-08-22T19:26:00Z
title: Aprenda a fazer o deploy do Astro Paper
slug: aprenda-a-fazer-deploy-site
featured: false
draft: false
tags:
  - tutorial
description: Como eu fiz o deploy deste site.
---

Se você se perguntou, "Nossa, que site bonito, como que faz?", segue um breve tutorial do processo de deploy de um site utilizando o template [Astro Paper](https://github.com/satnaing/astro-paper) no GitHub Pages, além de como configurar um domínio personalizado.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte:

- Node.js instalado na sua máquina.
- Conta no GitHub.
- Um domínio personalizado (opcional).

## Passo a Passo

### 1. Clonar o Repositório Astro Paper

Primeiro, você deve clonar o repositório do Astro Paper para o seu ambiente local:

```bash
git clone https://github.com/satnaing/astro-paper.git
```

### 2. Instalar Dependências

Navegue até o diretório do projeto clonado e instale as dependências necessárias:

```bash
cd astro-paper
npm install
```

### 3. Customizar o Site

Antes de fazer o deploy, personalize o site conforme necessário. Isso pode incluir:

- Alterar o conteúdo dos posts em `src/content/blog`.
- Editar o arquivo `astro.config.mjs` para ajustar configurações como o `site` e `base`.
- Modificar estilos e layouts em `src/styles` ou `src/layouts`.

### 4. Configurar para GitHub Pages

Para que o site seja publicado corretamente no GitHub Pages, faça as seguintes configurações:

1. **Editar o arquivo `astro.config.mjs`:**

   No arquivo `astro.config.mjs`, adicione a propriedade `base` com o valor do caminho do repositório no GitHub:

   ```javascript
   import { defineConfig } from "astro/config";

   export default defineConfig({
     site: "https://seuusuario.github.io/seurepositorio",
     base: "/seurepositorio/",
   });
   ```

2. **Criar um script de build:**

   No arquivo `package.json`, adicione o seguinte script de build para o GitHub Pages:

   ```json
   "scripts": {
     "build": "astro build",
     "deploy": "astro build && gh-pages -d dist"
   }
   ```

   **Nota:** Certifique-se de que a biblioteca `gh-pages` está instalada:

   ```bash
   npm install gh-pages --save-dev
   ```

### 5. Publicar no GitHub Pages

1. **Realizar o push do código para o GitHub:**

   - Adicione o repositório remoto do GitHub ao seu projeto local:

     ```bash
     git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
     ```

   - Faça commit das alterações e empurre para o GitHub:

     ```bash
     git add .
     git commit -m "Configuração para GitHub Pages"
     git push -u origin main
     ```

2. **Executar o script de deploy:**

   Para publicar o site no GitHub Pages, execute:

   ```bash
   npm run deploy
   ```

   Isso irá gerar a build do site e enviar os arquivos para o branch `gh-pages`, que é o padrão para o GitHub Pages.

3. **Ativar o GitHub Pages:**

   - Vá para o repositório no GitHub.
   - Acesse as configurações do repositório (`Settings`).
   - Na seção `Pages`, configure a branch `gh-pages` como a fonte de publicação.

### 6. Configurar o DNS para Domínio Personalizado (Opcional)

Se você tiver um domínio personalizado e deseja utilizá-lo, siga os passos abaixo:

1. **Criar o arquivo `CNAME`:**

   No diretório `public/`, crie um arquivo chamado `CNAME` com o seguinte conteúdo:

   ```text
   seu-dominio.com
   ```

2. **Configurar DNS no Provedor de Domínio:**

   No painel de controle do seu provedor de domínio, adicione um registro CNAME apontando para `seuusuario.github.io`.

   **Exemplo de configuração:**

   - **Tipo:** CNAME
   - **Nome:** www (ou vazio se for apontar o domínio raiz)
   - **Valor:** seuusuario.github.io

3. **Configurar Redirecionamento (opcional):**

   Se desejar redirecionar do domínio raiz (ex: `seu-dominio.com`) para o subdomínio `www.seu-dominio.com`, configure um redirecionamento no provedor de domínio.

### 7. Verificar o Site Online

Após configurar o DNS, pode levar até 24 horas para a propagação do domínio. Acesse o domínio personalizado para verificar se o site está funcionando corretamente.

## Conclusão

Pronto! Você fez o deploy do seu site usando o template Astro Paper no GitHub Pages e configurou um domínio personalizado. Qualquer alteração que você fizer no repositório será automaticamente publicada no site.

```

Este tutorial cobre tanto o deploy no GitHub Pages quanto a configuração do DNS para um domínio personalizado. Se precisar de mais detalhes ou ajustes, é só me avisar!
```
