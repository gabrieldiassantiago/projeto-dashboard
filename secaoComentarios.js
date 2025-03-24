const initialComments = [
    {
        id: 1,
        author: "Carlos Silva",
        avatar: "./static/istockphoto-1028398136-170667a.jpg",
        role: "Instrutor",
        content: "Olá pessoal! Usem este espaço para tirar dúvidas sobre o conteúdo da aula. Estou à disposição para ajudar.",
        date: "2 dias atrás",
        likes: 12,
        isInstructor: true,
        replies: []
    },
    {
        id: 2,
        author: "Maria Santos",
        avatar: "./static/istockphoto-1028398136-170667a.jpg",
        role: "Aluno",
        content: "Excelente aula! Consegui entender bem os conceitos de CRM apresentados. Tenho uma dúvida: como podemos integrar o CRM com outras ferramentas de marketing?",
        date: "Ontem",
        likes: 5,
        isInstructor: false,
        replies: [
            {
                id: 21,
                author: "Carlos Silva",
                avatar: "./static/istockphoto-1028398136-170667a.jpg",
                role: "Instrutor",
                content: "Ótima pergunta, Maria! Na próxima aula vamos abordar justamente as integrações. Mas adiantando, você pode usar APIs ou ferramentas como Zapier para conectar o CRM com plataformas de email marketing, redes sociais e outras ferramentas.",
                date: "12 horas atrás",
                likes: 3,
                isInstructor: true
            }
        ]
    },
    {
        id: 3,
        author: "João Oliveira",
        avatar: "./static/istockphoto-1028398136-170667a.jpg",
        role: "Aluno",
        content: "Estou tendo dificuldade em configurar os relatórios personalizados. Alguém pode me ajudar?",
        date: "3 dias atrás",
        likes: 2,
        isInstructor: false,
        replies: []
    }
];

// Variáveis globais
let comments = [...initialComments];
let currentUser = {
    name: "Você",
    avatar: "./static/istockphoto-1028398136-170667a.jpg",
    role: "Aluno"
};
let replyingTo = null;
let editingComment = null;
let deletingComment = null;
let commentIdCounter = 4;
let replyIdCounter = 22;

// Elementos DOM
const commentsContainer = document.getElementById('comments-container');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const loadMoreBtn = document.getElementById('load-more');
const commentCount = document.getElementById('comment-count');
const commentSort = document.getElementById('comment-sort');
const emojiButton = document.getElementById('emoji-button');
const emojiPicker = document.getElementById('emoji-picker');
const replyModal = document.getElementById('reply-modal');
const closeReplyModal = document.getElementById('close-reply-modal');
const replyToInfo = document.getElementById('reply-to-info');
const replyInput = document.getElementById('reply-input');
const submitReply = document.getElementById('submit-reply');
const cancelReply = document.getElementById('cancel-reply');
const deleteConfirm = document.getElementById('delete-confirm');
const confirmDelete = document.getElementById('confirm-delete');
const cancelDelete = document.getElementById('cancel-delete');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderComments();
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Formulário de comentário
    commentForm.addEventListener('submit', handleCommentSubmit);
    
    // Botão de carregar mais
    loadMoreBtn.addEventListener('click', loadMoreComments);
    
    
    // Emoji picker
    emojiButton.addEventListener('click', toggleEmojiPicker);
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', insertEmoji);
    });
    
    // Fechar emoji picker ao clicar fora
    document.addEventListener('click', (e) => {
        if (!emojiPicker.contains(e.target) && e.target !== emojiButton) {
            emojiPicker.classList.add('hidden');
        }
    });
    
    // Modal de resposta
    closeReplyModal.addEventListener('click', closeReplyModalHandler);
    cancelReply.addEventListener('click', closeReplyModalHandler);
    submitReply.addEventListener('click', submitReplyHandler);
    
    // Confirmação de exclusão
    confirmDelete.addEventListener('click', confirmDeleteHandler);
    cancelDelete.addEventListener('click', () => {
        deleteConfirm.classList.add('hidden');
        deletingComment = null;
    });
}

// Renderizar todos os comentários
function renderComments() {
    commentsContainer.innerHTML = '';
    
    comments.forEach(comment => {
        commentsContainer.appendChild(createCommentElement(comment));
    });
    
    updateCommentCount();
}

