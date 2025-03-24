const treinamentos = [
    { id: 1, nome: "Como cadastrar clientes ", modulo: "Comercial", status: "Concluído", duracao: "45 minutos", nivel: "Básico", progresso: 100, imagem: "./static/compradores-seu-papel-no-varejo.jpg", video: "./videos/clientes.mp4", descricao: "Aprenda à como cadastrar Clientes no Sistema, sejam eles pessoas Físicas (CPF) ou pessoas jurídicas (CNPJ)", visualizacoes: 120 },
    { id: 2, nome: "Como Cadastrar Representantes", modulo: "Comercial", status: "Em Andamento", duracao: "30 minutos", nivel: "Intermediário", progresso: 50, imagem: "./static/bom-relacionamento-fornecedores.jpg", video: "./videos/clientes.mp4", descricao: "Aprenda à como cadastrar Fornecedores no Sistema, sejam eles pessoas Físicas (CPF) ou pessoas jurídicas (CNPJ)", visualizacoes: 80 },
    { id: 3, nome: "Cadastro de transportadoras", modulo: "Comercial", status: "Não Iniciado", duracao: "90 minutos", nivel: "Especialista", progresso: 0, imagem: "./static/contratos.avif", video: "./videos/clientes.mp4", descricao: "Descrição do treinamento 4", visualizacoes: 30 },
    { id: 4, nome: "Cadastro de Tabela de Preço", modulo: "Estoque", status: "Não Iniciado", duracao: "50 minutos", nivel: "Intermediário", progresso: 0, imagem: "./static/produtos.jpg", video: "./videos/clientes.mp4", descricao: "Aprenda à como Cadastrar Produtos no Sistema.", visualizacoes: 70 },
];

//traga os dados da api pra ca ^^^^ exemolo:

 /*async function carregarTreinamentos() {
    const response = await fetch('/api/treinamentos');
    const treinamentos = await response.json();
    // Atualizar lógica para usar esses dados
} */



function exibirTreinamentos(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container com ID ${containerId} não encontrado!`);
        return;
    }
    container.innerHTML = "";
    lista.forEach(treinamento => {
        const card = document.createElement('div');
        card.className = "bg-secondary rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 card-hover flex-shrink-0 w-[300px]";
        
        // aqui voce traga a imagem de cada treinamento do banco de dados
        const imageUrl = `{{ url_for('static', filename=aula.thumbnail) }}`;

        card.innerHTML = `
            <div class="relative">
                <img src="${imageUrl}" alt="${treinamento.nome}" class="w-full h-48 object-cover">
                <div class="absolute top-0 right-0 bg-${getColor(treinamento.status)} text-white text-xs px-2 py-1 m-2 rounded-lg">
                    <i class="fas fa-${getIcon(treinamento.status)} mr-1"></i> ${treinamento.status}
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <span class="text-xs text-gray-300"><i class="fas fa-clock mr-1"></i> ${treinamento.duracao}</span>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-semibold">${treinamento.nome}</h3>
                </div>
                <p class="text-gray-400 text-sm mb-4">Módulo: ${treinamento.modulo}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <span class="inline-block w-3 h-3 rounded-full bg-${getProgressColor(treinamento.status)} mr-2 ${treinamento.status === 'Em Andamento' ? 'badge-pulse' : ''}"></span>
                        <span class="text-${getProgressColor(treinamento.status)} text-xs">${treinamento.status}</span>
                    </div>
                    <button class="bg-${getButtonColor(treinamento.status)} hover:bg-${getHoverColor(treinamento.status)} text-white text-sm px-3 py-1 rounded-lg transition-colors">
                        ${getButtonText(treinamento.status)}
                    </button>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `detalhesTreinamento.html?id=${treinamento.id}`;
        });

        container.appendChild(card);
    });
    container.classList.remove('hidden');
}


// Funções auxiliares para obter cores e textos
function getColor(status) {
    switch (status) {
        case "Concluído": return "success";
        case "Em Andamento": return "warning";
        case "Não Iniciado": return "red";
        default: return "accent";
    }
}

