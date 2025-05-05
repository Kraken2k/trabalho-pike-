🎉 ScrollView vs FlatList
Use FlatList quando:
Desempenho é crítico: o FlatList renderiza apenas os itens visíveis na tela, economizando memória e melhorando a performance.

Listas longas de dados: ao renderizar grandes conjuntos de dados (feeds, resultados de busca, listas de mensagens).

Comprimento de conteúdo desconhecido: quando você não sabe de antemão quantos itens serão exibidos.

Mesmo tipo de conteúdo: ao mostrar muitos itens com a mesma estrutura.

Use ScrollView quando:
Todo o conteúdo cabe na memória: exibindo uma quantidade pequena e fixa de conteúdo sem causar problemas de performance.

Conteúdo estático: telas com conteúdo predeterminado e limitado, como formulários, páginas de perfil ou detalhes.

Tipos de conteúdo mistos: quando é preciso exibir diferentes componentes de UI em um layout específico que não segue um padrão de lista.

Elementos estilo carrossel horizontal: pequenos componentes de rolagem horizontal, como carrosséis de imagens com poucos itens.

🚀 Pressable vs TouchableOpacity
Use Pressable quando:
Necessita de mais customização: o Pressable oferece mais opções para estados diferentes (pressionado, hovered, focused).

Estados de interação complexos: quando você precisa lidar com múltiplos estados de interação com controle fino.

Preparado para o futuro: o Pressable é mais novo e deve substituir os componentes Touchable ao longo do tempo.

Comportamento específico por plataforma: para customizar o comportamento em iOS, Android e web.

Manipuladores de toque aninhados: quando elementos interativos estão dentro de outros elementos interativos.

Use TouchableOpacity quando:
Efeito de fade simples: quando só precisa de uma mudança básica de opacidade ao pressionar.

Compatibilidade com código legado: em projetos antigos que já usam TouchableOpacity.

API mais simples: para uma configuração com menos opções.

Animações de opacidade específicas: quando precisa de controle preciso sobre o valor de opacidade ao pressionar.

Suporte a versões anteriores: para manter consistência com componentes já existentes.

📸 Expo Image vs React Native Image
Use Expo Image quando:
Performance: utiliza bibliotecas nativas de imagem que podem oferecer melhor desempenho.

Cache: sistema de cache integrado mais robusto e configurável.

Recursos modernos: redimensionamento inteligente, placeholders com blurhash e carregamento progressivo.

Transições: carregamento de imagem com transições suaves entre estados.

Consistência entre plataformas: comportamento mais uniforme no iOS e Android.

Adaptabilidade: melhor suporte para imagens adaptativas conforme resolução e tamanho da tela.

Use React Native Image quando:
Simplicidade: para exibição básica de imagens com configuração mínima.

Tamanho do bundle: para manter o app mais leve.

Sem dependência do Expo: em projetos que não usam Expo ou que buscam minimizar dependências.

Suporte legado: manter compatibilidade com código que já utiliza React Native Image.

Requisitos básicos: quando não são necessários recursos avançados de imagem.

👀 icon.png vs adaptive-icon.png
💥 icon.png
Ícone padrão do aplicativo que aparece na maioria dos dispositivos. É o ícone principal.

Tamanho recomendado: 1024×1024 px.

💫 adaptive-icon.png
Introduzido no Android 8.0 (Oreo), específico para dispositivos Android.

Tamanho recomendado: 1024×1024 px.

Se você não fornecer estes ícones, seu app ainda funcionará, mas usará os ícones padrão do Expo. Para publicar na App Store ou Play Store, inclua seus próprios ícones personalizados.

🎁 Diretório React Native
Você pode encontrar centenas de outras bibliotecas de terceiros em:
https://reactnative.directory

🤌 React Native Gesture Handler
Gestos criam uma experiência de usuário intuitiva.

A biblioteca React Native Gesture Handler fornece componentes nativos para reconhecimento de gestos (pan, tap, rotação etc.).

Mais detalhes: https://docs.swmansion.com/react-native-gesture-handler/docs/

🐴 React Native Reanimated
Crie animações suaves com ótima experiência de desenvolvimento.

Mais detalhes: https://docs.swmansion.com/react-native-reanimated/

Build & Publicação
Use Expo Application Services (EAS) para builds de produção.

Para publicar no Google Play Store ou App Store, é preciso conta de desenvolvedor.

O processo de aprovação pode levar dias ou semanas.

Documentação de build: https://docs.expo.dev/deploy/build-project/

Documentação de submissão: https://docs.expo.dev/deploy/submit-to-app-stores/

Passos
Acesse expo.dev e faça signup.

Instale o CLI:
npm i -g eas-cli

Faça login no EAS:
eas login

Inicialize o projeto:
eas init
(Responda “yes” quando perguntado.)

Faça o build para Android:
eas build --platform android
Isso gera um arquivo APK.

Faça o build para iOS:
eas build --platform ios
Isso gera um arquivo IPA.

Use esses arquivos para submeter ao Play Store ou App Store.