// Criar elemento de comentário
function createCommentElement(comment) {
    const commentEl = document.createElement('div');
    commentEl.className = `comment-item p-4 bg-primary bg-opacity-50 rounded-lg ${comment.isInstructor ? 'instructor' : ''}`;
    commentEl.dataset.id = comment.id;
    
    const isCurrentUser = comment.author === currentUser.name;
    
    commentEl.innerHTML = `
        <div class="flex items-start gap-3">
            <img src="${comment.avatar}" alt="${comment.author}" class="w-10 h-10 rounded-full">
            <div class="flex-1">
                <div class="flex justify-between mb-1 comment-header">
                    <div class="flex items-center">
                        <h4 class="font-semibold">${comment.author}</h4>
                        ${comment.isInstructor ? `<span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-lg ml-2">Instrutor</span>` : ''}
                        ${isCurrentUser ? `<span class="bg-accent text-white text-xs px-2 py-0.5 rounded-lg ml-2">Você</span>` : ''}
                    </div>
                    <span class="text-xs text-gray-400 comment-date">${comment.date}</span>
                </div>
                <div class="comment-content">
                    <p class="text-gray-300 mb-3">${comment.content}</p>
                </div>
                <div class="flex items-center gap-4 text-sm text-gray-400 comment-actions">
                    <button class="like-button flex items-center gap-1 hover:text-accent ${comment.liked ? 'comment-liked' : ''}" data-id="${comment.id}">
                        <i class="fas fa-thumbs-up"></i> 
                        <span class="like-count">${comment.likes}</span>
                    </button>
                    <button class="reply-button flex items-center gap-1 hover:text-accent" data-id="${comment.id}">
                        <i class="fas fa-reply"></i> 
                        <span>Responder</span>
                    </button>
                    ${isCurrentUser ? `
                        <button class="edit-button flex items-center gap-1 hover:text-info" data-id="${comment.id}">
                            <i class="fas fa-edit"></i> 
                            <span>Editar</span>
                        </button>
                        <button class="delete-button flex items-center gap-1 hover:text-danger" data-id="${comment.id}">
                            <i class="fas fa-trash-alt"></i> 
                            <span>Excluir</span>
                        </button>
                    ` : `
                        
                    `}
                </div>
            </div>
        </div>
    `;
    
    // Adicionar event listeners para os botões
    setTimeout(() => {
        const likeBtn = commentEl.querySelector('.like-button');
        const replyBtn = commentEl.querySelector('.reply-button');
        const reportBtn = commentEl.querySelector('.report-button');
        const editBtn = commentEl.querySelector('.edit-button');
        const deleteBtn = commentEl.querySelector('.delete-button');
        
        if (likeBtn) likeBtn.addEventListener('click', handleLike);
        if (replyBtn) replyBtn.addEventListener('click', handleReply);
        if (reportBtn) reportBtn.addEventListener('click', handleReport);
        if (editBtn) editBtn.addEventListener('click', handleEdit);
        if (deleteBtn) deleteBtn.addEventListener('click', handleDelete);
    }, 0);
    
    // Adicionar respostas se existirem
    if (comment.replies && comment.replies.length > 0) {
        const repliesContainer = document.createElement('div');
        repliesContainer.className = 'replies-container mt-3';
        
        comment.replies.forEach(reply => {
            const replyEl = document.createElement('div');
            replyEl.className = `reply-item p-3 bg-secondary bg-opacity-70 rounded-lg mt-2 ${reply.isInstructor ? 'instructor' : ''}`;
            replyEl.dataset.id = reply.id;
            replyEl.dataset.parentId = comment.id;
            
            const isCurrentUserReply = reply.author === currentUser.name;
            
            replyEl.innerHTML = `
                <div class="flex items-start gap-3">
                    <img src="${reply.avatar}" alt="${reply.author}" class="w-8 h-8 rounded-full">
                    <div class="flex-1">
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center">
                                <h4 class="font-semibold">${reply.author}</h4>
                                ${reply.isInstructor ? `<span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-lg ml-2">Instrutor</span>` : ''}
                                ${isCurrentUserReply ? `<span class="bg-accent text-white text-xs px-2 py-0.5 rounded-lg ml-2">Você</span>` : ''}
                            </div>
                            <span class="text-xs text-gray-400">${reply.date}</span>
                        </div>
                        <div class="reply-content">
                            <p class="text-gray-300 mb-2">${reply.content}</p>
                        </div>
                        <div class="flex items-center gap-3 text-xs text-gray-400">
                            <button class="like-reply-button flex items-center gap-1 hover:text-accent ${reply.liked ? 'comment-liked' : ''}" data-id="${reply.id}" data-parent-id="${comment.id}">
                                <i class="fas fa-thumbs-up"></i> 
                                <span class="like-count">${reply.likes}</span>
                            </button>
                            ${isCurrentUserReply ? `
                                <button class="edit-reply-button flex items-center gap-1 hover:text-info" data-id="${reply.id}" data-parent-id="${comment.id}">
                                    <i class="fas fa-edit"></i> 
                                    <span>Editar</span>
                                </button>
                                <button class="delete-reply-button flex items-center gap-1 hover:text-danger" data-id="${reply.id}" data-parent-id="${comment.id}">
                                    <i class="fas fa-trash-alt"></i> 
                                    <span>Excluir</span>
                                </button>
                            ` : `
                                <button class="report-reply-button flex items-center gap-1 hover:text-warning" data-id="${reply.id}" data-parent-id="${comment.id}">
                                    <i class="fas fa-flag"></i> 
                                    <span>Reportar</span>
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `;
            
            // Adicionar event listeners para os botões da resposta
            setTimeout(() => {
                const likeReplyBtn = replyEl.querySelector('.like-reply-button');
                const editReplyBtn = replyEl.querySelector('.edit-reply-button');
                const deleteReplyBtn = replyEl.querySelector('.delete-reply-button');
                const reportReplyBtn = replyEl.querySelector('.report-reply-button');
                
                if (likeReplyBtn) likeReplyBtn.addEventListener('click', handleLikeReply);
                if (editReplyBtn) editReplyBtn.addEventListener('click', handleEditReply);
                if (deleteReplyBtn) deleteReplyBtn.addEventListener('click', handleDeleteReply);
                if (reportReplyBtn) reportReplyBtn.addEventListener('click', handleReportReply);
            }, 0);
            
            repliesContainer.appendChild(replyEl);
        });
        
        commentEl.appendChild(repliesContainer);
    }
    
    return commentEl;
}