// Funções auxiliares para obter cores e textos
function getIcon(status) {
    switch (status) {
        case "Concluído": return "check-circle ";
        case "Em Andamento": return "play-circle";
        case "Não Iniciado": return "star";
        default: return "info-circle";
    }
}

// busca o treinamento pelo id
function buscarTreinamentoPorId(id) {
   //puxar os dados que ja estao aqui 
    if (!id) {
        console.error("ID do treinamento não fornecido!");
        return;
    }
    return treinamentos.find(treinamento => treinamento.id === parseInt(id));
}



// Função para exibir os dados do treinamento na página


document.addEventListener('DOMContentLoaded', () => {
    const treinamentoId = getQueryParam('id');
    console.log('ID do treinamento:', treinamentoId); 
    const treinamento = buscarTreinamentoPorId(treinamentoId);
    console.log('Treinamento encontrado:', treinamento); 
    exibirDadosTreinamento(treinamento);
});


function exibirDadosTreinamento(treinamento) {
    if (!treinamento) {
        console.error("Treinamento não encontrado!");
        return;
    }

    document.getElementById('nomeTreinamento').textContent = treinamento.nome;
    document.getElementById('moduloTreinamento').textContent = treinamento.modulo;
    document.getElementById('tituloAula').innerHTML = `<i class="fas fa-play-circle text-accent mr-2"></i> ${treinamento.nome}`;
    document.getElementById('descricaoAula').textContent = treinamento.descricao;
    document.getElementById('visualizacoes').textContent = treinamento.visualizacoes;

    // Tags
    const tagsContainer = document.getElementById('tagsAula');
    tagsContainer.innerHTML = '';
    const tags = treinamento.descricao.split(' ').map(tag => tag.toLowerCase().replace(/[\.,]/g, ''));
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = "bg-secondary text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600";
        tagElement.textContent = `#${tag}`;
        tagsContainer.appendChild(tagElement);
    });

    // Colocar o vídeo (aqui voce adpatar para o banco de dados flask) 
    const videoContainer = document.getElementById('videoContainer');
    if (videoContainer && treinamento.video) {
        videoContainer.innerHTML = `
            <video 
                controls 
                class="w-full  shadow-lg"
                preload="metadata"
            >
                <source src="${treinamento.video}" type="video/mp4">
                <p class="text-red-500">Seu navegador não suporta o elemento de vídeo.</p>
            </video>
        `;
    } else {
        console.error('Container de vídeo não encontrado ou vídeo não especificado');
    }
}


// Função para carregar as próximas aulas do módulo atual
function carregarProximasAulas(treinamentoAtual) {
    const proximasAulasContainer = document.getElementById('proximas-aulas-container');
    const moduloAtualNome = document.getElementById('moduloAtualNome');
    if (!proximasAulasContainer || !moduloAtualNome) {
        console.error('Container ou nome do módulo não encontrado!');
        return;
    }

    // Definir o nome do módulo atual
    moduloAtualNome.textContent = treinamentoAtual.modulo;

    // Filtrar apenas as aulas do mesmo módulo
    const aulasDoModulo = treinamentos.filter(t => t.modulo === treinamentoAtual.modulo);
    
    // Encontrar o índice da aula atual
    const indiceAtual = aulasDoModulo.findIndex(t => t.id === treinamentoAtual.id);
    
    // Pegar apenas as próximas aulas (após a atual)
    const proximasAulas = aulasDoModulo.slice(indiceAtual + 1);

    proximasAulasContainer.innerHTML = '';
    
    if (proximasAulas.length === 0) {
        proximasAulasContainer.innerHTML = `
            <div class="p-2 text-gray-400 text-sm">
                Nenhuma aula futura encontrada neste módulo.
            </div>
        `;
        return;
    }

    proximasAulas.forEach(aula => {
        const aulaElement = document.createElement('div');
        aulaElement.className = "flex items-center p-2 rounded-lg hover:bg-primary hover:bg-opacity-30 transition-colors";
        aulaElement.innerHTML = `
            <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-lock text-gray-400"></i>
            </div>
            <div class="flex-1 min-w-0">
                <p class="font-medium truncate">${aula.nome}</p>
                <p class="text-xs text-gray-400">${aula.duracao} • ${aula.status === 'Não Iniciado' ? 'Bloqueado' : aula.status}</p>
            </div>
        `;
        proximasAulasContainer.appendChild(aulaElement);
    });
}


