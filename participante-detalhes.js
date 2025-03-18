document.addEventListener('DOMContentLoaded', function() {

    //traga os dados da api aqui: tentei facilitar o maximo, mas nao faço ideia de como está o backend :(
    
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

// Dados dos módulos (traga pela api tbm)
const modulos = [
    {
        id: 1,
        nome: "Comercial",
        totalParticipantes: 12,
        aulasConcluidas: 204,
        aulasPendentes: 36,
        progresso: 85
    },
    {
        id: 2,
        nome: "Financeiro",
        totalParticipantes: 8,
        aulasConcluidas: 138,
        aulasPendentes: 54,
        progresso: 72
    },
    {
        id: 3,
        nome: "Técnico",
        totalParticipantes: 10,
        aulasConcluidas: 156,
        aulasPendentes: 84,
        progresso: 65
    },
    {
        id: 4,
        nome: "Administrativo",
        totalParticipantes: 6,
        aulasConcluidas: 81,
        aulasPendentes: 99,
        progresso: 45
    }
];

// Estatísticas gerais
const estatisticas = {
    totalParticipantes: participantes.length,
    totalAulas: 48,
    totalModulos: 4,
    mediaConclusao: 68,
    aumentoConclusao: 12,
    pontuacaoMedia: 785
};

    // Obter ID do participante da URL
    const urlParams = new URLSearchParams(window.location.search);
    const participanteId = parseInt(urlParams.get('id'));
    
    // Verificar se o ID é válido
    if (isNaN(participanteId)) {
        alert('ID do participante inválido!');
        window.location.href = 'painel.html';
        return;
    }
    
    // Encontrar o participante pelo ID
    const participante = participantes.find(p => p.id === participanteId);
    
    // Verificar se o participante existe
    if (!participante) {
        alert('Participante não encontrado!');
        window.location.href = 'painel.html';
        return;
    }
    
    // Inicializar a página
    inicializarPagina(participante);
    
    // Configurar eventos
    configurarEventos();
    
    // Função para inicializar a página
    function inicializarPagina(participante) {
        // Carregar informações do perfil
        carregarPerfil(participante);
        
        // Carregar estatísticas
        carregarEstatisticas(participante);
        
        // Carregar progresso por módulo
        carregarProgressoPorModulo(participante);
        
        // Carregar histórico de atividades
        carregarHistoricoAtividades(participante);
        
        // Carregar próximas aulas
        carregarProximasAulas(participante);
        
        // Carregar certificados
        carregarCertificados(participante);
        
        // Animar as barras de progresso
        setTimeout(() => {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 300);
    }
    
    // Função para configurar eventos
    function configurarEventos() {
        // Configurar eventos do menu mobile
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenuToggleContainer = document.getElementById('mobile-menu-toggle-container');
        const closeSidebar = document.getElementById('close-sidebar');
        const mobileSidebar = document.getElementById('mobile-sidebar');
        
        let isMenuOpen = false;
        let wasScrolled = false;

        function isMobile() {
            return window.innerWidth < 1024;
        }

        function updateMenuIcon() {
            const menuIcon = mobileMenuToggle.querySelector('i');
            if (isMenuOpen) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        }

        function updateToggleContainerVisibility() {
            if (isMenuOpen) {
                mobileMenuToggleContainer.classList.add('hidden');
                mobileMenuToggleContainer.classList.remove('scrolled');
            } else {
                mobileMenuToggleContainer.classList.remove('hidden');
                if (wasScrolled && isMobile()) {
                    mobileMenuToggleContainer.classList.add('scrolled');
                }
            }
        }

        mobileMenuToggle.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            mobileSidebar.classList.toggle('-translate-x-full');
            updateMenuIcon();
            updateToggleContainerVisibility();
        });

        closeSidebar.addEventListener('click', function() {
            isMenuOpen = false;
            mobileSidebar.classList.add('-translate-x-full');
            updateMenuIcon();
            updateToggleContainerVisibility();
        });

        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (isMobile()) {
                if (scrollPosition > 20) {
                    wasScrolled = true;
                    if (!isMenuOpen) {
                        mobileMenuToggleContainer.classList.add('scrolled');
                        mobileMenuToggleContainer.classList.remove('hidden');
                    }
                } else {
                    wasScrolled = false;
                    mobileMenuToggleContainer.classList.remove('scrolled');
                    if (!isMenuOpen) {
                        mobileMenuToggleContainer.classList.remove('hidden');
                    }
                }
            } else {
                wasScrolled = false;
                mobileMenuToggleContainer.classList.remove('scrolled');
                if (!isMenuOpen) {
                    mobileMenuToggleContainer.classList.remove('hidden');
                }
            }
        });
    }
    
    // Função para carregar o perfil do participante na página
    function carregarPerfil(participante) {
        document.getElementById('participanteImagem').src = participante.imagem;
        document.getElementById('participanteNome').textContent = participante.nome;
        document.getElementById('participanteCargo').textContent = participante.cargo;
        document.getElementById('participanteDepartamento').textContent = participante.departamento;
        document.getElementById('participanteModulo').textContent = participante.modulo;
        document.getElementById('participanteDataInicio').textContent = participante.dataInicio;
        
        // Definir o indicador de status
        const statusIndicator = document.getElementById('statusIndicator');
        if (participante.status === 'ativo') {
            statusIndicator.className = 'absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-[#2a3245] bg-green-500';
            statusIndicator.title = 'Ativo';
        } else if (participante.status === 'ferias') {
            statusIndicator.className = 'absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-[#2a3245] bg-yellow-500';
            statusIndicator.title = 'Em Férias';
        } else {
            statusIndicator.className = 'absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-[#2a3245] bg-red-500';
            statusIndicator.title = 'Inativo';
        }
    }
    
    // Função para carregar as estatísticas do participante
    function carregarEstatisticas(participante) {
        document.getElementById('participantePontuacao').textContent = participante.pontuacao;
        document.getElementById('participanteAulasConcluidas').textContent = participante.aulasConcluidas;
        document.getElementById('participanteAulasPendentes').textContent = participante.aulasPendentes;
        
        // Progresso geral
        document.getElementById('progressoGeral').style.width = `${participante.progresso}%`;
        
    }
    
    // Função para carregar o progresso por módulo
    function carregarProgressoPorModulo(participante) {
        const modulosProgressoContainer = document.getElementById('modulosProgresso');
        modulosProgressoContainer.innerHTML = '';
        
        // Renderizar progresso por módulo
        participante.modulos.forEach(modulo => {
            const li = document.createElement('li');
            li.className = 'p-3 bg-[#1a2234] rounded-lg';
            
            // Definir a cor da barra de progresso
            let progressoClass = 'bg-red-500';
            if (modulo.progresso >= 75) {
                progressoClass = 'bg-green-500';
            } else if (modulo.progresso >= 50) {
                progressoClass = 'bg-blue-500';
            } else if (modulo.progresso >= 25) {
                progressoClass = 'bg-yellow-500';
            }
            
            li.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <h4 class="font-semibold">${modulo.nome}</h4>
                    <span class="text-sm ${progressoClass.replace('bg-', 'text-')}">${modulo.progresso}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div class="${progressoClass} h-2 rounded-full progress-bar" style="width: ${modulo.progresso}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400">
                    <span>${modulo.aulasConcluidas} de ${modulo.totalAulas} aulas concluídas</span>
                    <span>${modulo.aulasPendentes} pendentes</span>
                </div>
            `;
            
            modulosProgressoContainer.appendChild(li);
        });
    }
    
    // Função para carregar o histórico de atividades
    function carregarHistoricoAtividades(participante) {
        const historicoAtividadesContainer = document.getElementById('historicoAtividades');
        historicoAtividadesContainer.innerHTML = '';
        
        // Renderizar histórico de atividades
        participante.historico.forEach(atividade => {
            const div = document.createElement('div');
            div.className = 'timeline-item pb-5';
            
            // Definir a cor do ponto na timeline
            let dotClass = 'bg-blue-500';
            if (atividade.tipo === 'certificado') {
                dotClass = 'bg-orange-500';
            } else if (atividade.tipo === 'avaliacao') {
                dotClass = 'bg-green-500';
            }
            
            div.innerHTML = `
                <div class="timeline-dot ${dotClass}"></div>
                <div class="flex items-start">
                    <div class="bg-[#1a2234] p-2 rounded-lg mr-3">
                        <i class="fas ${atividade.icone} text-${atividade.tipo === 'certificado' ? 'orange' : atividade.tipo === 'avaliacao' ? 'green' : 'blue'}-500"></i>
                    </div>
                    <div class="flex-1">
                        <p class="font-medium">${atividade.atividade}</p>
                        <p class="text-xs text-gray-400 mt-1">${atividade.data} às ${atividade.hora}</p>
                    </div>
                </div>
            `;
            
            historicoAtividadesContainer.appendChild(div);
        });
    }
    
    // Função para carregar as próximas aulas
    function carregarProximasAulas(participante) {
        const proximasAulasContainer = document.getElementById('proximasAulas');
        proximasAulasContainer.innerHTML = '';
        
        // Renderizar próximas aulas
        participante.proximasAulas.forEach(aula => {
            const div = document.createElement('div');
            div.className = 'bg-[#1a2234] rounded-lg p-4 card-hover';
            
            div.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-semibold">${aula.titulo}</h4>
                    <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-lg">${aula.data}</span>
                </div>
                <p class="text-gray-400 text-sm mb-3">Módulo: ${aula.modulo}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-400"><i class="fas fa-clock mr-1"></i> ${aula.duracao}</span>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm">Iniciar</button>
                </div>
            `;
            
            proximasAulasContainer.appendChild(div);
        });
    }
    
    // Função para carregar os certificados
    function carregarCertificados(participante) {
        const certificadosContainer = document.getElementById('certificados');
        certificadosContainer.innerHTML = '';
        
        // Renderizar certificados
        participante.certificados.forEach(certificado => {
            const div = document.createElement('div');
            div.className = 'bg-[#1a2234] rounded-lg p-4 card-hover';
            
            // Definir a cor do ícone
            let iconClass = 'text-orange-500';
            if (certificado.icone === 'fa-award') {
                iconClass = 'text-blue-500';
            } else if (certificado.icone === 'fa-medal') {
                iconClass = 'text-yellow-500';
            }
            
            div.innerHTML = `
                <div class="flex justify-center mb-4">
                    <div class="bg-[#2a3245] p-4 rounded-full">
                        <i class="fas ${certificado.icone} ${iconClass} text-2xl"></i>
                    </div>
                </div>
                <h4 class="font-semibold text-center mb-2">${certificado.titulo}</h4>
                <p class="text-gray-400 text-sm text-center mb-3">${certificado.tipo}</p>
                <p class="text-xs text-center text-gray-400">Emitido em ${certificado.data}</p>
                <div class="flex justify-center mt-3">
                    <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm">
                        <i class="fas fa-download mr-1"></i> Baixar
                    </button>
                </div>
            `;
            
            certificadosContainer.appendChild(div);
        });
    }
});

  // Script para o menu mobile
  document.addEventListener('DOMContentLoaded', function() {
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileSidebar.classList.remove('-translate-x-full');
    });
    
    closeSidebar.addEventListener('click', function() {
        mobileSidebar.classList.add('-translate-x-full');
    });
    
    // Script para o header fixo em mobile
    const mobileMenuToggleContainer = document.getElementById('mobile-menu-toggle-container');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mobileMenuToggleContainer.classList.add('scrolled');
        } else {
            mobileMenuToggleContainer.classList.remove('scrolled');
        }
    });
    
    // Simulação de dados para demonstração
    // Normalmente estes dados viriam do seu arquivo JS externo
    document.getElementById('progressoGeral').style.width = '65%';
    document.getElementById('progressoGeralMini').style.width = '65%';
});

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1a2234',
                secondary: '#2a3245',
                accent: '#ff9800',
                success: '#4CAF50',
                warning: '#FFC107',
                danger: '#F44336',
                info: '#2196F3',
                teal: '#009688',
                green: '#4CAF50',
                pink: '#E91E63',
                blue: '#03A9F4',
                red: '#F44336',

            }
        }
    }
}