// Manipuladores de eventos
function handleCommentSubmit(e) {
    e.preventDefault();
    
    const content = commentInput.value.trim();
    if (!content) return;
    
    const newComment = {
        id: commentIdCounter++,
        author: currentUser.name,
        avatar: currentUser.avatar,
        role: currentUser.role,
        content: content,
        date: "Agora",
        likes: 0,
        isInstructor: false,
        replies: []
    };
    
    comments.unshift(newComment);
    
    // Renderizar o novo comentário
    const commentEl = createCommentElement(newComment);
    commentEl.classList.add('new-comment');
    commentsContainer.insertBefore(commentEl, commentsContainer.firstChild);
    
    // Limpar o formulário
    commentInput.value = '';
    
    // Atualizar contagem
    updateCommentCount();
    
    // Destacar o novo comentário
    setTimeout(() => {
        commentEl.classList.add('highlight');
    }, 100);
}

function handleLike(e) {
    const button = e.currentTarget;
    const commentId = parseInt(button.dataset.id);
    const comment = comments.find(c => c.id === commentId);
    
    if (!comment) return;
    
    // Toggle like
    if (button.classList.contains('comment-liked')) {
        comment.likes--;
        button.classList.remove('comment-liked');
    } else {
        comment.likes++;
        button.classList.add('comment-liked');
    }
    
    // Atualizar contagem
    button.querySelector('.like-count').textContent = comment.likes;
    
    // Adicionar efeito de pulso
    button.classList.add('pulse');
    setTimeout(() => {
        button.classList.remove('pulse');
    }, 1000);
}

