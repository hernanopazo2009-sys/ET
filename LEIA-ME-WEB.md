# Arquivo ET — versão web instalável

Esta pasta já pode ser publicada como um site estático e instalada como PWA (aplicativo web progressivo). Não precisa de Mac, conta Apple Developer ou servidor próprio.

## Publicar sem custo

O site precisa estar em um endereço HTTPS para habilitar instalação e leitura offline. Uma opção gratuita é o GitHub Pages:

1. Crie uma conta gratuita no GitHub e um repositório público para o projeto.
2. Envie o conteúdo desta pasta para a raiz do repositório (`index.html`, `cases.js`, `cases.css`, `pwa.js`, `sw.js`, `manifest.webmanifest` e `assets/`).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch principal e a pasta **/(root)**, e salve.
5. Aguarde o endereço HTTPS informado pelo GitHub Pages e abra-o no celular.

Não renomeie nem mova os arquivos separados: o site usa caminhos relativos para continuar funcionando em um endereço de projeto como `usuario.github.io/repositorio/`.

## Adicionar à tela inicial

- **Android:** abra o endereço no Chrome e toque em **Instalar app** (ou escolha **Adicionar à tela inicial** no menu).
- **iPhone/iPad:** abra o endereço no Safari, toque em **Compartilhar** e escolha **Adicionar à Tela de Início**.

Depois de abrir o site uma vez com internet, o catálogo e os textos principais ficam disponíveis offline. Fotos hospedadas em outros sites, fontes externas e vídeos do YouTube ainda precisam de conexão.

## Antes de divulgar

Revise as permissões e créditos das fotografias e ilustrações externas. Os vídeos incorporados continuam hospedados no YouTube e dependem da disponibilidade do serviço.
