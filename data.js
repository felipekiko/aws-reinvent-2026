// Dados da agenda — AWS re:Invent 2026 (horários de Las Vegas, PST)
// cat: talk | grant | sess | walk | inv | off | play | fly | logi | party
// Sem dados pessoais, hotel, voos ou day-offs — seguro para hospedagem pública.
window.AGENDA = {
  event: { name: "AWS re:Invent 2026", start: "2026-11-30", end: "2026-12-04", tz: "America/Los_Angeles" },
  days: [
    { date: "2026-11-29", label: "Dom 29/Nov", sub: "Pré-evento", items: [
      { s: "14:30", e: "19:00", cat: "party", t: "Kubernetes Automation Day", p: "Rockhouse, Venetian" },
      { s: "18:00", e: "00:00", cat: "party", t: "HabileLabs Kickoff Night", p: "Endereço no registro" }
    ]},
    { date: "2026-11-30", label: "Seg 30/Nov", sub: "Dia 1", items: [
      { s: "08:00", e: "14:00", cat: "party", t: "Stripe Breakfast / Day Party", p: "Mon Ami Gabi, Paris" },
      { s: "08:00", e: "17:00", cat: "inv", t: "Community Builder Hangout", p: "The Stadium, Palazzo" },
      { s: "10:00", e: "11:00", cat: "walk", t: "SEC302 Governance foundations for AI workloads", p: "Wynn/Encore" },
      { s: "11:30", e: "13:00", cat: "comm", t: "OBRIGATÓRIO · Builder Community Hangout + LATAM Mixer Meetup", p: "The Stadium, Palazzo", note: "Sair ~12:15 para o ARC311-R (Wynn, 10–15 min a pé)" },
      { s: "12:30", e: "14:30", cat: "sess", t: "ARC311-R When agents disagree: competing goals in cloud ops", p: "Wynn/Encore · Upper Convention Promenade · Cristal 3", note: "Workshop · levar laptop · pode chegar uns minutos atrasado vindo do Hangout" },
      { s: "15:30", e: "17:30", cat: "sess", t: "ARC331 SaaS Agents Anywhere: distributed agentic deployments", p: "Wynn/Encore · Level 1 · Encore Ballroom 1", note: "Workshop · levar laptop" },
      { s: "16:00", e: "18:00", cat: "expo", t: "🧭 Visitar a Expo (abertura)", p: "Venetian · Level 2 · Hall B", note: "Lembrete. A Expo abre às 16h, junto do ARC331: ir assim que sair do workshop (17:30). Fecha às 19h." },
      { s: "16:00", e: "19:00", cat: "party", t: "Welcome Reception", p: "Expo Hall, Venetian", note: "Acesso com badge" },
      { s: "17:30", e: "21:00", cat: "comm", t: "AWS Community Builders Mixer", p: "The Stadium, Palazzo", note: "Levar o badge. O Hangout fecha às 17h e todos saem; check-in do Mixer a partir das 17:30. Sem acompanhantes. Tem swag." },
      { s: "18:00", e: "21:00", cat: "party", t: "Voice AI Happy Hour (AssemblyAI & Vapi)", p: "Topgolf, 4627 Koval Ln", note: "Sobrepõe o Mixer (17:30–21:00): escolher um" },
      { s: "19:00", e: "22:00", cat: "party", t: "Off Call: A Party for Humans (Clerk)", p: "Wynn Las Vegas" },
      { s: "19:00", e: "01:00", cat: "party", t: "House of Kube", p: "INDUSTRIAL event space, 2330 S Industrial Rd", note: "Fora da Strip: ir de Uber" },
      { s: "20:00", e: "22:00", cat: "party", t: "Redis Welcome Party", p: "Cañonita, Venetian Shoppes" }
    ]},
    { date: "2026-12-01", label: "Ter 1/Dez", sub: "Dia 2", items: [
      { s: "08:00", e: "17:00", cat: "inv", t: "Community Builder Hangout", p: "The Stadium, Palazzo" },
      { s: "06:00", e: "07:30", cat: "party", t: "Intuitive 5k Run 🏅", p: "The Venetian Las Vegas" },
      { s: "08:00", e: "10:30", cat: "comm", t: "CEO Keynote · assistir no Builder Community Hangout", p: "The Stadium, Palazzo", note: "Ou no auditório (KEY002, 8:30, Venetian). Depois da keynote: Builder Minifig Bar no Hangout" },
      { s: "11:30", e: "12:30", cat: "walk", t: "SVS336 Building production AI agents on AWS", p: "Caesars Forum" },
      { s: "13:30", e: "14:30", cat: "walk", t: "DVT320 How Kiro learns", p: "Caesars Forum" },
      { s: "15:00", e: "17:00", cat: "party", t: "Más allá de los Techos de Cristal", p: "Wynn Golf Club", note: "Bate com o IND363 (15:30): dá só para passar no começo e sair 15:15" },
      { s: "15:30", e: "17:30", cat: "sess", t: "IND363 Defeat Player Evasion: AI Moderation at Scale", p: "Caesars Forum · Level 1 · Forum 101", note: "Workshop · levar laptop" },
      { s: "17:00", e: "19:00", cat: "party", t: "Executive Cocktail Hour - Holiday Edition", p: "North Show Terrace, Wynn", star: true },
      { s: "18:00", e: "20:00", cat: "party", t: "A Heroes' Welcome: CodeRabbit Reception", p: "Cañonita, Venetian Shoppes" },
      { s: "18:00", e: "20:00", cat: "party", t: "Shift into Happy Hour (Thoughtworks)", p: "Opium Room, TAO, Venetian" },
      { s: "18:00", e: "20:00", cat: "party", t: "New Relic Customer & Partner Appreciation", p: "Vista Cocktail Lounge, Caesars Palace" },
      { s: "18:00", e: "21:00", cat: "party", t: "FinOps After Dark (Finout)", p: "Rockhouse, Venetian", star: true },
      { s: "18:00", e: "21:00", cat: "party", t: "Deepgram Speak Easy", p: "Allē Lounge on 66, Resorts World" },
      { s: "18:00", e: "22:00", cat: "party", t: "House of Valkey", p: "HaSalon, Palazzo" },
      { s: "18:30", e: "21:30", cat: "party", t: "Spacelift + Topgolf", p: "Topgolf, 4627 Koval Ln" },
      { s: "19:00", e: "22:00", cat: "inv", t: "LATAM Reception (convite AWS)", p: "XS, Wynn", star: true },
      { s: "19:00", e: "22:00", cat: "party", t: "Agents After Dark (Vercel, Anthropic, Notion)", p: "CUT by Wolfgang Puck, Venetian" },
      { s: "19:00", e: "23:00", cat: "party", t: "AI Trivia Night", p: "Smelly Cat Karaoke Bar, Horseshoe" },
      { s: "20:00", e: "00:00", cat: "party", t: "Attribute & DoiT à Paris", p: "Chéri Rooftop, Paris" },
      { s: "20:45", e: "23:45", cat: "party", t: "Flight Club with PlanetScale, Laravel & Sentry", p: "Flight Club, Palazzo", note: "No Luma aparece Pending — conferir" },
      { s: "21:00", e: "23:00", cat: "party", t: "re:Target Happy Hour (Act)", p: "Flight Club, Palazzo" }
    ]},
    { date: "2026-12-02", label: "Qua 2/Dez", sub: "Palestra + grant", items: [
      { s: "07:00", e: "10:00", cat: "party", t: "CISO Games GYM", p: "The Strip Barbell, 4335 Dean Martin Dr Suite 410" },
      { s: "08:00", e: "14:00", cat: "party", t: "GitHub Social Club", p: "El Segundo Sol, Fashion Show" },
      { s: "08:00", e: "14:00", cat: "inv", t: "Community Builder Hangout", p: "The Stadium, Palazzo" },
      { s: "10:00", e: "11:00", cat: "walk", t: "OPN305 Agents need names too", p: "MGM Grand" },
      { s: "12:30", e: "12:50", cat: "walk", t: "COM340 Lambda MicroVMs", p: "Wynn/Encore" },
      { s: "14:00", e: "14:30", cat: "logi", t: "Chegar no Builder Loft e preparar o quadro", p: "Caesars Forum · Level 1" },
      { s: "14:30", e: "15:30", cat: "talk", t: "🎤 MINHA PALESTRA — Building and Deploying PacMon with Kiro on AWS!", p: "AWS Builder Loft · Content Hub · Level 1 · Booth #118-125 · Caesars Forum", note: "Conversa aberta, até 50 pessoas · só quadro branco (sem projetor e sem microfone)" },
      { s: "15:30", e: "16:00", cat: "logi", t: "Caminhar até o Encore (UG Meeting)", p: "Encore", note: "~25 min a pé saindo do Caesars Forum (atrás do Harrah's/LINQ)" },
      { s: "16:00", e: "17:00", cat: "grant", t: "💜 UG Meeting (grant)", p: "Encore · Room 5", note: "Oficial 14:30–17:00 (lightning talks). A foto oficial dos UGs é no fim (\"Photo time\"). Não dá para ir no grupo que sai do Hangout às 14:00." },
      { s: "17:30", e: "21:00", cat: "grant", t: "💜 UG Mixer", p: "The Stadium, Palazzo", note: "Jantar + networking. Só com guest list, sem acompanhantes. Swag dos UGs: retirar na SAÍDA do Mixer (único ponto de retirada)." },
      { s: "18:00", e: "21:00", cat: "party", t: "A Cut Above the Rest (Elastic & AWS)", p: "CUT by Wolfgang Puck, Venetian", note: "Sobrepõe o UG Mixer (17:30–21:00): escolher um" },
      { s: "21:00", e: "22:30", cat: "party", t: "Do Not Disturb Activated", p: "TAO Nightclub, Venetian", star: true },
      { s: "21:00", e: "22:30", cat: "party", t: "NeuBird After Hours", p: "TAO Nightclub, Venetian" },
      { s: "21:00", e: "22:00", cat: "party", t: "Agents After Dark Masquerade (1Password)", p: "Grand Lux Café, Venetian" },
      { s: "21:00", e: "23:30", cat: "party", t: "Afterparty / Below Deck (Eon)", p: "Juliet Cocktail Room, Venetian", star: true },
      { s: "21:00", e: "00:00", cat: "party", t: "Agent Afters", p: "Superfrico, Cosmopolitan" },
      { s: "21:00", e: "01:00", cat: "party", t: "Mission Cloud Ignite'26 (Nelly)", p: "OMNIA, Caesars Palace" },
      { s: "21:00", e: "22:30", cat: "party", t: "Cloudflare After Dark com Steve Aoki & the Spazmatics", p: "Brooklyn Bowl, 3545 S Las Vegas Blvd" },
      { s: "21:00", e: "00:00", cat: "party", t: "Duckbill / Last Week in AWS", p: "Atomic Liquors, 917 E Fremont St", note: "Longe: Uber ~20 min" }
    ]},
    { date: "2026-12-03", label: "Qui 3/Dez", sub: "Dia 4", items: [
      { s: "09:00", e: "00:00", cat: "party", t: "re:Invent Limo Hop (Unsiloed AI)", p: "Local após aprovação", note: "Dura até sex 18:00; na sexta só dá de manhã" },
      { s: "10:00", e: "12:00", cat: "expo", t: "🧭 Visitar a Expo (último dia)", p: "Venetian · Level 2 · Hall B", note: "Lembrete. Último dia da Expo: 10h–16h" },
      { s: "10:00", e: "15:00", cat: "inv", t: "Community Builder Hangout", p: "The Stadium, Palazzo", note: "Na quinta fecha às 15h" },
      { s: "15:00", e: "16:00", cat: "walk", t: "AIM369 Workflow agents on AgentCore", p: "MGM Grand" },
      { s: "16:00", e: "17:00", cat: "walk", t: "SVS348 Serverless compute built for the web", p: "MGM Grand" },
      { s: "16:00", e: "17:30", cat: "party", t: "pre:Play Happy Hour (Elastic & AWS)", p: "CUT by Wolfgang Puck, Venetian" },
      { s: "17:00", e: "20:00", cat: "party", t: "CISO Strategy Salon (Exaforce)", p: "CarverSteak, Resorts World" },
      { s: "17:00", e: "22:00", cat: "party", t: "Cerebras VIP Reception", p: "Local após aprovação", note: "Sobrepõe o início da re:Play (19:30)" },
      { s: "19:30", e: "00:00", cat: "play", t: "🎉 re:Play Party", p: "Las Vegas Festival Grounds", note: "Shuttles a partir das 19:00 · acesso com badge" },
    ]},
    { date: "2026-12-04", label: "Sex 4/Dez", sub: "Último dia", items: [
      { s: "08:30", e: "09:30", cat: "walk", t: "COM320 Lights, Camera, Fargate", p: "Venetian" },
    ]}
  ],
  talk: {
    title: "Building and Deploying PacMon with Kiro on AWS!",
    when: "Quarta, 2/Dez · 14:30–15:30 PT (planejar 45 min)",
    where: "AWS Builder Loft · Content Hub · Level 1 · Booth #118-125 · Caesars Forum",
    mapQuery: "Caesars Forum Las Vegas",
    hosts: "Felipe KiKo & Flávio Pimenta · AWS User Group Campinas",
    format: [
      "Conversa, não apresentação: sem slides formais, sem projetor e sem microfone",
      "Até 50 pessoas · ~5 mesas redondas + poltronas + lugar em pé",
      "Quadro branco grande com marcadores · welcome desk, ambassadors e scanner de sessão",
      "Em português (pt-BR), com legendas automáticas em inglês (compromisso público no resumo)",
      "Nível 200 · AI, Architecture · Games"
    ],
    flow: [
      { t: "0–5 min", d: "Boas-vindas: hosts + rodada rápida de nomes e o que trouxe cada um" },
      { t: "5–12 min", d: "Primer (até 10 min): o PacMon hoje e o plano para multiplayer com Kiro + AWS. Esboço no quadro" },
      { t: "12–38 min", d: "Discussão aberta: usar as perguntas, deixar a sala conduzir, chamar as vozes mais quietas" },
      { t: "38–45 min", d: "Encerramento: registrar os pontos no quadro, conectar pessoas, pedir a pesquisa no app" }
    ],
    questions: [
      "Qual feature o PacMon deveria ganhar a seguir e como você a construiria?",
      "Como você desenharia um multiplayer em tempo real na AWS?",
      "Onde o Kiro ou o desenvolvimento assistido por IA ajudou ou atrapalhou?",
      "Como levar um protótipo para a nuvem rápido e com segurança?",
      "Quais serviços AWS usar para matchmaking e estado do jogo?",
      "O que as comunidades AWS brasileiras estão construindo que os outros deveriam conhecer?"
    ],
    habits: [
      "Chegar 15 min antes e fazer check-in com o ambassador",
      "Primer com menos de 10 min: diagrama ou demo rápida, depois 3 a 5 perguntas",
      "Aprofundar em trade-offs, modos de falha, custo e o que fariam diferente",
      "Conectar pessoas com problemas parecidos"
    ],
    before: [
      "Reconferir o Wi-Fi e testar o jogo e a AWS pelo celular",
      "Carregar laptop, celular, power bank e carregadores",
      "Revisar o ambiente AWS: no ar, sem erro e dentro do orçamento",
      "Ter no celular (ou impresso): diagrama, perguntas e QR codes",
      "14:15 · chegar ao Builder Loft e fazer check-in com o ambassador",
      "Conhecer o espaço: quadro, marcadores, mesas, onde ficar para falar alto",
      "Montar o livestream (se autorizado) e testar o áudio",
      "Ligar as legendas automáticas em inglês e testar",
      "Escrever no quadro o título e as perguntas iniciais"
    ],
    during: [
      "Selfie com a plateia no início (postar no Slack dos meetups)",
      "Falar em português e em voz alta (não há microfone)",
      "Primer de até 10 min: problema, arquitetura, demo curta",
      "Convidar a plateia a entrar no jogo pelo QR code",
      "Anotar sugestões no quadro e conectar pessoas",
      "Pedir que todos respondam a pesquisa da sessão no app AWS Events",
      "Encerrar no horário, com agradecimentos",
      "Alguém tira fotos (plateia, quadro, brindes)"
    ],
    after: [
      "Responder a pesquisa da sessão no app (hosts também)",
      "Fotografar o quadro branco e salvar os contatos",
      "Postar selfie e fotos no Slack dos meetups e nas redes (#AWSreinvent)",
      "Confirmar que o livestream foi gravado",
      "Caminhar ~25 min até o UG Meeting (Encore, Room 5) — foto oficial no fim"
    ],
    wifi: { ssid: "@re:Invent26", pass: "@re:Invent26", note: "Confirmado no KBYG dos UG Leaders. O nome da rede também fica nas placas do local. Cabo só com registro de MAC na equipe de rede da AWS." },
    contact: "Atraso, cancelamento ou problema: Slack dos hosts @halpaxto ou @coreydst. Telefone no e-mail do Paxton (20/11).",
    links: [
      { n: "Jogar o PacMon", u: "https://flap.github.io/pacmon/" },
      { n: "Artigo do Flávio no Builder Center", u: "https://builder.aws.com/content/3L6GM0fw2bmV1kW96Rtwftw4z95/from-spec-to-production-with-ai-building-pacmon-in-vue-3-live-with-kiro" },
      { n: "Know Before You Go (Community Builders)", u: "https://d24exsrkda6dvw.cloudfront.net" }
    ]
  },
  links: [
    { g: "Planejamento", items: [
      { n: "re:Invent Planning (guia do Pimenta)", d: "Guia de planejamento da viagem e do evento", u: "https://flap.github.io/reInventPlanning/" },
      { n: "Know Before You Go · Community Builders", d: "Hangout, CB Mixer, meetups, badge e como chegar ao Stadium", u: "https://d24exsrkda6dvw.cloudfront.net/" }
    ]},
    { g: "Swag e caça ao tesouro", items: [
      { n: "Swag Quest", d: "Mapa da Expo + catálogo de brindes por estande, informado pelos participantes", u: "https://swagquest.com/" },
      { n: "SWAG HUNTERS", d: "Swag e concursos antes que acabem", u: "https://swag.carlicode.com/#/descubrir" },
      { n: "RE:INVENT HUNT '26 (VidQE)", d: "Caça ao vivo de swag, sessões, festas e prêmios", u: "https://vidqe.secada.in/reinvent/index.html" }
    ]}
  ],
  walk: { note: "Estimativa oficial (KBYG UG Leaders), em minutos a pé. Caesars Forum fica atrás do Harrah's/LINQ; Palazzo = Venetian.", from: {"Aria": {"Bellagio": 10, "Cosmopolitan": 10, "Encore": 50, "Flamingo": 20, "Harrah's": 25, "LINQ": 25, "Mirage": 35, "TI": 35, "Venetian": 40, "Wynn": 40, "Mandalay Bay": 30, "MGM": 11}, "Bellagio": {"Aria": 10, "Cosmopolitan": 10, "Encore": 45, "Flamingo": 10, "Harrah's": 15, "LINQ": 15, "Mirage": 25, "TI": 20, "Venetian": 15, "Wynn": 20, "Mandalay Bay": 45, "MGM": 20}, "Cosmopolitan": {"Aria": 10, "Bellagio": 10, "Encore": 40, "Flamingo": 15, "Harrah's": 20, "LINQ": 20, "Mirage": 25, "TI": 30, "Venetian": 25, "Wynn": 35, "Mandalay Bay": 40, "MGM": 20}, "Encore": {"Aria": 50, "Bellagio": 45, "Cosmopolitan": 40, "Flamingo": 30, "Harrah's": 25, "LINQ": 25, "Mirage": 25, "TI": 15, "Venetian": 20, "Wynn": 5, "Mandalay Bay": 60, "MGM": 40}, "Flamingo": {"Aria": 20, "Bellagio": 10, "Cosmopolitan": 15, "Encore": 30, "Harrah's": 5, "LINQ": 5, "Mirage": 10, "TI": 15, "Venetian": 20, "Wynn": 20, "Mandalay Bay": 45, "MGM": 25}, "Harrah's": {"Aria": 25, "Bellagio": 15, "Cosmopolitan": 20, "Encore": 25, "Flamingo": 5, "LINQ": 5, "Mirage": 5, "TI": 10, "Venetian": 10, "Wynn": 15, "Mandalay Bay": 55, "MGM": 30}, "LINQ": {"Aria": 25, "Bellagio": 15, "Cosmopolitan": 20, "Encore": 25, "Flamingo": 5, "Harrah's": 5, "Mirage": 5, "TI": 10, "Venetian": 10, "Wynn": 20, "Mandalay Bay": 50, "MGM": 25}, "Mirage": {"Aria": 35, "Bellagio": 25, "Cosmopolitan": 25, "Encore": 25, "Flamingo": 10, "Harrah's": 5, "LINQ": 5, "TI": 5, "Venetian": 10, "Wynn": 15, "Mandalay Bay": 55, "MGM": 30}, "TI": {"Aria": 35, "Bellagio": 20, "Cosmopolitan": 30, "Encore": 15, "Flamingo": 15, "Harrah's": 10, "LINQ": 10, "Mirage": 5, "Venetian": 5, "Wynn": 10, "Mandalay Bay": 60, "MGM": 35}, "Venetian": {"Aria": 40, "Bellagio": 30, "Cosmopolitan": 25, "Encore": 20, "Flamingo": 20, "Harrah's": 10, "LINQ": 10, "Mirage": 10, "TI": 5, "Wynn": 15, "Mandalay Bay": 60, "MGM": 35}, "Wynn": {"Aria": 40, "Bellagio": 30, "Cosmopolitan": 35, "Encore": 5, "Flamingo": 20, "Harrah's": 15, "LINQ": 20, "Mirage": 15, "TI": 10, "Venetian": 15, "Mandalay Bay": 65, "MGM": 40}, "Mandalay Bay": {"Aria": 30, "Bellagio": 45, "Cosmopolitan": 40, "Encore": 60, "Flamingo": 45, "Harrah's": 55, "LINQ": 50, "Mirage": 55, "TI": 60, "Venetian": 60, "Wynn": 65, "MGM": 20}, "MGM": {"Aria": 11, "Bellagio": 20, "Cosmopolitan": 20, "Encore": 40, "Flamingo": 25, "Harrah's": 30, "LINQ": 25, "Mirage": 30, "TI": 35, "Venetian": 35, "Wynn": 40, "Mandalay Bay": 20}} },
  venues: [
    { n: "The Venetian / Palazzo", d: "Keynotes, Expo (Level 2, Hall B), UG Mixer" },
    { n: "Encore", d: "UG Meeting (qua 2/Dez, Room 5) · ~20 min a pé do Venetian" },
    { n: "The Stadium (Palazzo)", d: "Builder Community Hangout e CB Mixer. Um nível abaixo do lobby do Palazzo, embaixo do WAKUDA e ao lado do Bazaar Meat (mesma sala do \"Brackets at The Stadium\"). Todas as rotas terminam no mesmo elevador/escada que desce um nível." },
    { n: "Caesars Forum", d: "IND363 · Builder Loft (palestra)" },
    { n: "Wynn / Encore", d: "ARC311-R · ARC331 · LATAM Reception (XS)" },
    { n: "MGM Grand", d: "Algumas sessões walk-up" },
    { n: "Caesars Palace", d: "Breakouts e festas" },
    { n: "Las Vegas Festival Grounds", d: "re:Play (shuttles)" }
  ],
  tips: [
    "🍳 Builder Community Hangout (seg–qua 8h–17h, qui 8h–15h): café da manhã, almoço, lanches e espresso todos os dias. Entrada com badge + pré-registro, só maiores de 21, sem acompanhantes.",
    "🪪 Retirada do badge: aeroporto LAS dom e seg das 7h à meia-noite; hotéis (MGM e Venetian) dom 10h–20h e seg a qui 6h30–20h. Levar documento com foto com o MESMO nome do badge (passaporte). Cada pessoa retira o próprio badge.",
    "📶 Wi-Fi do evento: rede @re:Invent26 · senha @re:Invent26.",
    "💬 Dúvidas dos UG Leaders: canal #reinvent2026-in-person no Slack. Stadium/Hangout: awsreinvent-support@amazon.com.",
    "🚇 Monorail gratuito com o badge: mais rápido que os shuttles na Strip.",
    "🚌 Shuttles AWS ligam os venues. Entre Venetian e Wynn dá para ir a pé.",
    "💻 Workshops (ARC311-R, ARC331, IND363): levar laptop carregado.",
    "🔋 Power bank sempre na mochila.",
    "💧 Umidade de 10–20%: beber muita água, usar hidratante labial e soro nasal.",
    "🧥 Dias de 14–18°C, noites de 2–6°C, salas geladas: vestir em camadas.",
    "⭐ Sessões walk-up: chegar 15–20 min antes. Reservadas esgotadas: fila de stand-by.",
    "🎤 Palestra: conversa no quadro branco, sem slides. Levar perguntas para puxar a discussão.",
    "💵 Sales tax de Nevada: 8,375% sobre o preço.",
    "🚑 Emergência médica: ligar para a central do seguro ANTES do atendimento (EUA 1-844-229-4864 · +1 305-590-8016)."
  ]
};
