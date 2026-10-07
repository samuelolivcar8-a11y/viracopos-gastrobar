const MENU = [
  {cat:"Bebidas",items:[
    ["Água com Gás - 500 ml",4.99],["Água de Coco - 200 ml",6.99],["Água de Coco - Gelo Frost",8.99],["Água de Coco - 1 Litro",19.99],["Água sem Gás - 500 ml",3.99],["Água Tônica - Lata",7.99],["H2O",11.99],["Refrigerante - Lata",6.99],["Refrigerante - 600ml",9.99],["Refrigerante - 2 L",18.99],["Red Bull",15.99]
  ]},
  {cat:"Sucos e Polpas",items:[
    ["Laranja - Fruta",{"Copo":11.99,"Jarra":19.99}],["Limão - Fruta",{"Copo":11.99,"Jarra":19.99}],["Maracujá - Fruta",{"Copo":11.99,"Jarra":19.99}],["Acerola - Polpa",{"Copo":11.99,"Jarra":19.99}],["Morango - Polpa",{"Copo":11.99,"Jarra":19.99}],["Abacaxi - Polpa",{"Copo":11.99,"Jarra":19.99}]
  ]},
  {cat:"Cremes",items:[
    ["Abacaxi",{"Copo":16.99,"Jarra":27.99}],["Açaí",{"Copo":16.99,"Jarra":27.99}],["Cupuaçu",{"Copo":16.99,"Jarra":27.99}],["Maracujá",{"Copo":16.99,"Jarra":27.99}],["Morango",{"Copo":16.99,"Jarra":27.99}]
  ]},
  {cat:"Cervejas 600ml",items:[
    ["Amstel - 600 ml",14.99],["Antarctica - 600 ml",11.99],["Brahma - 600 ml",11.99],["Budweiser - 600 ml",14.99],["Corona - 600ml",18.99],["Eisenbahn - 600 ml",15.99],["Heineken - 600 ml",17.99],["Original - 600 ml",14.99],["Petra - 600 ml",11.99],["Skol - 600ml",11.99],["Spaten - 600 ml",14.99],["Stella - 600 ml",16.99],["Stella Gold - 600 ml",18.99]
  ]},
  {cat:"Cervejas Long & Latas",items:[
    ["Lata - Antarctica 269 ml",5.99],["Lata - Brahma 269 ml",5.99],["Lata - Skol 269 ml",5.99],["Long neck - Budweiser",11.99],["Long neck - Corona",11.99],["Long neck - Heineken",11.99],["Long neck - Heineken Zero",11.99],["Long neck - Spaten",11.99],["Long neck - Corona Zero",11.99],["Long neck - Stella Gold",11.99],["Chopp Brahma",9.99],["Ice Balada",10.99],["Ice Kiwi",10.99],["Ice Limão",10.99]
  ]},
  {cat:"Drinks / Coquetéis",items:[
    ["Aperol Spritz",22],["Caipirinha",17],["Caipirosca",18],["Caipirosca Abacaxi",19],["Caipirosca Limão",18],["Caipirosca Maracujá",19],["Caipirosca Kiwi",19],["Caipirosca Morango",19],["Caipirosca Maracujá c/ Morango",19],["Caipirosca Abacaxi c/ Hortelã",19],["Caipirosca Maracujá c/ Limão",19],["Caipirosca Melancia c/ Gengibre",19],["Coquetel de Vinho",17],["Gin Apple",21],["Gin Melancia",21],["Gin Frutas Vermelhas",22],["Gin Tônica",21],["Gin Tropical",22],["Gin Varacopos",25],["London Mule",21],["Margarita",27],["Metrópole",22],["Mojito",27],["Moscow Mule",25],["Negroni",28],["Piña Colada",27],["Preparo de Coquetel",7],["Sex on the Beach",27],["Shot Chocolate",24],["Shot Doce de Leite",24],["Shot Tequila",24]
  ]},
  {cat:"Doses",items:[
    ["Absolut",21.99],["Bananinha",9.99],["Campari",10.99],["Domecq",14.99],["Gin Beefeater London",22],["Gin Bombay",27.99],["Gin Tanqueray",22],["Jurupinga",6.99],["Licor 43",28.99],["Licor 43 - Chocolate",32.99],["Montilla",11.99],["Paratudo",7.99],["São Francisco",6.99],["Seleta",14.99],["Tequila",24.99],["Vodko Orloff",13.99],["Vodka Smirnoff",10.99],["Whisky Black Label",27.99],["Whisky Buchanan's 12 anos",27.99],["Whisky Cavalo Branco",19.99],["Whisky Chivas",27.99],["Whisky Jack Daniels",27.99],["Whisky Old Par 12 Anos",27.99],["Whisky Red Label",22],["Ypióca Empalhada",14.99],["Ballena",32.99],["Marula",27.99],["Don Luiz",16.99]
  ]},
  {cat:"Garrafas Destilados e Vinhos",items:[
    ["Bananinha",49],["Campari",150],["Chandon Brut Espumante",140],["Lambrusco",100],["Paratudo",40],["Don Luiz",170],["Salton Brut Espumante",74],["São Francisco",70],["Tequila",220],["Vinho Casillero del Diablo Seco",85],["Vinho Pérgola Suave",55],["Ballena",310]
  ]},
  {cat:"Combos",items:[
    ["Gin Beefeater London",{"Combo":279,"Garrafa":229}],["Gin Bombay",{"Combo":339,"Garrafa":299}],["Gin Tanqueray",{"Combo":289,"Garrafa":239}],["Vodka Absolut",{"Combo":279,"Garrafa":219}],["Vodka Smirnoff",{"Combo":179,"Garrafa":119}],["Whisky Black Label",{"Combo":379,"Garrafa":329}],["Whisky Cavalo Branco",{"Combo":239,"Garrafa":189}],["Whisky Chivas",{"Combo":339,"Garrafa":299}],["Whisky Jack Daniels",{"Combo":339,"Garrafa":299}],["Whisky Old Parr",{"Combo":339,"Garrafa":299}],["Whisky Red Label",{"Combo":279,"Garrafa":229}]
  ]},
  {cat:"Para Petiscar",items:[
    ["Batata Frita",27.99],["Batata Frita Completa (Cheddar e Bacon)",33.99],["Mandioca Frita",17.99],["Calabresa Acebolada",29.99],["Calabresa Acebolada c/ Fritas",35.99],["Frango a Passarinho",42.99],["Frango a Passarinho c/ Fritas",48.99],["Carne de Sol Acebolada",64.99],["Carne de Sol Acebolada c/ Mandioca",69.99],["Linguiça Frango c/ Pão de Alho",44.99],["Isca de Frango Empanada",49.99],["Isca de Peixe Empanada",79.99],["Posta de Peixe",49.99],["Porção de Coração de Frango",44.99],["Porção de Pastel Misto (Frango, Queijo e Carne)",27.99],["Frios (Queijo, Presunto, Azeitona, Salame e Ovo de Codorna)",54.99],["Camarão Empanado",74.99],["Camarão Alho e Óleo",69.99],["Caldos (Vaca Atolada, Frango e Mocotó)",16.99],["Torresmo",27.99],["MIX VIRACOPOS (Carne de Sol, Calabresa e Batata Frita)",74.99],["Disco de Carne C/ Fritas",59.99],["Queijo Empanado c/ Melaço",44.99],["Tilápia Inteira c/ Fritas",79.99],["Tilápia Inteira s/ Espinha c/ Fritas",89.99],["Picanha Fatiada c/ Fritas",99.99]
  ]},
  {cat:"Pratos Kids",items:[["Hambúrguer c/ Fritas",24.99]]},
  {cat:"Pratos (para 2 pessoas)",items:[
    ["Tilápia Inteira s/ Espinha",139.99],["Picanha Completa",149.99],["Filé Mignon",149.99],["Carne de Sol Completa",109.99],["Parmegiana de Frango",69.99],["Parmegiana de Filé Mignon",79.99],["Bobó de Camarão",109.99],["Moqueca de Peixe com Camarão",119.99],["Moqueca de Peixe sem Camarão",99.99],["Camarão Viracopos",109.99],["Espaguete a Bolonhesa com Carne",79.99],["Espaguete 4 Queijos com Camarão",109.99],["Filé de Tilápia com Arroz de Camarão",129.99],["Filé de Frango Grelhado",69.99],["Filé de Frango Grelhado Molho 4 Queijos",79.99],["Posta de Tilápia",89.99]
  ]},
  {cat:"Pratos Executivos",items:[
    ["Peito de Frango Grelhado",22.99],["Bife a Cavalo",27.99],["Parmegiana de Frango",27.99],["Parmegiana de Filé Mignon",37.99],["Posta de Tilápia",27.99],["Estrogonofe de Frango",27.99],["Estrogonofe de Filé Mignon",37.99],["Picanha",37.99],["Feijoada",19.99]
  ]},
  {cat:"Acompanhamentos",items:[
    ["Arroz Branco",8.99],["Arroz Biro Biro",18.99],["Feijão de Caldo",9.99],["Feijão Tropeiro",12.99],["Farofa de Bacon",14.99],["Mandioca Cozida",5.99],["Mandioca Frita",12.99],["Vinaigrette",11.99],["Batata Recheada",14.99],["Salada",8.99],["Puré",9.99]
  ]},
  {cat:"Sobremesas",items:[["Brownie com Sorvete",19.99],["Pudim",14.99]]}
];

