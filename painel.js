


document.addEventListener("DOMContentLoaded", () => {
    const participantes = [
        {
            id: 1,
            nome: "Gabriel Silva",
            cargo: "Analista de Vendas",
            departamento: "Comercial",
            modulo: "Comercial",
            imagem: "https://randomuser.me/api/portraits/men/1.jpg",
            pontuacao: 920,
            pontuacaoAnterior: 905,
            totalAulas: 48,
            aulasConcluidas: 42,
            aulasPendentes: 6,
            progresso: 88,
            dataInicio: "15/01/2025",
            status: "ativo", // ativo, inativo, ferias
            competencias: {
                tecnica: 85,
                pratica: 90,
                comunicacao: 95,
                equipe: 88
            },
            modulos: [
                {
                    nome: "Introdução ao CRM",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Técnicas de Vendas",
                    progresso: 92,
                    totalAulas: 12,
                    aulasConcluidas: 11,
                    aulasPendentes: 1
                },
                {
                    nome: "Gestão de Clientes",
                    progresso: 83,
                    totalAulas: 12,
                    aulasConcluidas: 10,
                    aulasPendentes: 2
                },
                {
                    nome: "Análise de Mercado",
                    progresso: 75,
                    totalAulas: 12,
                    aulasConcluidas: 9,
                    aulasPendentes: 3
                }
            ],
            historico: [
                {
                    data: "18/03/2025",
                    hora: "14:30",
                    atividade: "Concluiu a aula 'Estratégias de Retenção de Clientes'",
                    tipo: "aula", // aula, certificado, avaliacao
                    icone: "fa-book"
                },
                {
                    data: "16/03/2025",
                    hora: "10:15",
                    atividade: "Obteve nota 9.5 na avaliação 'Técnicas de Vendas Avançadas'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "12/03/2025",
                    hora: "16:45",
                    atividade: "Recebeu certificado do módulo 'Introdução ao CRM'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "10/03/2025",
                    hora: "09:20",
                    atividade: "Concluiu a aula 'Prospecção de Clientes'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "08/03/2025",
                    hora: "11:30",
                    atividade: "Concluiu a aula 'Negociação Eficaz'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Estratégias de Upselling",
                    modulo: "Técnicas de Vendas",
                    duracao: "45 min",
                    data: "20/03/2025"
                },
                {
                    titulo: "Análise de Concorrência",
                    modulo: "Análise de Mercado",
                    duracao: "60 min",
                    data: "22/03/2025"
                },
                {
                    titulo: "Gestão de Carteira",
                    modulo: "Gestão de Clientes",
                    duracao: "30 min",
                    data: "25/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Introdução ao CRM",
                    data: "12/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Excelência em Atendimento",
                    data: "28/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                },
                {
                    titulo: "Fundamentos de Vendas",
                    data: "15/02/2025",
                    tipo: "Curso Básico",
                    icone: "fa-medal"
                }
            ]
        },
        {
            id: 2,
            nome: "Ana Oliveira",
            cargo: "Analista Financeiro",
            departamento: "Financeiro",
            modulo: "Financeiro",
            imagem: "https://randomuser.me/api/portraits/women/2.jpg",
            pontuacao: 845,
            pontuacaoAnterior: 837,
            totalAulas: 48,
            aulasConcluidas: 36,
            aulasPendentes: 12,
            progresso: 75,
            dataInicio: "20/01/2025",
            status: "ativo",
            competencias: {
                tecnica: 92,
                pratica: 78,
                comunicacao: 80,
                equipe: 85
            },
            modulos: [
                {
                    nome: "Contabilidade Básica",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Análise Financeira",
                    progresso: 83,
                    totalAulas: 12,
                    aulasConcluidas: 10,
                    aulasPendentes: 2
                },
                {
                    nome: "Gestão de Custos",
                    progresso: 75,
                    totalAulas: 12,
                    aulasConcluidas: 9,
                    aulasPendentes: 3
                },
                {
                    nome: "Planejamento Financeiro",
                    progresso: 42,
                    totalAulas: 12,
                    aulasConcluidas: 5,
                    aulasPendentes: 7
                }
            ],
            historico: [
                {
                    data: "17/03/2025",
                    hora: "13:45",
                    atividade: "Concluiu a aula 'Análise de Demonstrações Financeiras'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "15/03/2025",
                    hora: "09:30",
                    atividade: "Obteve nota 9.0 na avaliação 'Contabilidade Básica'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "10/03/2025",
                    hora: "14:20",
                    atividade: "Recebeu certificado do módulo 'Contabilidade Básica'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "08/03/2025",
                    hora: "10:15",
                    atividade: "Concluiu a aula 'Fluxo de Caixa'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "05/03/2025",
                    hora: "16:30",
                    atividade: "Concluiu a aula 'Indicadores Financeiros'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Orçamento Empresarial",
                    modulo: "Planejamento Financeiro",
                    duracao: "60 min",
                    data: "21/03/2025"
                },
                {
                    titulo: "Análise de Investimentos",
                    modulo: "Análise Financeira",
                    duracao: "45 min",
                    data: "23/03/2025"
                },
                {
                    titulo: "Gestão de Capital de Giro",
                    modulo: "Gestão de Custos",
                    duracao: "50 min",
                    data: "26/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Contabilidade Básica",
                    data: "10/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Excel para Finanças",
                    data: "25/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                }
            ]
        },
        {
            id: 3,
            nome: "Carlos Santos",
            cargo: "Desenvolvedor",
            departamento: "TI",
            modulo: "Técnico",
            imagem: "https://randomuser.me/api/portraits/men/3.jpg",
            pontuacao: 760,
            pontuacaoAnterior: 765,
            totalAulas: 48,
            aulasConcluidas: 32,
            aulasPendentes: 16,
            progresso: 67,
            dataInicio: "05/02/2025",
            status: "ferias",
            competencias: {
                tecnica: 95,
                pratica: 90,
                comunicacao: 70,
                equipe: 75
            },
            modulos: [
                {
                    nome: "Fundamentos de Programação",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Desenvolvimento Web",
                    progresso: 92,
                    totalAulas: 12,
                    aulasConcluidas: 11,
                    aulasPendentes: 1
                },
                {
                    nome: "Banco de Dados",
                    progresso: 58,
                    totalAulas: 12,
                    aulasConcluidas: 7,
                    aulasPendentes: 5
                },
                {
                    nome: "DevOps",
                    progresso: 17,
                    totalAulas: 12,
                    aulasConcluidas: 2,
                    aulasPendentes: 10
                }
            ],
            historico: [
                {
                    data: "16/03/2025",
                    hora: "15:20",
                    atividade: "Concluiu a aula 'Consultas SQL Avançadas'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "14/03/2025",
                    hora: "11:45",
                    atividade: "Obteve nota 8.5 na avaliação 'Desenvolvimento Web'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "09/03/2025",
                    hora: "10:30",
                    atividade: "Recebeu certificado do módulo 'Fundamentos de Programação'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "07/03/2025",
                    hora: "14:15",
                    atividade: "Concluiu a aula 'APIs RESTful'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "04/03/2025",
                    hora: "09:45",
                    atividade: "Concluiu a aula 'Modelagem de Dados'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Containers e Docker",
                    modulo: "DevOps",
                    duracao: "60 min",
                    data: "22/03/2025"
                },
                {
                    titulo: "Normalização de Banco de Dados",
                    modulo: "Banco de Dados",
                    duracao: "45 min",
                    data: "24/03/2025"
                },
                {
                    titulo: "CI/CD Pipeline",
                    modulo: "DevOps",
                    duracao: "55 min",
                    data: "27/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Fundamentos de Programação",
                    data: "09/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "JavaScript Avançado",
                    data: "20/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                }
            ]
        },
        {
            id: 4,
            nome: "Mariana Costa",
            cargo: "Gerente de Vendas",
            departamento: "Comercial",
            modulo: "Comercial",
            imagem: "https://randomuser.me/api/portraits/women/4.jpg",
            pontuacao: 890,
            pontuacaoAnterior: 870,
            totalAulas: 48,
            aulasConcluidas: 40,
            aulasPendentes: 8,
            progresso: 83,
            dataInicio: "10/01/2025",
            status: "ativo",
            competencias: {
                tecnica: 88,
                pratica: 92,
                comunicacao: 95,
                equipe: 90
            },
            modulos: [
                {
                    nome: "Introdução ao CRM",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Técnicas de Vendas",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Gestão de Clientes",
                    progresso: 92,
                    totalAulas: 12,
                    aulasConcluidas: 11,
                    aulasPendentes: 1
                },
                {
                    nome: "Análise de Mercado",
                    progresso: 42,
                    totalAulas: 12,
                    aulasConcluidas: 5,
                    aulasPendentes: 7
                }
            ],
            historico: [
                {
                    data: "18/03/2025",
                    hora: "10:15",
                    atividade: "Concluiu a aula 'Segmentação de Mercado'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "15/03/2025",
                    hora: "14:30",
                    atividade: "Obteve nota 9.8 na avaliação 'Gestão de Clientes'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "11/03/2025",
                    hora: "09:45",
                    atividade: "Recebeu certificado do módulo 'Técnicas de Vendas'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "08/03/2025",
                    hora: "16:20",
                    atividade: "Concluiu a aula 'Fidelização de Clientes'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "05/03/2025",
                    hora: "11:10",
                    atividade: "Concluiu a aula 'Gestão de Equipes de Vendas'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Análise de Tendências",
                    modulo: "Análise de Mercado",
                    duracao: "50 min",
                    data: "20/03/2025"
                },
                {
                    titulo: "Estratégias de Expansão",
                    modulo: "Análise de Mercado",
                    duracao: "60 min",
                    data: "23/03/2025"
                },
                {
                    titulo: "Gestão de Conflitos",
                    modulo: "Gestão de Clientes",
                    duracao: "45 min",
                    data: "25/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Introdução ao CRM",
                    data: "25/02/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Técnicas de Vendas",
                    data: "11/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Liderança em Vendas",
                    data: "20/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                }
            ]
        },
        {
            id: 5,
            nome: "Rafael Mendes",
            cargo: "Suporte Técnico",
            departamento: "TI",
            modulo: "Técnico",
            imagem: "https://randomuser.me/api/portraits/men/5.jpg",
            pontuacao: 710,
            pontuacaoAnterior: 705,
            totalAulas: 48,
            aulasConcluidas: 30,
            aulasPendentes: 18,
            progresso: 62,
            dataInicio: "01/02/2025",
            status: "ativo",
            competencias: {
                tecnica: 85,
                pratica: 80,
                comunicacao: 75,
                equipe: 70
            },
            modulos: [
                {
                    nome: "Fundamentos de Redes",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Sistemas Operacionais",
                    progresso: 83,
                    totalAulas: 12,
                    aulasConcluidas: 10,
                    aulasPendentes: 2
                },
                {
                    nome: "Segurança da Informação",
                    progresso: 50,
                    totalAulas: 12,
                    aulasConcluidas: 6,
                    aulasPendentes: 6
                },
                {
                    nome: "Atendimento ao Cliente",
                    progresso: 17,
                    totalAulas: 12,
                    aulasConcluidas: 2,
                    aulasPendentes: 10
                }
            ],
            historico: [
                {
                    data: "17/03/2025",
                    hora: "11:30",
                    atividade: "Concluiu a aula 'Firewall e Proxy'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "14/03/2025",
                    hora: "09:15",
                    atividade: "Obteve nota 8.0 na avaliação 'Sistemas Operacionais'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "10/03/2025",
                    hora: "15:45",
                    atividade: "Recebeu certificado do módulo 'Fundamentos de Redes'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "07/03/2025",
                    hora: "13:20",
                    atividade: "Concluiu a aula 'Gerenciamento de Usuários'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "04/03/2025",
                    hora: "10:40",
                    atividade: "Concluiu a aula 'Criptografia'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Protocolos de Segurança",
                    modulo: "Segurança da Informação",
                    duracao: "55 min",
                    data: "21/03/2025"
                },
                {
                    titulo: "Técnicas de Comunicação",
                    modulo: "Atendimento ao Cliente",
                    duracao: "40 min",
                    data: "24/03/2025"
                },
                {
                    titulo: "Backup e Recuperação",
                    modulo: "Sistemas Operacionais",
                    duracao: "50 min",
                    data: "26/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Fundamentos de Redes",
                    data: "10/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Troubleshooting",
                    data: "22/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                }
            ]
        },
        {
            id: 6,
            nome: "Juliana Ferreira",
            cargo: "Analista de RH",
            departamento: "Recursos Humanos",
            modulo: "Administrativo",
            imagem: "https://randomuser.me/api/portraits/women/6.jpg",
            pontuacao: 680,
            pontuacaoAnterior: 650,
            totalAulas: 48,
            aulasConcluidas: 28,
            aulasPendentes: 20,
            progresso: 58,
            dataInicio: "15/02/2025",
            status: "ativo",
            competencias: {
                tecnica: 75,
                pratica: 80,
                comunicacao: 90,
                equipe: 85
            },
            modulos: [
                {
                    nome: "Recrutamento e Seleção",
                    progresso: 100,
                    totalAulas: 12,
                    aulasConcluidas: 12,
                    aulasPendentes: 0
                },
                {
                    nome: "Gestão de Pessoas",
                    progresso: 75,
                    totalAulas: 12,
                    aulasConcluidas: 9,
                    aulasPendentes: 3
                },
                {
                    nome: "Legislação Trabalhista",
                    progresso: 42,
                    totalAulas: 12,
                    aulasConcluidas: 5,
                    aulasPendentes: 7
                },
                {
                    nome: "Desenvolvimento Organizacional",
                    progresso: 17,
                    totalAulas: 12,
                    aulasConcluidas: 2,
                    aulasPendentes: 10
                }
            ],
            historico: [
                {
                    data: "16/03/2025",
                    hora: "14:15",
                    atividade: "Concluiu a aula 'Avaliação de Desempenho'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "13/03/2025",
                    hora: "10:30",
                    atividade: "Obteve nota 8.7 na avaliação 'Gestão de Pessoas'",
                    tipo: "avaliacao",
                    icone: "fa-star"
                },
                {
                    data: "09/03/2025",
                    hora: "11:45",
                    atividade: "Recebeu certificado do módulo 'Recrutamento e Seleção'",
                    tipo: "certificado",
                    icone: "fa-certificate"
                },
                {
                    data: "06/03/2025",
                    hora: "15:20",
                    atividade: "Concluiu a aula 'Benefícios e Remuneração'",
                    tipo: "aula",
                    icone: "fa-book"
                },
                {
                    data: "03/03/2025",
                    hora: "09:10",
                    atividade: "Concluiu a aula 'Contratos de Trabalho'",
                    tipo: "aula",
                    icone: "fa-book"
                }
            ],
            proximasAulas: [
                {
                    titulo: "Rescisão Contratual",
                    modulo: "Legislação Trabalhista",
                    duracao: "45 min",
                    data: "20/03/2025"
                },
                {
                    titulo: "Cultura Organizacional",
                    modulo: "Desenvolvimento Organizacional",
                    duracao: "60 min",
                    data: "23/03/2025"
                },
                {
                    titulo: "Plano de Carreira",
                    modulo: "Gestão de Pessoas",
                    duracao: "50 min",
                    data: "25/03/2025"
                }
            ],
            certificados: [
                {
                    titulo: "Recrutamento e Seleção",
                    data: "09/03/2025",
                    tipo: "Módulo Completo",
                    icone: "fa-certificate"
                },
                {
                    titulo: "Entrevista por Competências",
                    data: "18/02/2025",
                    tipo: "Workshop",
                    icone: "fa-award"
                }
            ]
        }
    ];
  
    const estatisticas = {
      totalParticipantes: participantes.length,
      totalAulas: 100,
      totalModulos: 3,
      mediaConclusao: 75,
      aumentoConclusao: 10,
      pontuacaoMedia: 800,
    }
  
    const modulos = [
      { nome: "A", totalParticipantes: 40, progresso: 60, aulasConcluidas: 60, aulasPendentes: 40 },
      { nome: "B", totalParticipantes: 30, progresso: 80, aulasConcluidas: 80, aulasPendentes: 20 },
      { nome: "C", totalParticipantes: 30, progresso: 90, aulasConcluidas: 90, aulasPendentes: 10 },
    ]
  
    // Configurações de paginação
    let currentPage = 1
    const itemsPerPage = 5
    let filteredParticipantes = [...participantes]
  
    // Inicializar a página
    inicializarPagina()
  
    // Configurar eventos
    configurarEventos()
  
    // Função para inicializar a página
    function inicializarPagina() {
      // Carregar estatísticas gerais
      carregarEstatisticasGerais()
  
      // Carregar tabela de participantes
      carregarTabelaParticipantes()
  
      // Carregar top participantes
      carregarTopParticipantes()
  
      // Carregar progresso por módulo
      carregarProgressoPorModulo()
  
      // Carregar filtros de módulos
      carregarFiltrosModulos()
    }
  
    // Função para configurar eventos
    function configurarEventos() {
      // Evento para o botão de busca
      document.getElementById("searchButton").addEventListener("click", () => {
        buscarParticipantes()
      })
  
      // Evento para a tecla Enter no campo de busca
      document.getElementById("searchInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          buscarParticipantes()
        }
      })
  
      // Evento para o botão de filtro
      document.getElementById("filterButton").addEventListener("click", () => {
        const filterDropdown = document.getElementById("filterDropdown")
        filterDropdown.classList.toggle("hidden")
      })
  
      // Evento para o botão de aplicar filtros
      document.getElementById("applyFilters").addEventListener("click", () => {
        aplicarFiltros()
        document.getElementById("filterDropdown").classList.add("hidden")
      })
  
      // Eventos para os botões de paginação mobile
      document.getElementById("prevButtonMobile").addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--
          carregarTabelaParticipantes()
        }
      })
  
      document.getElementById("nextButtonMobile").addEventListener("click", () => {
        const totalPages = Math.ceil(filteredParticipantes.length / itemsPerPage)
        if (currentPage < totalPages) {
          currentPage++
          carregarTabelaParticipantes()
        }
      })
  
      // Configurar eventos do menu mobile
      const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
      const mobileMenuToggleContainer = document.getElementById("mobile-menu-toggle-container")
      const closeSidebar = document.getElementById("close-sidebar")
      const mobileSidebar = document.getElementById("mobile-sidebar")
  
      let isMenuOpen = false
      let wasScrolled = false
  
      function isMobile() {
        return window.innerWidth < 1024
      }
  
      function updateMenuIcon() {
        const menuIcon = mobileMenuToggle.querySelector("i")
        if (isMenuOpen) {
          menuIcon.classList.remove("fa-bars")
          menuIcon.classList.add("fa-xmark")
        } else {
          menuIcon.classList.remove("fa-xmark")
          menuIcon.classList.add("fa-bars")
        }
      }
  
      function updateToggleContainerVisibility() {
        if (isMenuOpen) {
          mobileMenuToggleContainer.classList.add("hidden")
          mobileMenuToggleContainer.classList.remove("scrolled")
        } else {
          mobileMenuToggleContainer.classList.remove("hidden")
          if (wasScrolled && isMobile()) {
            mobileMenuToggleContainer.classList.add("scrolled")
          }
        }
      }
  
      mobileMenuToggle.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen
        mobileSidebar.classList.toggle("-translate-x-full")
        updateMenuIcon()
        updateToggleContainerVisibility()
      })
  
      closeSidebar.addEventListener("click", () => {
        isMenuOpen = false
        mobileSidebar.classList.add("-translate-x-full")
        updateMenuIcon()
        updateToggleContainerVisibility()
      })
  
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY
        if (isMobile()) {
          if (scrollPosition > 20) {
            wasScrolled = true
            if (!isMenuOpen) {
              mobileMenuToggleContainer.classList.add("scrolled")
              mobileMenuToggleContainer.classList.remove("hidden")
            }
          } else {
            wasScrolled = false
            mobileMenuToggleContainer.classList.remove("scrolled")
            if (!isMenuOpen) {
              mobileMenuToggleContainer.classList.remove("hidden")
            }
          }
        } else {
          wasScrolled = false
          mobileMenuToggleContainer.classList.remove("scrolled")
          if (!isMenuOpen) {
            mobileMenuToggleContainer.classList.remove("hidden")
          }
        }
      })
    }
  
    // Função para carregar estatísticas gerais
    function carregarEstatisticasGerais() {
      document.getElementById("totalParticipantes").textContent = estatisticas.totalParticipantes
      document.getElementById("totalAulas").textContent = estatisticas.totalAulas
      document.getElementById("totalModulos").textContent = estatisticas.totalModulos
      document.getElementById("mediaConclusao").textContent = estatisticas.mediaConclusao + "%"
      document.getElementById("aumentoConclusao").textContent = estatisticas.aumentoConclusao + "%"
      document.getElementById("pontuacaoMedia").textContent = estatisticas.pontuacaoMedia
  
      // Garantir que as barras de progresso sejam renderizadas corretamente
      setTimeout(() => {
        const progressBars = document.querySelectorAll(".progress-bar")
        progressBars.forEach((bar) => {
          // Forçar um reflow para garantir que a animação seja aplicada
          bar.getBoundingClientRect()
        })
      }, 100)
    }
  
    // Função para carregar a tabela de participantes
    function carregarTabelaParticipantes() {
      // Calcular índices para a página atual
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = Math.min(startIndex + itemsPerPage, filteredParticipantes.length)
  
      // Atualizar informações de paginação
      document.getElementById("startItem").textContent = filteredParticipantes.length > 0 ? startIndex + 1 : 0
      document.getElementById("endItem").textContent = endIndex
      document.getElementById("totalItems").textContent = filteredParticipantes.length
  
      // Obter participantes para a página atual
      const currentParticipantes = filteredParticipantes.slice(startIndex, endIndex)
  
      // Renderizar versão desktop (tabela)
      renderizarTabelaDesktop(currentParticipantes)
  
      // Renderizar versão mobile (cards)
      renderizarCardsMobile(currentParticipantes)
  
      // Renderizar paginação
      renderizarPaginacao()
    }
  
    // Função para renderizar a tabela desktop
    function renderizarTabelaDesktop(participantes) {
      const tableBody = document.getElementById("participantesTableBody")
      tableBody.innerHTML = ""
  
      // Renderizar participantes
      participantes.forEach((participante) => {
        const row = document.createElement("tr")
        row.className = "hover:bg-[#1a2234] transition-colors"
  
        // Definir a cor da variação de pontuação
        const pontuacaoDiff = participante.pontuacao - participante.pontuacaoAnterior
        const pontuacaoClass = pontuacaoDiff >= 0 ? "text-green-500" : "text-red-500"
        const pontuacaoPrefix = pontuacaoDiff >= 0 ? "+" : ""
  
        // Definir a cor da barra de progresso
        let progressoClass = "bg-red-500"
        if (participante.progresso >= 75) {
          progressoClass = "bg-green-500"
        } else if (participante.progresso >= 50) {
          progressoClass = "bg-blue-500"
        } else if (participante.progresso >= 25) {
          progressoClass = "bg-yellow-500"
        }
  
        row.innerHTML = `
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="${participante.imagem}" alt="${participante.nome}">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm font-medium">${participante.nome}</div>
                              <div class="text-sm text-gray-400">Módulo: ${participante.modulo}</div>
                          </div>
                      </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-semibold">${participante.pontuacao} <span class="${pontuacaoClass} text-xs">${pontuacaoPrefix}${pontuacaoDiff}</span></div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm">${participante.aulasConcluidas} de ${participante.totalAulas}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm">${participante.aulasPendentes}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div class="${progressoClass} h-2 rounded-full transition-all duration-1000" style="width: ${participante.progresso}%"></div>
                      </div>
                      <div class="text-xs text-right mt-1">${participante.progresso}%</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <a href="participante-detalhes.html?id=${participante.id}" class="text-blue-400 hover:text-blue-300 mr-3">
                          <i class="fas fa-eye"></i>
                      </a>
                   
                  </td>
              `
  
        tableBody.appendChild(row)
      })
    }
  
    // Função para renderizar os cards mobile
    function renderizarCardsMobile(participantes) {
      const cardContainer = document.getElementById("participantesCardContainer")
      cardContainer.innerHTML = ""
  
      // Renderizar participantes como cards
      participantes.forEach((participante) => {
        // Definir a cor da variação de pontuação
        const pontuacaoDiff = participante.pontuacao - participante.pontuacaoAnterior
        const pontuacaoClass = pontuacaoDiff >= 0 ? "text-green-500" : "text-red-500"
        const pontuacaoPrefix = pontuacaoDiff >= 0 ? "+" : ""
  
        // Definir a cor da barra de progresso
        let progressoClass = "bg-red-500"
        if (participante.progresso >= 75) {
          progressoClass = "bg-green-500"
        } else if (participante.progresso >= 50) {
          progressoClass = "bg-blue-500"
        } else if (participante.progresso >= 25) {
          progressoClass = "bg-yellow-500"
        }
  
        const card = document.createElement("div")
        card.className = "bg-[#1a2234] rounded-lg p-4 participante-card"
  
        card.innerHTML = `
                  <div class="flex items-center mb-4">
                      <div class="flex-shrink-0 h-12 w-12">
                          <img class="h-12 w-12 rounded-full" src="${participante.imagem}" alt="${participante.nome}">
                      </div>
                      <div class="ml-4 flex-1">
                          <div class="text-sm font-medium">${participante.nome}</div>
                          <div class="text-xs text-gray-400">Módulo: ${participante.modulo}</div>
                      </div>
                      <div class="flex flex-col items-end">
                          <div class="text-sm font-semibold">${participante.pontuacao}</div>
                          <div class="${pontuacaoClass} text-xs">${pontuacaoPrefix}${pontuacaoDiff}</div>
                      </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-2 mb-3">
                      <div class="bg-[#2a3245] rounded p-2 text-center">
                          <div class="text-xs text-gray-400">Concluídas</div>
                          <div class="text-sm font-medium">${participante.aulasConcluidas} de ${participante.totalAulas}</div>
                      </div>
                      <div class="bg-[#2a3245] rounded p-2 text-center">
                          <div class="text-xs text-gray-400">Pendentes</div>
                          <div class="text-sm font-medium">${participante.aulasPendentes}</div>
                      </div>
                  </div>
                  
                  <div class="mb-3">
                      <div class="flex justify-between text-xs mb-1">
                          <span>Progresso</span>
                          <span>${participante.progresso}%</span>
                      </div>
                      <div class="w-full bg-gray-700 rounded-full h-2">
                          <div class="${progressoClass} h-2 rounded-full progress-bar" style="width: ${participante.progresso}%"></div>
                      </div>
                  </div>
                  
                  <div class="flex justify-end space-x-2">
                      <a href="participante-detalhes.html?id=${participante.id}" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center">
                          <i class="fas fa-eye mr-1"></i> Detalhes
                      </a>
                  
                  </div>
              `
  
        cardContainer.appendChild(card)
      })
    }
  
    // Função para renderizar a paginação
    function renderizarPaginacao() {
      const paginationContainer = document.getElementById("paginationContainer")
      paginationContainer.innerHTML = ""
  
      // Botão anterior
      const prevButton = document.createElement("button")
      prevButton.className =
        "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-[#1a2234] text-sm font-medium text-gray-300 hover:bg-[#2a3245]"
      prevButton.innerHTML = '<span class="sr-only">Anterior</span><i class="fas fa-chevron-left"></i>'
      prevButton.disabled = currentPage === 1
      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--
          carregarTabelaParticipantes()
        }
      })
      paginationContainer.appendChild(prevButton)
  
      // Calcular total de páginas
      const totalPages = Math.ceil(filteredParticipantes.length / itemsPerPage)
  
      // Determinar quais páginas mostrar
      let startPage = Math.max(1, currentPage - 2)
      const endPage = Math.min(totalPages, startPage + 4)
  
      if (endPage - startPage < 4 && startPage > 1) {
        startPage = Math.max(1, endPage - 4)
      }
  
      // Botões de página
      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button")
        pageButton.className =
          i === currentPage
            ? "relative inline-flex items-center px-4 py-2 border border-gray-700 bg-orange-500 text-sm font-medium text-white"
            : "relative inline-flex items-center px-4 py-2 border border-gray-700 bg-[#1a2234] text-sm font-medium text-gray-300 hover:bg-[#2a3245]"
        pageButton.textContent = i
        pageButton.addEventListener("click", () => {
          currentPage = i
          carregarTabelaParticipantes()
        })
        paginationContainer.appendChild(pageButton)
      }
  
      // Botão próximo
      const nextButton = document.createElement("button")
      nextButton.className =
        "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-[#1a2234] text-sm font-medium text-gray-300 hover:bg-[#2a3245]"
      nextButton.innerHTML = '<span class="sr-only">Próximo</span><i class="fas fa-chevron-right"></i>'
      nextButton.disabled = currentPage === totalPages
      nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++
          carregarTabelaParticipantes()
        }
      })
      paginationContainer.appendChild(nextButton)
  
      // Atualizar estado dos botões mobile
      document.getElementById("prevButtonMobile").disabled = currentPage === 1
      document.getElementById("nextButtonMobile").disabled = currentPage === totalPages
    }
  
    // Função para carregar o top de participantes
    function carregarTopParticipantes() {
      const topParticipantesContainer = document.getElementById("topParticipantes")
      topParticipantesContainer.innerHTML = ""
  
      // Ordenar participantes por pontuação
      const topParticipantes = [...participantes].sort((a, b) => b.pontuacao - a.pontuacao).slice(0, 5)
  
      // Renderizar top participantes
      topParticipantes.forEach((participante, index) => {
        const medalClass =
          index === 0
            ? "text-orange-500"
            : index === 1
              ? "text-gray-400"
              : index === 2
                ? "text-orange-800"
                : "text-gray-500"
  
        const li = document.createElement("li")
        li.className = "flex items-center p-3 bg-[#1a2234] rounded-lg"
        li.innerHTML = `
                  <div class="text-2xl font-bold ${medalClass} mr-4">${index + 1}</div>
                  <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="${participante.imagem}" alt="${participante.nome}">
                  </div>
                  <div class="ml-4 flex-1">
                      <div class="text-sm font-medium">${participante.nome}</div>
                      <div class="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div class="bg-orange-500 h-2 rounded-full" style="width: ${(participante.pontuacao / 1000) * 100}%"></div>
                      </div>
                  </div>
                  <div class="text-lg font-bold">${participante.pontuacao}</div>
              `
  
        topParticipantesContainer.appendChild(li)
      })
    }
  
    // Função para carregar o progresso por módulo
    function carregarProgressoPorModulo() {
      const progressoPorModuloContainer = document.getElementById("progressoPorModulo")
      progressoPorModuloContainer.innerHTML = ""
  
      // Renderizar progresso por módulo
      modulos.forEach((modulo) => {
        const li = document.createElement("li")
        li.className = "p-3 bg-[#1a2234] rounded-lg"
  
        // Definir a cor da barra de progresso
        let progressoClass = "bg-red-500"
        if (modulo.progresso >= 75) {
          progressoClass = "bg-green-500"
        } else if (modulo.progresso >= 50) {
          progressoClass = "bg-blue-500"
        } else if (modulo.progresso >= 25) {
          progressoClass = "bg-yellow-500"
        }
  
        li.innerHTML = `
                  <div class="flex justify-between items-center mb-2">
                      <h4 class="font-semibold">Módulo ${modulo.nome}</h4>
                      <span class="text-sm text-gray-400">${modulo.totalParticipantes} participantes</span>
                  </div>
                  <div class="flex items-center">
                      <div class="flex-1 mr-4">
                          <div class="w-full bg-gray-700 rounded-full h-2">
                              <div class="${progressoClass} h-2 rounded-full progress-bar" style="width: ${modulo.progresso}%"></div>
                          </div>
                      </div>
                      <div class="${progressoClass.replace("bg-", "text-")} font-bold">${modulo.progresso}%</div>
                  </div>
                  <div class="flex justify-between text-xs text-gray-400 mt-2">
                      <span>${modulo.aulasConcluidas} aulas concluídas</span>
                      <span>${modulo.aulasPendentes} aulas pendentes</span>
                  </div>
              `
  
        progressoPorModuloContainer.appendChild(li)
      })
    }
  
    // Função para carregar os filtros de módulos
    function carregarFiltrosModulos() {
      const moduleFiltersContainer = document.getElementById("moduleFilters")
      moduleFiltersContainer.innerHTML = ""
  
      // Renderizar filtros de módulos
      modulos.forEach((modulo) => {
        const label = document.createElement("label")
        label.className = "flex items-center"
        label.innerHTML = `
                  <input type="checkbox" class="module-filter" value="${modulo.nome}" class="mr-2">
                  <span class="ml-2">${modulo.nome}</span>
              `
  
        moduleFiltersContainer.appendChild(label)
      })
    }
  
    // Função para buscar participantes
    function buscarParticipantes() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim()
  
      if (searchTerm === "") {
        filteredParticipantes = [...participantes]
      } else {
        filteredParticipantes = participantes.filter(
          (participante) =>
            participante.nome.toLowerCase().includes(searchTerm) ||
            participante.cargo.toLowerCase().includes(searchTerm) ||
            participante.departamento.toLowerCase().includes(searchTerm) ||
            participante.modulo.toLowerCase().includes(searchTerm),
        )
      }
  
      currentPage = 1
      carregarTabelaParticipantes()
    }
  
    // Função para aplicar filtros
    function aplicarFiltros() {
      // Obter filtros de módulos selecionados
      const moduleFilters = Array.from(document.querySelectorAll(".module-filter:checked")).map(
        (checkbox) => checkbox.value,
      )
  
      // Obter filtros de progresso selecionados
      const progressFilters = Array.from(document.querySelectorAll(".progress-filter:checked")).map(
        (checkbox) => checkbox.value,
      )
  
      // Filtrar participantes
      filteredParticipantes = participantes.filter((participante) => {
        // Verificar filtros de módulos
        const passesModuleFilter = moduleFilters.length === 0 || moduleFilters.includes(participante.modulo)
  
        // Verificar filtros de progresso
        let passesProgressFilter = true
        if (progressFilters.length > 0) {
          passesProgressFilter = progressFilters.some((filter) => {
            const [min, max] = filter.split("-").map(Number)
            return participante.progresso >= min && participante.progresso <= max
          })
        }
  
        return passesModuleFilter && passesProgressFilter
      })
  
      currentPage = 1
      carregarTabelaParticipantes()
    }
  })
  
  

  