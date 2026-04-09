// Dados dos produtos da página inicial
const homePageProducts = [
    { id: 1, name: "Macaquinho Short Saia", price: 104.99, image: "imagens/macaquinho-short-saia.jpg", category: "macaquinho" },
    { id: 2, name: "Macaquinho Rosa", price: 114.99, image: "imagens/macaquinho-rosa.jpg", category: "macaquinho" },
    { id: 3, name: "Macacão", price: 125.99, image: "imagens/macacão.jpg", category: "macacão" },
    { id: 4, name: "Macacão Azul Marinho", price: 137.99, image: "imagens/macacão-azul-marinho.jpg", category: "macacão" }
];

// Dados dos produtos para a página 'Nossos Produtos'
const allProducts = [
    { "id": 5, "name": "Conjunto 1", "image": "imagens/conjunto (1).jpg", "category": "conjunto", "price": 89.90 },
    { "id": 6, "name": "Conjunto 2", "image": "imagens/conjunto (2).jpg", "category": "conjunto", "price": 92.50 },
    { "id": 7, "name": "Conjunto 3", "image": "imagens/conjunto (3).jpg", "category": "conjunto", "price": 87.00 },
    { "id": 8, "name": "Conjunto 4", "image": "imagens/conjunto (4).jpg", "category": "conjunto", "price": 95.90 },
    { "id": 9, "name": "Conjunto 5", "image": "imagens/conjunto (5).jpg", "category": "conjunto", "price": 79.99 },
    { "id": 10, "name": "Conjunto 6", "image": "imagens/conjunto (6).jpg", "category": "conjunto", "price": 91.50 },
    { "id": 11, "name": "Conjunto 7", "image": "imagens/conjunto (7).jpg", "category": "conjunto", "price": 88.80 },
    { "id": 12, "name": "Conjunto 8", "image": "imagens/conjunto (8).jpg", "category": "conjunto", "price": 90.00 },
    { "id": 13, "name": "Conjunto 9", "image": "imagens/conjunto (9).jpg", "category": "conjunto", "price": 93.70 },
    { "id": 14, "name": "Conjunto 10", "image": "imagens/conjunto (10).jpg", "category": "conjunto", "price": 86.90 },
    { "id": 15, "name": "Conjunto 11", "image": "imagens/conjunto (11).jpg", "category": "conjunto", "price": 97.20 },
    { "id": 16, "name": "Conjunto 12", "image": "imagens/conjunto (12).jpg", "category": "conjunto", "price": 84.00 },
    { "id": 17, "name": "Conjunto 13", "image": "imagens/conjunto (13).jpg", "category": "conjunto", "price": 85.90 },
    { "id": 18, "name": "Conjunto 14", "image": "imagens/conjunto (14).jpg", "category": "conjunto", "price": 90.90 },
    { "id": 19, "name": "Conjunto 15", "image": "imagens/conjunto (15).jpg", "category": "conjunto", "price": 94.99 },
    { "id": 20, "name": "Conjunto 16", "image": "imagens/conjunto (16).jpg", "category": "conjunto", "price": 89.00 },
    { "id": 21, "name": "Conjunto 17", "image": "imagens/conjunto (17).jpg", "category": "conjunto", "price": 93.30 },
    { "id": 22, "name": "Conjunto 18", "image": "imagens/conjunto (18).jpg", "category": "conjunto", "price": 88.00 },
    { "id": 23, "name": "Conjunto 19", "image": "imagens/conjunto (19).jpg", "category": "conjunto", "price": 91.80 },
    { "id": 24, "name": "Conjunto 20", "image": "imagens/conjunto (20).jpg", "category": "conjunto", "price": 94.00 },
    { "id": 25, "name": "Conjunto 21", "image": "imagens/conjunto (21).jpg", "category": "conjunto", "price": 92.00 },
    { "id": 26, "name": "Conjunto 22", "image": "imagens/conjunto (22).jpg", "category": "conjunto", "price": 86.50 },
    { "id": 27, "name": "Conjunto 23", "image": "imagens/conjunto (23).jpg", "category": "conjunto", "price": 89.70 },
    { "id": 28, "name": "Conjunto 24", "image": "imagens/conjunto (24).jpg", "category": "conjunto", "price": 90.30 }
];