const CART_KEY="viracopos-cart";
const img="assets/viracopos-food-collage.png";
let cart=JSON.parse(localStorage.getItem(CART_KEY)||"[]");
let activeCat="Todas";
let query="";

const money=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartCount();}
function updateCartCount(){
  const n=cart.reduce((a,i)=>a+i.qty,0);
  document.querySelectorAll("#cartCount").forEach(e=>e.textContent=n);
}
function toast(t){const e=document.getElementById("toast");if(!e)return;e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1600)}
function flatItems(){
  return MENU.flatMap((g,gi)=>g.items.map((x,ii)=>({id:`${gi}-${ii}`,cat:g.cat,name:x[0],price:x[1]})));
}
function imageFor(name){return img;}

function renderCategories(){
  const el=document.getElementById("categories"); if(!el)return;
  el.innerHTML=["Todas",...MENU.map(g=>g.cat)].map(c=>`<button class="cat ${c===activeCat?"active":""}" data-cat="${c}">${c}</button>`).join("");
  el.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{activeCat=b.dataset.cat;renderMenu()});
}
function renderMenu(){
  const root=document.getElementById("menuSections"); if(!root)return;
  const nq=norm(query);
  const groups=MENU.filter(g=>activeCat==="Todas"||g.cat===activeCat).map(g=>({...g,items:g.items.filter(x=>!nq||norm(x[0]).includes(nq)||norm(g.cat).includes(nq))})).filter(g=>g.items.length);
  root.innerHTML=groups.length?groups.map(g=>`
    <section class="menu-section">
      <h2 class="section-title">${g.cat}</h2>
      <div class="products">${g.items.map((x,i)=>productCard(g.cat,x,i)).join("")}</div>
    </section>`).join(""):`<div class="empty">Nenhum item encontrado. Tente outra busca.</div>`;
  root.querySelectorAll(".add").forEach(b=>b.onclick=()=>addProduct(b.dataset.cat,b.dataset.name));
  root.querySelectorAll(".variant").forEach(b=>b.onclick=()=>{
    const group=b.closest(".product");group.querySelectorAll(".variant").forEach(v=>v.classList.remove("selected"));b.classList.add("selected");
  });
}
function productCard(cat,x,i){
  const p=x[1], variants=typeof p==="object";
  let defaultPrice=variants?Object.values(p)[0]:p;
  return `<article class="product">
    <div class="product-photo"><img src="${imageFor(x[0])}" alt="${x[0]}" loading="lazy"></div>
    <div class="product-info"><h3>${x[0]}</h3>
      ${variants?`<div class="variants">${Object.entries(p).map(([k,v],j)=>`<button class="variant ${j===0?"selected":""}" data-variant="${k}" data-price="${v}">${k} · ${money(v)}</button>`).join("")}</div>`:`<div class="price">${money(defaultPrice)}</div>`}
    </div>
    <button class="add" data-cat="${cat}" data-name="${x[0]}">+ Adicionar</button>
  </article>`;
}
function addProduct(cat,name){
  const g=MENU.find(g=>g.cat===cat), x=g.items.find(x=>x[0]===name), p=x[1];
  let variant=null,price=typeof p==="object"?Object.values(p)[0]:p;
  if(typeof p==="object")variant=Object.keys(p)[0];
  const key=cat+"|"+name+"|"+(variant||"");
  const found=cart.find(i=>i.key===key);
  if(found)found.qty++;else cart.push({key,cat,name,variant,price,qty:1});
  saveCart();toast("Adicionado ao carrinho");
}
function renderCart(){
  const el=document.getElementById("cartItems"),total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  if(!el)return;
  el.innerHTML=cart.length?cart.map((i,idx)=>`<div class="cart-line">
    <div><h4>${i.name}</h4><small>${i.variant?i.variant+" · ":""}${money(i.price)}</small></div>
    <div style="text-align:right"><div class="qty"><button data-i="${idx}" data-act="minus">−</button><strong>${i.qty}</strong><button data-i="${idx}" data-act="plus">+</button><button class="remove" data-i="${idx}" data-act="remove">×</button></div><strong>${money(i.price*i.qty)}</strong></div>
  </div>`).join(""):`<div class="empty">Seu carrinho ainda está vazio.</div>`;
  const t=document.getElementById("cartTotal");if(t)t.textContent=money(total);
  el.querySelectorAll("[data-act]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i,a=b.dataset.act;
    if(a==="plus")cart[i].qty++;if(a==="minus")cart[i].qty--;if(a==="remove"||cart[i].qty<=0)cart.splice(i,1);
    saveCart();renderCart();
  });
}
function openCart(){document.getElementById("cartDrawer")?.classList.add("open");document.getElementById("cartBackdrop")?.classList.add("open");renderCart()}
function closeCart(){document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("cartBackdrop")?.classList.remove("open")}
function setup(){
  updateCartCount();
  const hs=document.getElementById("heroSearch");
  hs?.addEventListener("submit",e=>{e.preventDefault();const q=document.getElementById("heroSearchInput").value.trim();location.href="menu.html?busca="+encodeURIComponent(q)});
  const ms=document.getElementById("menuSearch");
  ms?.addEventListener("submit",e=>e.preventDefault());
  document.getElementById("menuSearchInput")?.addEventListener("input",e=>{query=e.target.value;renderMenu()});
  renderCategories();renderMenu();renderCart();
  document.getElementById("openCart")?.addEventListener("click",openCart);
  document.getElementById("closeCart")?.addEventListener("click",closeCart);
  document.getElementById("cartBackdrop")?.addEventListener("click",closeCart);
  document.getElementById("checkout")?.addEventListener("click",()=>{
    if(!cart.length){toast("Adicione itens ao carrinho primeiro.");return}
    const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
    const text=["Olá! Quero fazer um pedido no Viracopos Gastrobar:","",...cart.map(i=>`• ${i.qty}x ${i.name}${i.variant?" ("+i.variant+")":""} — ${money(i.price*i.qty)}`),"",`Total: ${money(total)}`,"","Por favor, me orientem sobre a finalização do pedido."].join("\n");
    // Número encontrado anteriormente; confirme o WhatsApp de pedidos antes de publicar como definitivo.
    const phone="5561995634865";
    location.href=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  });
  const params=new URLSearchParams(location.search),q=params.get("busca");
  if(q&&document.getElementById("menuSearchInput")){query=q;document.getElementById("menuSearchInput").value=q;renderMenu()}
  if(params.get("carrinho")==="1")setTimeout(openCart,250);
}
document.addEventListener("DOMContentLoaded",setup);
