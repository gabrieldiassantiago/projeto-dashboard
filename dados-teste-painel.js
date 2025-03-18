// Modelo de dados para os participantes
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

// Dados dos módulos
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

