Zottet — Full MVP (Generated 2025-11-05T04:54:47.358691)

Este repositório contém um MVP funcional (mocked storage via JSON files) pronto para deploy no Vercel.

Páginas importantes:
- /            (landing)
- /feed        (social feed)
- /upload      (criar post: texto + media url + tipo short/long)
- /post/[id]   (detalhe do post)
- /auth/login  (login - NextAuth placeholders)
- /planos      (planos e checkout)
- /schedule    (agendamento)
- /profile     (perfil mock)
- /success, /cancel (checkout)

APIs:
- /api/posts (GET)
- /api/posts/create (POST)
- /api/posts/like (POST)
- /api/posts/[id] (GET)
- /api/book (POST)
- /api/threads (GET, POST)
- /api/friends (GET, POST)
- /api/stripe/create-checkout-session (POST)
- /api/stripe/webhook (POST)
- /api/auth/[...nextauth] (NextAuth)

Variáveis de ambiente (Vercel) - use placeholders for build, replace with real keys when ready:
- NEXTAUTH_URL = https://<your-vercel-app>.vercel.app
- NEXTAUTH_SECRET = random_string_here
- GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET (optional)
- GITHUB_ID / GITHUB_SECRET (optional)
- DISCORD_CLIENT_ID / DISCORD_CLIENT_SECRET (optional)
- STRIPE_SECRET = sk_test_xxx (optional for real payments)
- STRIPE_WEBHOOK_SECRET = whsec_xxx (optional)
- SUCCESS_URL, CANCEL_URL = https://<your-vercel-app>.vercel.app/success, /cancel

Deploy (resumido):
1) Extraia este ZIP localmente.
2) Crie um novo repo no GitHub e envie todo o conteúdo extraído (não envie o ZIP).
3) No Vercel: New Project -> importe o repo.
4) Adicione as variáveis de ambiente (pode colar placeholders inicialmente).
5) Deploy e teste as páginas.

Observações técnicas:
- Armazenamento via arquivos JSON em /data funciona apenas para demo; em Vercel é efêmero. Para produção, migre para Postgres/Supabase/Firestore.
- Webhook Stripe exige a biblioteca 'micro' (já incluida em package.json).
- NextAuth está configurado com providers placeholders. Configure as keys e callbacks em cada provedor.

Se quiser, posso agora:
- Substituir storage JSON por Supabase e configurar NextAuth Adapter (Prisma) — eu gero código e migrations.
- Inserir price IDs do Stripe no /pages/planos.js se você me passar.
- Ajudar passo a passo para criar as credenciais OAuth/Stripe e adicionar no Vercel.