function handleLikeReply(e) {
    const button = e.currentTarget;
    const replyId = parseInt(button.dataset.id);
    const parentId = parseInt(button.dataset.parentId);
    
    const comment = comments.find(c => c.id === parentId);
    if (!comment || !comment.replies) return;
    
    const reply = comment.replies.find(r => r.id === replyId);
    if (!reply) return;
    
    // Toggle like
    if (button.classList.contains('comment-liked')) {
        reply.likes--;
        button.classList.remove('comment-liked');
    } else {
        reply.likes++;
        button.classList.add('comment-liked');
    }
    
    // Atualizar contagem
    button.querySelector('.like-count').textContent = reply.likes;
    
    // Adicionar efeito de pulso
    button.classList.add('pulse');
    setTimeout(() => {
        button.classList.remove('pulse');
    }, 1000);
}

function handleReply(e) {
    const button = e.currentTarget;
    const commentId = parseInt(button.dataset.id);
    const comment = comments.find(c => c.id === commentId);
    
    if (!comment) return;
    
    // Abrir modal de resposta
    replyingTo = comment;
    replyToInfo.innerHTML = `
        <div class="flex items-start gap-2">
            <img src="${comment.avatar}" alt="${comment.author}" class="w-8 h-8 rounded-full">
            <div>
                <div class="flex items-center">
                    <span class="font-semibold">${comment.author}</span>
                    ${comment.isInstructor ? `<span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-lg ml-2">Instrutor</span>` : ''}
                </div>
                <p class="text-gray-300 text-sm">${comment.content.length > 100 ? comment.content.substring(0, 100) + '...' : comment.content}</p>
            </div>
        </div>
    `;
    
    replyModal.classList.remove('hidden');
    replyInput.focus();
}

function closeReplyModalHandler() {
    replyModal.classList.add('hidden');
    replyInput.value = '';
    replyingTo = null;
}

function submitReplyHandler() {
    const content = replyInput.value.trim();
    if (!content || !replyingTo) return;
    
    const newReply = {
        id: replyIdCounter++,
        author: currentUser.name,
        avatar: currentUser.avatar,
        role: currentUser.role,
        content: content,
        date: "Agora",
        likes: 0,
        isInstructor: false
    };
    
    // Adicionar resposta ao comentário
    if (!replyingTo.replies) replyingTo.replies = [];
    replyingTo.replies.push(newReply);
    
    // Fechar modal
    closeReplyModalHandler();
    
    // Re-renderizar comentários
    renderComments();
    
    // Rolar até o comentário e destacar a nova resposta
    setTimeout(() => {
        const commentEl = document.querySelector(`.comment-item[data-id="${replyingTo.id}"]`);
        if (commentEl) {
            commentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            const replyEl = commentEl.querySelector(`.reply-item[data-id="${newReply.id}"]`);
            if (replyEl) {
                replyEl.classList.add('highlight');
            }
        }
    }, 100);
}

function handleEdit(e) {
    const button = e.currentTarget;
    const commentId = parseInt(button.dataset.id);
    const commentEl = button.closest('.comment-item');
    const contentEl = commentEl.querySelector('.comment-content');
    const comment = comments.find(c => c.id === commentId);
    
    if (!comment) return;
    
    // Já está em modo de edição?
    if (commentEl.classList.contains('edit-mode')) return;
    
    // Salvar o conteúdo original
    const originalContent = comment.content;
    
    // Mudar para modo de edição
    commentEl.classList.add('edit-mode');
    contentEl.innerHTML = `
        <textarea class="w-full p-3 bg-primary bg-opacity-50 rounded-lg text-white border border-gray-700 focus:border-accent focus:outline-none mb-2">${originalContent}</textarea>
        <div class="edit-buttons">
            <button class="cancel-edit-button bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                Cancelar
            </button>
            <button class="save-edit-button bg-accent hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                <i class="fas fa-save mr-1"></i>Salvar
            </button>
        </div>
    `;
    
    // Adicionar event listeners
    const textarea = contentEl.querySelector('textarea');
    const cancelBtn = contentEl.querySelector('.cancel-edit-button');
    const saveBtn = contentEl.querySelector('.save-edit-button');
    
    textarea.focus();
    
    cancelBtn.addEventListener('click', () => {
        commentEl.classList.remove('edit-mode');
        contentEl.innerHTML = `<p class="text-gray-300 mb-3">${originalContent}</p>`;
    });
    
    saveBtn.addEventListener('click', () => {
        const newContent = textarea.value.trim();
        if (!newContent) return;
        
        // Atualizar comentário
        comment.content = newContent;
        comment.edited = true;
        
        // Atualizar UI
        commentEl.classList.remove('edit-mode');
        contentEl.innerHTML = `<p class="text-gray-300 mb-3">${newContent} <span class="text-xs text-gray-500">(editado)</span></p>`;
    });
}

function handleEditReply(e) {
    const button = e.currentTarget;
    const replyId = parseInt(button.dataset.id);
    const parentId = parseInt(button.dataset.parentId);
    const replyEl = button.closest('.reply-item');
    const contentEl = replyEl.querySelector('.reply-content');
    
    const comment = comments.find(c => c.id === parentId);
    if (!comment || !comment.replies) return;
    
    const reply = comment.replies.find(r => r.id === replyId);
    if (!reply) return;
    
    // Já está em modo de edição?
    if (replyEl.classList.contains('edit-mode')) return;
    
    // Salvar o conteúdo original
    const originalContent = reply.content;
    
    // Mudar para modo de edição
    replyEl.classList.add('edit-mode');
    contentEl.innerHTML = `
        <textarea class="w-full p-2 bg-primary bg-opacity-50 rounded-lg text-white border border-gray-700 focus:border-accent focus:outline-none mb-2 text-sm">${originalContent}</textarea>
        <div class="edit-buttons">
            <button class="cancel-edit-reply-button bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                Cancelar
            </button>
            <button class="save-edit-reply-button bg-accent hover:bg-orange-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                <i class="fas fa-save mr-1"></i>Salvar
            </button>
        </div>
    `;
    
    // Adicionar event listeners
    const textarea = contentEl.querySelector('textarea');
    const cancelBtn = contentEl.querySelector('.cancel-edit-reply-button');
    const saveBtn = contentEl.querySelector('.save-edit-reply-button');
    
    textarea.focus();
    
    cancelBtn.addEventListener('click', () => {
        replyEl.classList.remove('edit-mode');
        contentEl.innerHTML = `<p class="text-gray-300 mb-2">${originalContent}</p>`;
    });
    
    saveBtn.addEventListener('click', () => {
        const newContent = textarea.value.trim();
        if (!newContent) return;
        
        // Atualizar resposta
        reply.content = newContent;
        reply.edited = true;
        
        // Atualizar UI
        replyEl.classList.remove('edit-mode');
        contentEl.innerHTML = `<p class="text-gray-300 mb-2">${newContent} <span class="text-xs text-gray-500">(editado)</span></p>`;
    });
}

function handleDelete(e) {
    const button = e.currentTarget;
    const commentId = parseInt(button.dataset.id);
    const comment = comments.find(c => c.id === commentId);
    
    if (!comment) return;
    
    // Abrir confirmação de exclusão
    deletingComment = { id: commentId, type: 'comment' };
    deleteConfirm.classList.remove('hidden');
}

function handleDeleteReply(e) {
    const button = e.currentTarget;
    const replyId = parseInt(button.dataset.id);
    const parentId = parseInt(button.dataset.parentId);
    
    // Abrir confirmação de exclusão
    deletingComment = { id: replyId, parentId: parentId, type: 'reply' };
    deleteConfirm.classList.remove('hidden');
}

function confirmDeleteHandler() {
    if (!deletingComment) return;
    
    if (deletingComment.type === 'comment') {
        // Remover comentário
        comments = comments.filter(c => c.id !== deletingComment.id);
        
        // Animar remoção
        const commentEl = document.querySelector(`.comment-item[data-id="${deletingComment.id}"]`);
        if (commentEl) {
            commentEl.classList.add('deleted');
            setTimeout(() => {
                commentEl.remove();
                updateCommentCount();
            }, 300);
        }
    } else if (deletingComment.type === 'reply') {
        // Remover resposta
        const comment = comments.find(c => c.id === deletingComment.parentId);
        if (comment && comment.replies) {
            comment.replies = comment.replies.filter(r => r.id !== deletingComment.id);
            
            // Animar remoção
            const replyEl = document.querySelector(`.reply-item[data-id="${deletingComment.id}"]`);
            if (replyEl) {
                replyEl.classList.add('deleted');
                setTimeout(() => {
                    replyEl.remove();
                }, 300);
            }
        }
    }
    
    // Fechar confirmação
    deleteConfirm.classList.add('hidden');
    deletingComment = null;
}

function handleReport(e) {
    const button = e.currentTarget;
    
    // Simular relatório
    button.innerHTML = '<i class="fas fa-check"></i> <span>Reportado</span>';
    button.classList.add('text-warning');
    button.disabled = true;
    
    // Mostrar mensagem
    showNotification('Comentário reportado com sucesso. Nossa equipe irá analisar.', 'warning');
}

function handleReportReply(e) {
    const button = e.currentTarget;
    
    // Simular relatório
    button.innerHTML = '<i class="fas fa-check"></i> <span>Reportado</span>';
    button.classList.add('text-warning');
    button.disabled = true;
    
    // Mostrar mensagem
    showNotification('Resposta reportada com sucesso. Nossa equipe irá analisar.', 'warning');
}

// Funções auxiliares
function updateCommentCount() {
    let total = comments.length;
    
    // Contar também as respostas
    comments.forEach(comment => {
        if (comment.replies) {
            total += comment.replies.length;
        }
    });
    
    commentCount.textContent = total;
}

function toggleEmojiPicker(e) {
    e.stopPropagation();
    
    // Posicionar o emoji picker
    const rect = emojiButton.getBoundingClientRect();
    emojiPicker.style.top = `${rect.bottom + window.scrollY + 5}px`;
    emojiPicker.style.left = `${rect.left + window.scrollX}px`;
    
    emojiPicker.classList.toggle('hidden');
}

function insertEmoji(e) {
    const emoji = e.target.textContent;
    
    // Inserir no textarea ativo
    let textarea;
    
    if (!replyModal.classList.contains('hidden')) {
        textarea = replyInput;
    } else {
        textarea = commentInput;
    }
    
    if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        
        textarea.value = text.substring(0, start) + emoji + text.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
        textarea.focus();
    }
    
    // Fechar emoji picker
    emojiPicker.classList.add('hidden');
}

function loadMoreComments() {
    // Simular carregamento
    loadMoreBtn.innerHTML = '<span class="loading-spinner mr-2"></span> Carregando...';
    loadMoreBtn.disabled = true;
    
    // Simular delay de rede
    setTimeout(() => {
        // Adicionar mais comentários (simulação)
        const moreComments = [
            {
                id: commentIdCounter++,
                author: "Pedro Mendes",
                avatar: "./static/istockphoto-1028398136-170667a.jpg",
                role: "Aluno",
                content: "Alguém sabe como exportar os dados do CRM para Excel? Preciso fazer uma análise mais detalhada.",
                date: "1 semana atrás",
                likes: 4,
                isInstructor: false,
                replies: []
            },
            {
                id: commentIdCounter++,
                author: "Ana Costa",
                avatar: "./static/istockphoto-1028398136-170667a.jpg",
                role: "Aluno",
                content: "Estou adorando o curso! As explicações são muito claras e práticas.",
                date: "1 semana atrás",
                likes: 7,
                isInstructor: false,
                replies: []
            }
        ];
        
        // Adicionar à lista
        comments = [...comments, ...moreComments];
        
        // Renderizar novos comentários
        moreComments.forEach(comment => {
            const commentEl = createCommentElement(comment);
            commentEl.classList.add('new-comment');
            commentsContainer.appendChild(commentEl);
        });
        
        // Restaurar botão
        loadMoreBtn.innerHTML = '<i class="fas fa-sync-alt mr-2"></i>Carregar mais comentários';
        loadMoreBtn.disabled = false;
        
        // Atualizar contagem
        updateCommentCount();
        
        // Se não houver mais comentários para carregar
        if (comments.length > 10) {
            loadMoreBtn.innerHTML = 'Todos os comentários foram carregados';
            loadMoreBtn.disabled = true;
        }
    }, 1500);
}

function sortComments() {
    const sortBy = commentSort.value;
    
    switch (sortBy) {
        case 'newest':
            comments.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            comments.sort((a, b) => a.id - b.id);
            break;
        case 'popular':
            comments.sort((a, b) => b.likes - a.likes);
            break;
    }
    
    renderComments();
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 p-3 rounded-lg shadow-lg text-white text-sm z-50 ${type === 'warning' ? 'bg-warning' : type === 'success' ? 'bg-success' : 'bg-info'}`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas ${type === 'warning' ? 'fa-exclamation-triangle' : type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remover após alguns segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}