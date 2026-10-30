# InventoreLab Brasil - guia de publicação

O site está em português, com preço principal de **R$ 79,90**. A estrutura, as cores, as fontes e a ordem das seções da página de referência foram preservadas. As capas, os mockups e as nove páginas de amostra foram substituídos por imagens dos novos materiais.

## Onde colocar os links

Abra o arquivo **config.js**, na mesma pasta de **index.html**. Você pode usar o Bloco de Notas ou um editor de código.

```js
checkoutPrincipal: "COLE_AQUI_O_LINK_DO_CHECKOUT_PRINCIPAL",
checkoutPromocional: "COLE_AQUI_O_LINK_DO_CHECKOUT_PROMOCIONAL",
preco: 79.90,
```

Substitua apenas os textos de exemplo pelos links completos, começando por `https://`. No arquivo entregue, os dois links estão vazios. Mantenha as aspas e as vírgulas. No campo numérico `preco`, use ponto, sem aspas.

| Campo | Onde é utilizado |
| --- | --- |
| `checkoutPrincipal` | Todos os botões normais de compra, inclusive o botão fixo no rodapé |
| `checkoutPromocional` | Botão de aceitar a oferta de saída com 25% de desconto |
| `preco` | Preço da oferta, resumo do pedido e botão fixo |
| `emailSuporte` | Contato nas páginas de termos, privacidade e reembolso |
| `nomeVendedor` | Identificação do responsável nas páginas de informações |
| `documentoVendedor` | Identificação comercial do responsável |
| `fimDaOferta` | Data e hora reais para a contagem regressiva, se houver |

O preço no site não muda o valor cobrado pela plataforma. Configure o checkout principal também em R$ 79,90. Se usar a promoção de 25%, o cálculo arredondado aos centavos é R$ 59,93; confira se o checkout promocional corresponde ao desconto anunciado.

Se não for utilizar checkout promocional, mantenha esse campo vazio: a janela de desconto ficará desativada. O checkout principal continua funcionando normalmente. Se o principal estiver vazio, o botão mostra que as vendas ainda não estão abertas.

## Publicar

O ZIP do site contém os arquivos que devem ser publicados juntos: `index.html`, `config.js`, `site.js`, os estilos, as três páginas informativas e a pasta `assets`.

É um site estático: **não precisa executar build nem instalar dependências**. Em uma publicação por upload, envie o conteúdo extraído da pasta do site, mantendo `index.html` na raiz. Em um repositório com deploy automático, substitua os arquivos na pasta publicada e faça o envio das alterações.

Os e-books pagos não ficam dentro da pasta pública do site. Cadastre os seis PDFs na entrega da sua plataforma de pagamento. As imagens da página são apenas amostras. A confirmação de pagamento e o envio do acesso devem ser configurados na plataforma escolhida.

## Antes de abrir as vendas

1. Insira o checkout principal e confira se o preço final é R$ 79,90.
2. Preencha os dados de atendimento e do responsável pela oferta em `config.js`.
3. Configure a entrega dos seis PDFs e faça uma compra de teste pela plataforma.
4. Confira a garantia de 30 dias anunciada e os textos de atendimento.
5. Se quiser prazo de oferta, preencha uma data real em `fimDaOferta`; vazio deixa a oferta sem contador. Não há contador que reinicia para cada visitante.
6. Releia as atividades e realize as montagens que pretende divulgar em vídeo ou como demonstração. Os projetos são propostas educacionais e não foram testados fisicamente durante a produção dos arquivos.

Os relatos da página foram mantidos como relatos da edição original, identificados dessa forma. Eles não são apresentados como avaliações da nova edição brasileira. As fotos de famílias e dos protótipos originais foram mantidas como imagens da edição de referência; as páginas de amostra e os mockups dos PDFs são da nova edição.

O pixel e o rastreamento da plataforma anterior foram removidos. Se for usar anúncios, instale depois o seu próprio pixel e os eventos do seu checkout. As páginas de informações devem ser conferidas e adaptadas às condições reais da sua operação antes da abertura das vendas.

## Conteúdo do pacote de produtos

1. Mega Pack do Pequeno Inventor - 80 projetos em 9 capítulos.
2. Plano de 7 dias do pequeno inventor.
3. Lista de materiais recicláveis.
4. Guia rápido: ajustes e testes.
5. 40 invenções para o jardim e ao ar livre.
6. A Tela Criativa - 30 projetos em que o celular é uma ferramenta, não uma distração.

Os arquivos-fonte de texto em JSON também acompanham o pacote dos produtos. São conteúdos editáveis; os PDFs já estão diagramados para leitura e impressão A4.

## Edição com imagens realistas

As imagens dos projetos e das capas foram substituídas por imagens fotorrealistas geradas por IA. São imagens ilustrativas, não fotografias de montagens fisicamente testadas. Em dois projetos de lançamento (66 e 70), a foto mostra os materiais antes da montagem; a legenda identifica esse uso. Os demais projetos têm imagens de suas montagens propostas.

O arquivo InventoreLab-Fotos.zip reúne as imagens em JPG e os prompts usados na geração. As imagens foram geradas pela ferramenta de imagens integrada. Os textos e as quantidades dos seis materiais foram mantidos.