// Dados dos produtos para a página de Promoções
const promotionsProducts = [
    { "id": 33, "name": "São João (1)", "image": "imagens/sao joao (1).jpg", "category": "promoção", "price": 89.90, "oldPrice": 129.90 },
    { "id": 34, "name": "São João (2)", "image": "imagens/sao joao (2).jpg", "category": "promoção", "price": 92.50, "oldPrice": 135.00 },
    { "id": 35, "name": "São João (3)", "image": "imagens/sao joao (3).jpg", "category": "promoção", "price": 87.00, "oldPrice": 124.00 },
    { "id": 36, "name": "São João (4)", "image": "imagens/sao joao (4).jpg", "category": "promoção", "price": 95.90, "oldPrice": 140.00 },
    { "id": 37, "name": "São João (5)", "image": "imagens/sao joao (5).jpg", "category": "promoção", "price": 79.99, "oldPrice": 119.90 },
    { "id": 38, "name": "São João (6)", "image": "imagens/sao joao (6).jpg", "category": "promoção", "price": 91.50, "oldPrice": 132.00 },
    { "id": 39, "name": "São João (7)", "image": "imagens/sao joao (7).jpg", "category": "promoção", "price": 88.80, "oldPrice": 125.00 },
    { "id": 40, "name": "São João (8)", "image": "imagens/sao joao (8).jpg", "category": "promoção", "price": 90.00, "oldPrice": 129.90 },
    { "id": 41, "name": "São João (9)", "image": "imagens/sao joao (9).jpg", "category": "promoção", "price": 93.70, "oldPrice": 138.90 },
    { "id": 42, "name": "São João (10)", "image": "imagens/sao joao (10).jpg", "category": "promoção", "price": 86.90, "oldPrice": 130.00 },
    { "id": 43, "name": "São João (11)", "image": "imagens/sao joao (11).jpg", "category": "promoção", "price": 97.20, "oldPrice": 145.00 },
    { "id": 44, "name": "São João (12)", "image": "imagens/sao joao (12).jpg", "category": "promoção", "price": 84.00, "oldPrice": 123.00 },
    { "id": 45, "name": "São João (13)", "image": "imagens/sao joao (13).jpg", "category": "promoção", "price": 85.90, "oldPrice": 128.00 },
    { "id": 46, "name": "São João (14)", "image": "imagens/sao joao (14).jpg", "category": "promoção", "price": 90.90, "oldPrice": 136.00 },
    { "id": 47, "name": "São João (15)", "image": "imagens/sao joao (15).jpg", "category": "promoção", "price": 94.99, "oldPrice": 144.99 },
    { "id": 48, "name": "São João (16)", "image": "imagens/sao joao (16).jpg", "category": "promoção", "price": 95.00, "oldPrice": 140.00 }
];

// Variável global para o carrinho, carregada do localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para carregar os produtos em um container específico (usado em index.html e produtos.html)
function loadProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Limpa o container antes de adicionar novos produtos

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/F0F0F0/808080?text=Imagem+Nao+Encontrada';">
            <p class="category">${product.category}</p>
            <h3 class="name">${product.name}</h3>
            ${product.oldPrice ? `<p class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</p>` : ''}
            <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            <button class="buy-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
        `;
        container.appendChild(productCard);
    });

    // Adiciona event listeners aos botões "Adicionar ao Carrinho"
    container.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    // Procura o produto em TODOS os arrays de produtos
    const product = homePageProducts.find(p => p.id === productId) ||
                    allProducts.find(p => p.id === productId) ||
                    promotionsProducts.find(p => p.id === productId);

    if (!product) {
        console.error('Produto não encontrado:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Salva o array atualizado no localStorage
    updateCartCount(); // Atualiza o contador após adicionar
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para atualizar o contador de itens no carrinho na navegação
function updateCartCount() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = storedCart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-icon .cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    console.log(`Itens no carrinho: ${cartCount}`);
}

// Função para mostrar notificação de adição ao carrinho
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--rosa-principal)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease-in-out';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Funções específicas da página do carrinho (para serem chamadas apenas em carrinho.html)
// Função para carregar os itens do carrinho na página do carrinho
function loadCartItems() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartSummary = document.querySelector('.cart-summary');
    const cartActions = document.querySelector('.cart-actions');

    // Sempre atualiza a variável global 'cart' com os dados do localStorage ao carregar os itens
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        cartItemsList.innerHTML = '';
        cartSummary.style.display = 'none';
        cartActions.style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        cartSummary.style.display = 'block';
        cartActions.style.display = 'flex'; // Exibe os botões de ação
    }

    cartItemsList.innerHTML = ''; // Limpa os itens existentes

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/80x80/F0F0F0/808080?text=Imagem+Nao+Encontrada';">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">Remover</button>
        `;
        cartItemsList.appendChild(cartItemDiv);
    });

    // Adiciona event listeners para os botões de quantidade e remover
    cartItemsList.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    cartItemsList.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    cartItemsList.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });

    updateCartSummary();
    updateCartCount(); // Atualiza o contador do carrinho na navegação após carregar/modificar itens
}

// Função para diminuir a quantidade de um item no carrinho
function decreaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            // Se a quantidade for 1, remove o item
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems(); // Recarrega os itens para atualizar a UI e o contador
    }
}

// Função para aumentar a quantidade de um item no carrinho
function increaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems(); // Recarrega os itens para atualizar a UI e o contador
    }
}

// Função para remover um item do carrinho
function removeItemFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Recarrega os itens para atualizar a UI e o contador
}

