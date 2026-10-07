/* =========================================================
   VIRACOPOS GASTROBAR — SCRIPT PRINCIPAL
   WhatsApp: (61) 91390-9900
   ========================================================= */

const WHATSAPP_NUMBER = "5561913909900";
const CART_KEY = "viracopos-cart-v1";

/* =========================================================
   CARDÁPIO
   ========================================================= */

const MENU = [
  {"nome":"Água com Gás - 500 ml","preco":4.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-com-gas-500-ml.jpg"},
  {"nome":"Água de Coco - 200 ml","preco":6.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-de-coco-200-ml.jpg"},
  {"nome":"Água de Coco - Gelo Frost","preco":8.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-de-coco-gelo-frost.jpg"},
  {"nome":"Água de Coco - 1 Litro","preco":19.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-de-coco-1-litro.jpg"},
  {"nome":"Água sem Gás - 500 ml","preco":3.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-sem-gas-500-ml.jpg"},
  {"nome":"Água Tônica - Lata","preco":7.99,"categoria":"BEBIDAS","imagem":"assets/menu/agua-tonica-lata.jpg"},
  {"nome":"H2O","preco":11.99,"categoria":"BEBIDAS","imagem":"assets/menu/h2o.jpg"},
  {"nome":"Refrigerante - Lata","preco":6.99,"categoria":"BEBIDAS","imagem":"assets/menu/refrigerante-lata.jpg"},
  {"nome":"Refrigerante - 600ml","preco":9.99,"categoria":"BEBIDAS","imagem":"assets/menu/refrigerante-600ml.jpg"},
  {"nome":"Refrigerante - 2 L","preco":18.99,"categoria":"BEBIDAS","imagem":"assets/menu/refrigerante-2-l.jpg"},
  {"nome":"Red Bull","preco":15.99,"categoria":"BEBIDAS","imagem":"assets/menu/red-bull.jpg"},

  {"nome":"Batata Frita","preco":27.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/batata-frita.jpg"},
  {"nome":"Batata Frita Completa (Cheddar e Bacon)","preco":33.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/batata-frita-completa-cheddar-e-bacon.jpg"},
  {"nome":"Mandioca Frita","preco":17.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/mandioca-frita.jpg"},
  {"nome":"Calabresa Acebolada","preco":29.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/calabresa-acebolada.jpg"},
  {"nome":"Calabresa Acebolada c/ Fritas","preco":35.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/calabresa-acebolada-c-fritas.jpg"},
  {"nome":"Frango a Passarinho","preco":42.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/frango-a-passarinho.jpg"},
  {"nome":"Frango a Passarinho c/ Fritas","preco":48.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/frango-a-passarinho-c-fritas.jpg"},
  {"nome":"Carne de Sol Acebolada","preco":64.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/carne-de-sol-acebolada.jpg"},
  {"nome":"Carne de Sol Acebolada c/ Mandioca","preco":69.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/carne-de-sol-acebolada-c-mandioca.jpg"},
  {"nome":"Linguiça Frango c/ Pão de Alho","preco":44.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/linguica-frango-c-pao-de-alho.jpg"},
  {"nome":"Isca de Frango Empanada","preco":49.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/isca-de-frango-empanada.jpg"},
  {"nome":"Isca de Peixe Empanada","preco":79.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/isca-de-peixe-empanada.jpg"},
  {"nome":"Posta de Peixe","preco":49.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/posta-de-peixe.jpg"},
  {"nome":"Porção de Coração de Frango","preco":44.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/porcao-de-coracao-de-frango.jpg"},
  {"nome":"Porção de Pastel Misto (Frango, Queijo e Carne)","preco":27.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/porcao-de-pastel-misto-frango-queijo-e-carne.jpg"},
  {"nome":"Frios (Queijo, Presunto, Azeitona, Salame e Ovo de Codorna)","preco":54.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/frios-queijo-presunto-azeitona-salame-e-ovo-de-codorna.jpg"},
  {"nome":"Camarão Empanado","preco":74.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/camarao-empanado.jpg"},
  {"nome":"Camarão Alho e Óleo","preco":69.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/camarao-alho-e-oleo.jpg"},
  {"nome":"Caldos (Vaca Atolada, Frango e Mocotó)","preco":16.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/caldos-vaca-atolada-frango-e-mocoto.jpg"},
  {"nome":"Torresmo","preco":27.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/torresmo.jpg"},
  {"nome":"MIX VIRACOPOS (Carne de Sol, Calabresa e Batata Frita)","preco":74.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/mix-viracopos-carne-de-sol-calabresa-e-batata-frita.jpg"},
  {"nome":"Disco de Carne C/ Fritas","preco":59.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/disco-de-carne-c-fritas.jpg"},
  {"nome":"Queijo Empanado c/ Melaço","preco":44.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/queijo-empanado-c-melaco.jpg"},
  {"nome":"Tilápia Inteira c/ Fritas","preco":79.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/tilapia-inteira-c-fritas.jpg"},
  {"nome":"Tilápia Inteira s/ Espinha c/ Fritas","preco":89.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/tilapia-inteira-s-espinha-c-fritas.jpg"},
  {"nome":"Picanha Fatiada c/ Fritas","preco":99.99,"categoria":"PARA PETISCAR","imagem":"assets/menu/picanha-fatiada-c-fritas.jpg"},

  {"nome":"Hambúrguer c/ Fritas","preco":24.99,"categoria":"PRATOS KIDS","imagem":"assets/menu/hamburguer-c-fritas.jpg"},

  {"nome":"Tilápia Inteira s/ Espinha","preco":139.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/tilapia-inteira-s-espinha.jpg"},
  {"nome":"Picanha Completa","preco":149.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/picanha-completa.jpg"},
  {"nome":"Filé Mignon","preco":149.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/file-mignon.jpg"},
  {"nome":"Carne de Sol Completa","preco":109.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/carne-de-sol-completa.jpg"},
  {"nome":"Parmegiana de Frango","preco":69.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/parmegiana-de-frango.jpg"},
  {"nome":"Parmegiana de Filé Mignon","preco":79.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/parmegiana-de-file-mignon.jpg"},
  {"nome":"Bobó de Camarão","preco":109.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/bobo-de-camarao.jpg"},
  {"nome":"Moqueca de Peixe com Camarão","preco":119.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/moqueca-de-peixe-com-camarao.jpg"},
  {"nome":"Moqueca de Peixe sem Camarão","preco":99.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/moqueca-de-peixe-sem-camarao.jpg"},
  {"nome":"Camarão Viracopos","preco":109.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/camarao-viracopos.jpg"},
  {"nome":"Espaguete a Bolonhesa com Carne","preco":79.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/espaguete-a-bolonhesa-com-carne.jpg"},
  {"nome":"Espaguete 4 Queijos com Camarão","preco":109.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/espaguete-4-queijos-com-camarao.jpg"},
  {"nome":"Filé de Tilápia com Arroz de Camarão","preco":129.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/file-de-tilapia-com-arroz-de-camarao.jpg"},
  {"nome":"Filé de Frango Grelhado","preco":69.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/file-de-frango-grelhado.jpg"},
  {"nome":"Filé de Frango Grelhado Molho 4 Queijos","preco":79.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/file-de-frango-grelhado-molho-4-queijos.jpg"},
  {"nome":"Posta de Tilápia","preco":89.99,"categoria":"PRATOS (PARA 2 PESSOAS)","imagem":"assets/menu/posta-de-tilapia.jpg"},

  {"nome":"Peito de Frango Grelhado","preco":22.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/peito-de-frango-grelhado.jpg"},
  {"nome":"Bife a Cavalo","preco":27.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/bife-a-cavalo.jpg"},
  {"nome":"Parmegiana de Frango","preco":27.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/parmegiana-de-frango.jpg"},
  {"nome":"Parmegiana de Filé Mignon","preco":37.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/parmegiana-de-file-mignon.jpg"},
  {"nome":"Posta de Tilápia","preco":27.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/posta-de-tilapia.jpg"},
  {"nome":"Estrogonofe de Frango","preco":27.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/estrogonofe-de-frango.jpg"},
  {"nome":"Estrogonofe de Filé Mignon","preco":37.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/estrogonofe-de-file-mignon.jpg"},
  {"nome":"Picanha","preco":37.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/picanha.jpg"},
  {"nome":"Feijoada","preco":19.99,"categoria":"PRATOS EXECUTIVOS","imagem":"assets/menu/feijoada.jpg"},

  {"nome":"Arroz Branco","preco":8.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/arroz-branco.jpg"},
  {"nome":"Arroz Biro Biro","preco":18.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/arroz-biro-biro.jpg"},
  {"nome":"Feijão de Caldo","preco":9.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/feijao-de-caldo.jpg"},
  {"nome":"Feijão Tropeiro","preco":12.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/feijao-tropeiro.jpg"},
  {"nome":"Farofa de Bacon","preco":14.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/farofa-de-bacon.jpg"},
  {"nome":"Mandioca Cozida","preco":5.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/mandioca-cozida.jpg"},
  {"nome":"Mandioca Frita","preco":12.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/mandioca-frita.jpg"},
  {"nome":"Vinaigrette","preco":11.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/vinaigrette.jpg"},
  {"nome":"Batata Recheada","preco":14.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/batata-recheada.jpg"},
  {"nome":"Salada","preco":8.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/salada.jpg"},
  {"nome":"Puré","preco":9.99,"categoria":"ACOMPANHAMENTOS","imagem":"assets/menu/pure.jpg"},

  {"nome":"Brownie com Sorvete","preco":19.99,"categoria":"SOBREMESAS","imagem":"assets/menu/brownie-com-sorvete.jpg"},
  {"nome":"Pudim","preco":14.99,"categoria":"SOBREMESAS","imagem":"assets/menu/pudim.jpg"},

  {"nome":"Abacaxi","preco":16.99,"categoria":"CREMES","imagem":"assets/menu/abacaxi.jpg"},
  {"nome":"Açaí","preco":16.99,"categoria":"CREMES","imagem":"assets/menu/acai.jpg"},
  {"nome":"Cupuaçu","preco":16.99,"categoria":"CREMES","imagem":"assets/menu/cupuacu.jpg"},
  {"nome":"Maracujá","preco":16.99,"categoria":"CREMES","imagem":"assets/menu/maracuja.jpg"},
  {"nome":"Morango","preco":16.99,"categoria":"CREMES","imagem":"assets/menu/morango.jpg"},

  {"nome":"Laranja - Fruta","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/laranja-fruta.jpg"},
  {"nome":"Limão - Fruta","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/limao-fruta.jpg"},
  {"nome":"Maracujá - Fruta","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/maracuja-fruta.jpg"},
  {"nome":"Acerola - Polpa","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/acerola-polpa.jpg"},
  {"nome":"Morango - Polpa","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/morango-polpa.jpg"},
  {"nome":"Abacaxi - Polpa","preco":11.99,"categoria":"SUCO E POLPAS","imagem":"assets/menu/abacaxi-polpa.jpg"},

  {"nome":"Amstel - 600 ml","preco":14.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/amstel-600-ml.jpg"},
  {"nome":"Antarctica - 600 ml","preco":11.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/antarctica-600-ml.jpg"},
  {"nome":"Brahma - 600 ml","preco":11.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/brahma-600-ml.jpg"},
  {"nome":"Budweiser - 600 ml","preco":14.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/budweiser-600-ml.jpg"},
  {"nome":"Corona - 600ml","preco":18.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/corona-600ml.jpg"},
  {"nome":"Eisenbahn - 600 ml","preco":15.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/eisenbahn-600-ml.jpg"},
  {"nome":"Heineken - 600 ml","preco":17.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/heineken-600-ml.jpg"},
  {"nome":"Original - 600 ml","preco":14.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/original-600-ml.jpg"},
  {"nome":"Petra - 600 ml","preco":11.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/petra-600-ml.jpg"},
  {"nome":"Skol - 600ml","preco":11.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/skol-600ml.jpg"},
  {"nome":"Spaten - 600 ml","preco":14.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/spaten-600-ml.jpg"},
  {"nome":"Stella - 600 ml","preco":16.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/stella-600-ml.jpg"},
  {"nome":"Stella Gold - 600 ml","preco":18.99,"categoria":"CERVEJAS 600ML","imagem":"assets/menu/stella-gold-600-ml.jpg"},

  {"nome":"Absolut","preco":21.99,"categoria":"DOSES","imagem":"assets/menu/absolut.jpg"},
  {"nome":"Bananinha","preco":9.99,"categoria":"DOSES","imagem":"assets/menu/bananinha.jpg"},
  {"nome":"Campari","preco":10.99,"categoria":"DOSES","imagem":"assets/menu/campari.jpg"},
  {"nome":"Domecq","preco":14.99,"categoria":"DOSES","imagem":"assets/menu/domecq.jpg"},
  {"nome":"Gin Beefeater London","preco":22,"categoria":"DOSES","imagem":"assets/menu/gin-beefeater-london.jpg"},
  {"nome":"Gin Bombay","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/gin-bombay.jpg"},
  {"nome":"Gin Tanqueray","preco":22,"categoria":"DOSES","imagem":"assets/menu/gin-tanqueray.jpg"},
  {"nome":"Jurupinga","preco":6.99,"categoria":"DOSES","imagem":"assets/menu/jurupinga.jpg"},
  {"nome":"Licor 43","preco":28.99,"categoria":"DOSES","imagem":"assets/menu/licor-43.jpg"},
  {"nome":"Licor 43 - Chocolate","preco":32.99,"categoria":"DOSES","imagem":"assets/menu/licor-43-chocolate.jpg"},
  {"nome":"Montilla","preco":11.99,"categoria":"DOSES","imagem":"assets/menu/montilla.jpg"},
  {"nome":"Paratudo","preco":7.99,"categoria":"DOSES","imagem":"assets/menu/paratudo.jpg"},
  {"nome":"São Francisco","preco":6.99,"categoria":"DOSES","imagem":"assets/menu/sao-francisco.jpg"},
  {"nome":"Seleta","preco":14.99,"categoria":"DOSES","imagem":"assets/menu/seleta.jpg"},
  {"nome":"Tequila","preco":24.99,"categoria":"DOSES","imagem":"assets/menu/tequila.jpg"},
  {"nome":"Vodko Orloff","preco":13.99,"categoria":"DOSES","imagem":"assets/menu/vodko-orloff.jpg"},
  {"nome":"Vodka Smirnoff","preco":10.99,"categoria":"DOSES","imagem":"assets/menu/vodka-smirnoff.jpg"},
  {"nome":"Whisky Black Label","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/whisky-black-label.jpg"},
  {"nome":"Whisky Buchanan's 12 anos","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/whisky-buchanan-s-12-anos.jpg"},
  {"nome":"Whisky Cavalo Branco","preco":19.99,"categoria":"DOSES","imagem":"assets/menu/whisky-cavalo-branco.jpg"},
  {"nome":"Whisky Chivas","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/whisky-chivas.jpg"},
  {"nome":"Whisky Jack Daniels","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/whisky-jack-daniels.jpg"},
  {"nome":"Whisky Old Par 12 Anos","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/whisky-old-par-12-anos.jpg"},
  {"nome":"Whisky Red Label","preco":22,"categoria":"DOSES","imagem":"assets/menu/whisky-red-label.jpg"},
  {"nome":"Ypióca Empalhada","preco":14.99,"categoria":"DOSES","imagem":"assets/menu/ypioca-empalhada.jpg"},
  {"nome":"Ballena","preco":32.99,"categoria":"DOSES","imagem":"assets/menu/ballena.jpg"},
  {"nome":"Marula","preco":27.99,"categoria":"DOSES","imagem":"assets/menu/marula.jpg"},
  {"nome":"Don Luiz","preco":16.99,"categoria":"DOSES","imagem":"assets/menu/don-luiz.jpg"}
];

/* =========================================================
   UTILITÁRIOS
   ========================================================= */

const brl = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);

const norm = (texto) =>
  String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

/* =========================================================
   CARRINHO
   ========================================================= */

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  if (!Array.isArray(cart)) cart = [];
} catch {
  cart = [];
}

function save() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function add(item) {
  const existente = cart.find((produto) => produto.nome === item.nome);

  if (existente) {
    existente.qtd++;
  } else {
    cart.push({
      ...item,
      qtd: 1
    });
  }

  save();
  openCart();
}

function qty(nome, diferenca) {
  const item = cart.find((produto) => produto.nome === nome);

  if (!item) return;

  item.qtd += diferenca;

  if (item.qtd < 1) {
    cart = cart.filter((produto) => produto.nome !== nome);
  }

  save();
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.qtd, 0);
}

function getCartTotal() {
  return cart.reduce(
    (total, item) => total + item.preco * item.qtd,
    0
  );
}

/* =========================================================
   RENDERIZAÇÃO DO CARRINHO
   ========================================================= */

function renderCart() {
  document
    .querySelectorAll("[data-cart-count]")
    .forEach((elemento) => {
      elemento.textContent = getCartCount();
    });

  document
    .querySelectorAll("[data-cart-total]")
    .forEach((elemento) => {
      elemento.textContent = brl(getCartTotal());
    });

  document
    .querySelectorAll("[data-cart-items]")
    .forEach((container) => {
      if (!cart.length) {
        container.innerHTML =
          '<div class="empty">Seu carrinho está vazio.</div>';
        return;
      }

      container.innerHTML = cart
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <b>${item.nome}</b>
                <small>${brl(item.preco)}</small>
              </div>

              <div class="qty">
                <button
                  type="button"
                  data-q="${item.nome}"
                  data-d="-1"
                  aria-label="Diminuir quantidade"
                >−</button>

                <span>${item.qtd}</span>

                <button
                  type="button"
                  data-q="${item.nome}"
                  data-d="1"
                  aria-label="Aumentar quantidade"
                >+</button>
              </div>
            </div>
          `
        )
        .join("");
    });

  document.querySelectorAll("[data-q]").forEach((botao) => {
    botao.onclick = () =>
      qty(
        botao.dataset.q,
        Number(botao.dataset.d)
      );
  });
}

/* =========================================================
   ABRIR / FECHAR CARRINHO
   ========================================================= */

function openCart() {
  document
    .querySelector(".cart-drawer")
    ?.classList.add("open");

  document
    .querySelector(".overlay")
    ?.classList.add("open");
}

function closeCart() {
  document
    .querySelector(".cart-drawer")
    ?.classList.remove("open");

  document
    .querySelector(".overlay")
    ?.classList.remove("open");
}

/* =========================================================
   BOTÕES DO CARRINHO
   ========================================================= */

document
  .querySelectorAll("[data-open-cart]")
  .forEach((botao) => {
    botao.onclick = openCart;
  });

document
  .querySelectorAll("[data-close-cart]")
  .forEach((botao) => {
    botao.onclick = closeCart;
  });

/* =========================================================
   CARD DOS PRODUTOS
   ========================================================= */

function card(item, index) {
  return `
    <article class="card">

      <div class="photo">
        <img
          src="${item.imagem}"
          alt="${item.nome}"
          loading="lazy"
          onerror="
            this.parentElement.classList.add('placeholder');
            this.remove();
          "
        >
      </div>

      <div class="info">

        <div>
          <h3>${item.nome}</h3>
          <strong>${brl(item.preco)}</strong>
        </div>

        <button
          type="button"
          class="add"
          data-add="${index}"
          aria-label="Adicionar ${item.nome}"
        >
          +
        </button>

      </div>

    </article>
  `;
}

/* =========================================================
   RENDERIZAÇÃO DO MENU
   ========================================================= */

function render(filtro = "", categoria = "TODOS") {
  const root = document.querySelector("#menuRoot");

  if (!root) return;

  const categorias = [
    ...new Set(MENU.map((item) => item.categoria))
  ];

  root.innerHTML = categorias
    .map((categoriaAtual) => {

      const lista = MENU
        .map((item, index) => ({
          ...item,
          index
        }))
        .filter((item) => {

          const categoriaOK =
            categoria === "TODOS" ||
            item.categoria === categoria;

          const buscaOK =
            !filtro ||
            norm(item.nome).includes(norm(filtro));

          return categoriaOK && buscaOK;
        });

      if (!lista.length) return "";

      return `
        <section class="menu-section">

          <div class="section-title">
            <span>${categoriaAtual}</span>
          </div>

          <div class="grid">
            ${lista
              .map((item) => card(item, item.index))
              .join("")}
          </div>

        </section>
      `;
    })
    .join("");

  if (!root.innerHTML.trim()) {
    root.innerHTML =
      '<div class="empty">Nenhum item encontrado.</div>';
  }

  document
    .querySelectorAll("[data-add]")
    .forEach((botao) => {
      botao.onclick = () => {
        const index = Number(botao.dataset.add);
        add(MENU[index]);
      };
    });
}

/* =========================================================
   CATEGORIAS
   ========================================================= */

const categoryBar =
  document.querySelector("#categoryBar");

if (categoryBar) {

  const categorias = [
    "TODOS",
    ...new Set(MENU.map((item) => item.categoria))
  ];

  categoryBar.innerHTML = categorias
    .map(
      (categoria) => `
        <button
          type="button"
          data-cat="${categoria}"
        >
          ${categoria}
        </button>
      `
    )
    .join("");

  const primeiroBotao =
    categoryBar.querySelector("button");

  primeiroBotao?.classList.add("active");

  categoryBar
    .querySelectorAll("button")
    .forEach((botao) => {

      botao.onclick = () => {

        categoryBar
          .querySelectorAll("button")
          .forEach((item) =>
            item.classList.remove("active")
          );

        botao.classList.add("active");

        const campoBusca =
          document.querySelector("#menuSearch");

        render(
          campoBusca?.value || "",
          botao.dataset.cat
        );
      };
    });
}

/* =========================================================
   BUSCA DO MENU
   ========================================================= */

document
  .querySelector("#menuSearch")
  ?.addEventListener("input", (evento) => {

    const categoriaAtiva =
      document.querySelector(
        "#categoryBar button.active"
      )?.dataset.cat || "TODOS";

    render(
      evento.target.value,
      categoriaAtiva
    );
  });

/* =========================================================
   BUSCA PRINCIPAL
   ========================================================= */

document
  .querySelector("#heroSearch")
  ?.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const campo =
      document.querySelector("#heroSearchInput");

    const termo = campo?.value?.trim() || "";

    location.href =
      "menu.html?busca=" +
      encodeURIComponent(termo);
  });

/* =========================================================
   FINALIZAÇÃO DO PEDIDO PELO WHATSAPP
   ========================================================= */

document
  .querySelector("[data-whatsapp-checkout]")
  ?.addEventListener("click", () => {

    if (!cart.length) {
      alert("Adicione itens ao carrinho.");
      return;
    }

    const modoSelecionado =
      document.querySelector(
        '[name="mode"]:checked'
      )?.value;

    const modo =
      modoSelecionado === "entrega"
        ? "Entrega em casa"
        : "Retirar na loja";

    const linhas = cart
      .map(
        (item) =>
          `${item.qtd}x ${item.nome} — ${brl(
            item.qtd * item.preco
          )}`
      )
      .join("\n");

    const total = getCartTotal();

    const mensagem =
`Olá, Viracopos Gastrobar! Quero fazer um pedido.

${linhas}

Total: ${brl(total)}
Forma: ${modo}

Aguardo as instruções para pagamento via Pix.`;

    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(mensagem);

    window.open(url, "_blank");
  });

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

render();
renderCart();

/* Abre automaticamente o carrinho quando solicitado pela URL */

if (
  new URLSearchParams(location.search)
    .get("carrinho")
) {
  openCart();
}

/* =========================================================
   FIM DO SCRIPT
   ========================================================= */
