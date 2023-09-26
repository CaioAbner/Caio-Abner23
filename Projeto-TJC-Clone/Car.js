// Carrinho-Menu
let cartIcon = document.querySelector('#cart-icon'); // Aqui foi criada uma variável "cartIcon" utilizando LET ou seja : Restrito(a) ao bloco (escopo local)
let cart = document.querySelector('.cart');  // Aqui foi criada uma variável "cart" para ajustar o carrinho
let closeCart = document.querySelector('#close-cart');   // Aqui foi adicionada uma variável "closeCart" que irá adicionar funcionalidade de "fechar" o carrinho


// 'Fechar' e 'abrir' o menu :)

cartIcon.onclick = () => {  // Aqui ao clicar(onclick) ele 'adiciona' uma nova class ao cart(carrinho), a class (active/ativo), fazendo assim o menu aparecer ao clicar
    cart.classList.add('active');
};

closeCart.onclick = () => {  // Aqui ao clicar(onclick) ele 'remove' a class atribuida anteriormente ao cart(carrinho), a class (active/ativo), fazendo assim o menu fechar ao clicar
    cart.classList.remove('active');
};

// Funcionamneto do Carrinho

if (document.readyState == 'loading') { // O 'readyState' tem como objetivo identificar o status de carregamento de um documento (readyState = estado de prontidão do meu documento)
    document.addEventListener('DOMContentLoaded', ready);   // Vai executar um "escutador de eventos" quando todo o HTML estiver completamente carregado (Não precisa aguardar o CSS) / o 'ready' executa o código JavaScript assim que o DOM é carregado
} else {
    ready();
}

// Fazendo as funções

function ready() {
    //Remover os itens do Carrinho
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {    // 'for' permite que multiplas variáveis sejam atualizadas cada vez aravés do laço / 'length' indica quantos argumentos a função espera 'i' / 'e' (número de parametros formais)
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Mudança de Quantidade
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

//Remover os itens do Carrinho//Remover os itens do Carrinho

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// Mudança na Quantidade

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal();
}

// Atualizações Totais

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));   // 'parseFloat' analisa um elemento e converte-o em 'string' (caso seja necessário) e retorna um número de ponto flutuante(número decimal)
        var quantity = quantityElement.value;
        total = total + price * quantity;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}