function getProgressColor(status) {
    switch (status) {
        case "Concluído": return "green";
        case "Em Andamento": return "yellow-400";
        case "Não Iniciado": return "gray-300";
        default: return "gray-400";
    }
}

function getButtonColor(status) {
    switch (status) {
        case "Concluído": return "";
        case "Em Andamento": return "accent";
        case "Não Iniciado": return "green";
        default: return "gray-500";
    }
}

function getHoverColor(status) {
    switch (status) {
        case "Concluído": return "";
        case "Em Andamento": return "blue-600";
        case "Não Iniciado": return "green-700";
        default: return "gray-600";
    }
}

function getButtonText(status) {
    switch (status) {
        case "Concluído": return "Revisar";
        case "Em Andamento": return "Continuar";
        case "Não Iniciado": return "Iniciar";
        default: return "Acessar";
    }
}

// Função de filtro com debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function filtrarTreinamentos() {
    const termoBusca = document.getElementById("search").value.toLowerCase();
    const moduloFiltro = document.getElementById("modulo").value;
    const statusFiltro = document.getElementById("status").value;

    const filtrados = treinamentos.filter(treinamento => {
        return (
            (treinamento.nome.toLowerCase().includes(termoBusca) || termoBusca === "") &&
            (treinamento.modulo === moduloFiltro || moduloFiltro === "Todos") &&
            (treinamento.status === statusFiltro || statusFiltro === "Todos")
        );
    });

    // Exibir os treinamentos filtrados por módulo
    const comercialTreinamentos = filtrados.filter(t => t.modulo === "Comercial");
    const estoqueTreinamentos = filtrados.filter(t => t.modulo === "Estoque");
    
    exibirTreinamentos(comercialTreinamentos, "comercial-container");
    exibirTreinamentos(estoqueTreinamentos, "estoque-container");
}

// Adicionar eventos com debounce
const debouncedFiltrarTreinamentos = debounce(filtrarTreinamentos, 300);

// Inicializa a lista quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM carregado, inicializando treinamentos");
    
    // Adicionar listeners aos filtros
    document.getElementById("search").addEventListener("input", debouncedFiltrarTreinamentos);
    document.getElementById("modulo").addEventListener("change", filtrarTreinamentos);
    document.getElementById("status").addEventListener("change", filtrarTreinamentos);
    
    // Carregar treinamentos iniciais
    const comercialTreinamentos = treinamentos.filter(t => t.modulo === "Comercial");
    const estoqueTreinamentos = treinamentos.filter(t => t.modulo === "Estoque");
    
    console.log("Comercial treinamentos:", comercialTreinamentos);
    console.log("Estoque treinamentos:", estoqueTreinamentos);
    
    exibirTreinamentos(comercialTreinamentos, "comercial-container");
    exibirTreinamentos(estoqueTreinamentos, "estoque-container");
});

function toggleModule(containerId) {
    const container = document.getElementById(containerId);
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('fade-in');
        container.classList.remove('fade-out');
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
    } else {
        container.classList.add('fade-out');
        container.classList.remove('fade-in');
        setTimeout(() => {
            container.classList.add('hidden');
        }, 300); // Tempo da animação
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
    }
}
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .fade-in {
            animation: fadeIn 0.3s ease-in-out;
        }
        .fade-out {
            animation: fadeOut 0.3s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
    </style>
`);