// Função para atualizar o resumo do carrinho (subtotal, frete, total)
function updateCartSummary() {
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const totalElement = document.getElementById('cart-total');

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shipping = 0; // Por enquanto, frete grátis. Você pode adicionar lógica de cálculo aqui.

    // Se o subtotal for 0, o frete também é 0
    if (subtotal === 0) {
        shipping = 0;
    } else {
        // Exemplo: Frete grátis acima de R$ 200,00
        // if (subtotal < 200) {
        //     shipping = 15; // Exemplo de custo de frete
        // }
        shipping = 0; // Mantendo frete grátis para o exemplo inicial
    }

    let total = subtotal + shipping;

    subtotalElement.textContent = subtotal.toFixed(2).replace('.', ',');
    shippingElement.textContent = shipping.toFixed(2).replace('.', ',');
    totalElement.textContent = total.toFixed(2).replace('.', ',');
}

// --- NOVO CÓDIGO PARA O CARROSSEL PRINCIPAL DO TOPO ---
function setupMainCarousel() {
    const carouselImages = document.querySelectorAll('.carrossel-img');
    let currentImageIndex = 0;
    const intervalTime = 3000; // Tempo em milissegundos (3 segundos)

    if (carouselImages.length === 0) {
        return;
    }

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove('ativo');
        });
        carouselImages[index].classList.add('ativo');
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= carouselImages.length) {
            currentImageIndex = 0;
        }
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    setInterval(nextImage, intervalTime);
}
// --- FIM DO NOVO CÓDIGO PARA O CARROSSEL PRINCIPAL DO TOPO ---


// Carrossel de depoimentos
function setupTestimonialCarousel() {
    const testimonialCarousel = document.querySelector('.testimonials-carousel-track');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (!testimonialCarousel || !prevArrow || !nextArrow || testimonialCards.length === 0) {
        return; // Sai se os elementos não forem encontrados
    }

    let currentIndex = 0;
    let visibleCards = 0;
    let cardWidth = 0;
    let gap = 0;

    function calculateCardMetrics() {
        const carouselContainer = document.querySelector('.testimonials-carousel-container');
        if (!carouselContainer) return;

        const style = window.getComputedStyle(testimonialCarousel);
        gap = parseFloat(style.gap) || 20; // Pega o gap do CSS, padrão 20px

        if (testimonialCards.length > 0) {
            cardWidth = testimonialCards[0].offsetWidth;
        } else {
            cardWidth = 320; // Valor padrão se não houver cards
        }

        const containerWidth = carouselContainer.offsetWidth;

        if (cardWidth > 0) {
            visibleCards = Math.floor((containerWidth + gap) / (cardWidth + gap));
            if (visibleCards === 0 && containerWidth > 0) {
                visibleCards = 1;
            }
        } else {
            visibleCards = 1;
        }

        visibleCards = Math.min(visibleCards, testimonialCards.length);

        const maxIndex = testimonialCards.length - visibleCards;
        if (currentIndex > maxIndex && maxIndex >= 0) {
            currentIndex = maxIndex;
        } else if (maxIndex < 0) {
            currentIndex = 0;
        }

        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        if (testimonialCards.length > visibleCards) {
            const offset = currentIndex * (cardWidth + gap);
            testimonialCarousel.style.transform = `translateX(-${offset}px)`;
        } else {
            testimonialCarousel.style.transform = `translateX(0px)`;
        }
    }

    function slideNext() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return;

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarouselPosition();
    }

    function slidePrev() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return;

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateCarouselPosition();
    }

    nextArrow.addEventListener('click', slideNext);
    prevArrow.addEventListener('click', slidePrev);

    window.addEventListener('resize', calculateCardMetrics);
    setTimeout(calculateCardMetrics, 100);
}


// Quando o DOM estiver carregado, inicializa as funções
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os produtos da página inicial (se o elemento existir)
    if (document.getElementById('products-container')) {
        loadProducts(homePageProducts, 'products-container');
    }

    // Carrega os produtos da página de "Nossos Produtos" (se o elemento existir)
    if (document.getElementById('all-products-grid')) {
        loadProducts(allProducts, 'all-products-grid');
    }

    // Carrega os produtos da página de "Promoções" (se o elemento existir)
    if (document.getElementById('promotions-grid')) {
        loadProducts(promotionsProducts, 'promotions-grid');
    }

    // Chama a função para o carrossel principal do topo
    setupMainCarousel();

    // Configura o carrossel de depoimentos (se os elementos existirem)
    setupTestimonialCarousel();

    // Lógica específica para a página do carrinho (se estivermos nela)
    if (document.getElementById('cart-items-list')) {
        loadCartItems();
        const checkoutButton = document.getElementById('checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                alert('Funcionalidade de Finalizar Compra ainda não implementada. Você pode adicionar a lógica aqui!');
            });
        }
    } else {
        updateCartCount();
    }
});