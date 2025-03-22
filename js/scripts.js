// Conversões de moedas:
// 1 PO = 1 PO; 1 PP = 1/10 PO; 1 PC = 1/100 PO.
// A função abaixo converte o total (em PO) para PP, PO e PC,
// garantindo que 10 PC se tornem 1 PP e 10 PP se tornem 1 PO.
function converterMoedas(totalPO) {
    // Converte o total em "cêntimos" (1 PO = 100 unidades)
    let totalUnidades = Math.round(totalPO * 100);
    // Obtém o número de PO (centenas)
    let po = Math.floor(totalUnidades / 100);
    // Resto após extrair os PO
    let resto = totalUnidades % 100;
    // Obtém o número de PP (cada 10 unidades equivalem a 1 PP)
    let pp = Math.floor(resto / 10);
    // O restante são os PC
    let pc = resto % 10;
    return { pp, po, pc };
}

// Itens de cada categoria com custo e valor
const categorias = {
    // --- ARMAS ---
    "Armas Corpo a Corpo Simples": [
        { nome: "Adaga (Dagger)", custo: "2 PO", valor: 2 },
        { nome: "Bordão (Quarterstaff)", custo: "2 PC", valor: 0.02 },
        { nome: "Clava (Club)", custo: "1 PC", valor: 0.01 },
        { nome: "Foice (Sickle)", custo: "1 PO", valor: 1 },
        { nome: "Lança (Javelin)", custo: "5 PC", valor: 0.05 },
        { nome: "Machadinha (Handaxe)", custo: "5 PO", valor: 5 },
        { nome: "Maça (Mace)", custo: "5 PO", valor: 5 },
        { nome: "Martelo Leve (Light Hammer)", custo: "2 PO", valor: 2 },
        { nome: "Tacape (Greatclub)", custo: "2 PC", valor: 0.02 },
    ],
    "Armas à Distância Simples": [
        { nome: "Arco Curto (Shortbow)", custo: "25 PO", valor: 25 },
        { nome: "Besta Leve (Light Crossbow)", custo: "25 PO", valor: 25 },
        { nome: "Dardo (Dart)", custo: "5 PC", valor: 0.05 },
        { nome: "Funda (Sling)", custo: "1 PC", valor: 0.01 },
    ],
    "Armas Corpo a Corpo Marciais": [
        { nome: "Alabarda (Halberd)", custo: "20 PO", valor: 20 },
        { nome: "Cimitarra (Scimitar)", custo: "25 PO", valor: 25 },
        { nome: "Espada Curta (Shortsword)", custo: "10 PO", valor: 10 },
        { nome: "Espada Longa (Longsword)", custo: "15 PO", valor: 15 },
        { nome: "Espadão (Greatsword)", custo: "50 PO", valor: 50 },
        { nome: "Estrela da Manhã (Morningstar)", custo: "15 PO", valor: 15 },
        { nome: "Glaive (Glaive)", custo: "20 PO", valor: 20 },
        { nome: "Grande Machado (Greataxe)", custo: "30 PO", valor: 30 },
        { nome: "Lança de Montaria (Lance)", custo: "10 PO", valor: 10 },
        { nome: "Machado de Batalha (Battleaxe)", custo: "10 PO", valor: 10 },
        { nome: "Maça de Armas (Flail)", custo: "10 PO", valor: 10 },
        { nome: "Malho (Maul)", custo: "10 PO", valor: 10 },
        { nome: "Martelo de Guerra (Warhammer)", custo: "15 PO", valor: 15 },
        { nome: "Picareta de Guerra (War Pick)", custo: "5 PO", valor: 5 },
        { nome: "Pique (Pike)", custo: "5 PO", valor: 5 },
        { nome: "Rapieira (Rapier)", custo: "25 PO", valor: 25 },
        { nome: "Tridente (Trident)", custo: "5 PO", valor: 5 },
        { nome: "Chicote (Whip)", custo: "2 PO", valor: 2 },
    ],
    "Armas à Distância Marciais": [
        { nome: "Arco Longo (Longbow)", custo: "50 PO", valor: 50 },
        { nome: "Besta de Mão (Hand Crossbow)", custo: "75 PO", valor: 75 },
        { nome: "Besta Pesada (Heavy Crossbow)", custo: "50 PO", valor: 50 },
        { nome: "Mosquete (Musket)", custo: "500 PO", valor: 500 },
        { nome: "Pistola (Pistol)", custo: "250 PO", valor: 250 },
        { nome: "Zarabatana (Blowgun)", custo: "10 PO", valor: 10 },
    ],
    // --- ARMADURAS ---
    "Armaduras Leves": [
        { nome: "Armadura Acolchoada (Padded Armor)", custo: "5 PO", valor: 5 },
        {
            nome: "Armadura de Couro (Leather Armor)",
            custo: "10 PO",
            valor: 10,
        },
        {
            nome: "Armadura de Couro Batido (Studded Leather Armor)",
            custo: "45 PO",
            valor: 45,
        },
    ],
    "Armaduras Médias": [
        { nome: "Armadura de Pele (Hide Armor)", custo: "10 PO", valor: 10 },
        { nome: "Cota de Malha (Chain Shirt)", custo: "50 PO", valor: 50 },
        { nome: "Cota de Escamas (Scale Mail)", custo: "50 PO", valor: 50 },
        { nome: "Peitoral (Breastplate)", custo: "400 PO", valor: 400 },
        {
            nome: "Meia-Armadura (Half Plate Armor)",
            custo: "750 PO",
            valor: 750,
        },
    ],
    "Armaduras Pesadas e Escudos": [
        { nome: "Cota de Argolas (Ring Mail)", custo: "30 PO", valor: 30 },
        {
            nome: "Cota de Malha Completa (Chain Mail)",
            custo: "75 PO",
            valor: 75,
        },
        {
            nome: "Armadura Segmentada (Splint Armor)",
            custo: "200 PO",
            valor: 200,
        },
        {
            nome: "Armadura Completa (Plate Armor)",
            custo: "1.500 PO",
            valor: 1500,
        },
        { nome: "Escudo (Shield)", custo: "10 PO", valor: 10 },
    ],
    // --- EQUIPAMENTO DE AVENTURA ---
    "Equipamento de Aventura": [
        { nome: "Ácido (Acid)", custo: "25 PO", valor: 25 },
        { nome: "Água Benta (Holy Water)", custo: "25 PO", valor: 25 },
        { nome: "Algemas (Manacles)", custo: "2 PO", valor: 2 },
        { nome: "Aljava (Quiver)", custo: "1 PO", valor: 1 },
        { nome: "Antitoxina (Antitoxin)", custo: "50 PO", valor: 50 },
        {
            nome: "Apito de Sinalização (Signal Whistle)",
            custo: "5 PC",
            valor: 0.05,
        },
        { nome: "Armadilha de Caça (Hunting Trap)", custo: "5 PO", valor: 5 },
        { nome: "Aríete Portátil (Portable Ram)", custo: "4 PO", valor: 4 },
        { nome: "Balde (Bucket)", custo: "5 PC", valor: 0.05 },
        { nome: "Barbante (String)", custo: "1 PP", valor: 10 },
        { nome: "Barril (Barrel)", custo: "2 PO", valor: 2 },
        { nome: "Baú (Chest)", custo: "5 PO", valor: 5 },
        { nome: "Bloco e Talha (Block and Tackle)", custo: "1 PO", valor: 1 },
        { nome: "Bolsa (Pouch)", custo: "5 PO", valor: 5 },
        {
            nome: "Bolsa de Componentes (Component Pouch)",
            custo: "25 PO",
            valor: 25,
        },
        { nome: "Cadeado (Lock)", custo: "10 PO", valor: 10 },
        { nome: "Caneta Tinteiro (Ink Pen)", custo: "2 PC", valor: 0.02 },
        { nome: "Cantil (Flask)", custo: "2 PC", valor: 0.02 },
        { nome: "Cesto (Basket)", custo: "4 PP", valor: 40 },
        { nome: "Cobertor (Blanket)", custo: "5 PP", valor: 50 },
        { nome: "Corda (Rope)", custo: "1 PO", valor: 1 },
        { nome: "Corrente (Chain)", custo: "5 PO", valor: 5 },
        { nome: "Escada (Ladder)", custo: "1 SP", valor: 0.1 },
        { nome: "Esferas Metálicas (Ball Bearings)", custo: "1 PO", valor: 1 },
        { nome: "Espelho (Mirror)", custo: "5 PO", valor: 5 },
        {
            nome: "Estojo de Mapas ou Pergaminhos (Case, Map or Scroll)",
            custo: "1 PO",
            valor: 1,
        },
        {
            nome: "Estojo de Virolas de Besta (Case, Crossbow Bolt)",
            custo: "1 PO",
            valor: 1,
        },
        { nome: "Estrepes (Caltrops)", custo: "1 PO", valor: 1 },
        { nome: "Fantasia (Costume)", custo: "5 PO", valor: 5 },
        { nome: "Lamparina (Lamp)", custo: "5 PP", valor: 50 },
        {
            nome: "Lanterna Encapuzada (Hooded Lantern)",
            custo: "5 PO",
            valor: 5,
        },
        {
            nome: "Lanterna de Foco (Bullseye Lantern)",
            custo: "10 PO",
            valor: 10,
        },
        { nome: "Livro (Book)", custo: "25 PO", valor: 25 },
        { nome: "Luneta (Spyglass)", custo: "1.000 PO", valor: 1000 },
        { nome: "Lupa (Magnifying Glass)", custo: "100 PO", valor: 100 },
        { nome: "Mapa (Map)", custo: "1 PO", valor: 1 },
        { nome: "Mochila (Backpack)", custo: "2 PO", valor: 2 },
        { nome: "Odre de Água (Waterskin)", custo: "2 PC", valor: 0.02 },
        { nome: "Óleo (Oil)", custo: "1 SP", valor: 0.1 },
        { nome: "Pá (Shovel)", custo: "2 PO", valor: 2 },
        { nome: "Panela de Ferro (Pot, Iron)", custo: "2 PO", valor: 2 },
        { nome: "Papel (Paper)", custo: "2 PC", valor: 0.02 },
        { nome: "Pé-de-Cabra (Crowbar)", custo: "2 PO", valor: 2 },
        { nome: "Perfume (Perfume)", custo: "5 PO", valor: 5 },
        { nome: "Pergaminho (Parchment)", custo: "1 SP", valor: 0.1 },
        {
            nome: "Pergaminho de Magia (Spell Scroll - Nível 1)",
            custo: "50 PO",
            valor: 50,
        },
        { nome: "Pergaminho de Magia (Truque)", custo: "30 PO", valor: 30 },
        { nome: "Picos de Ferro (Spikes, Iron)", custo: "1 PO", valor: 1 },
        {
            nome: "Poção de Cura (Potion of Healing)",
            custo: "50 PO",
            valor: 50,
        },
        { nome: "Rações (Rations)", custo: "5 PC", valor: 0.05 },
        { nome: "Rede (Net)", custo: "1 PO", valor: 1 },
        { nome: "Roupas Finas (Clothes, Fine)", custo: "15 PO", valor: 15 },
        {
            nome: "Roupas de Viajante (Clothes, Traveler’s)",
            custo: "2 PO",
            valor: 2,
        },
        { nome: "Saco de Dormir (Bedroll)", custo: "1 PO", valor: 1 },
        { nome: "Saco Grande (Sack)", custo: "1 PC", valor: 0.01 },
        { nome: "Símbolo Sagrado (Holy Symbol)", custo: "Varia", valor: 0 },
        { nome: "Sino (Bell)", custo: "1 PO", valor: 1 },
        { nome: "Tocha (Torch)", custo: "1 PC", valor: 0.01 },
        { nome: "Tenda (Tent)", custo: "2 PO", valor: 2 },
        { nome: "Tinta (Ink)", custo: "10 PO", valor: 10 },
        { nome: "Vela (Candle)", custo: "1 PC", valor: 0.01 },
        { nome: "Veneno Básico (Poison, Basic)", custo: "100 PO", valor: 100 },
    ],
    // --- MUNIÇÕES (Reajustada) ---
    Munições: [
        { nome: "Flechas (Arrows)", custo: "1 PO", valor: 1 },
        { nome: "Virolas (Bolts)", custo: "1 PO", valor: 1 },
        { nome: "Balas de Fogo (Firearm Bullets)", custo: "3 PO", valor: 3 },
        { nome: "Balas de Funda (Sling Bullets)", custo: "4 PC", valor: 0.04 },
        { nome: "Agulhas (Needles)", custo: "1 PO", valor: 1 },
    ],
    // --- FERRAMENTAS E SUPRIMENTOS ---
    "Ferramentas e Suprimentos": [
        { nome: "Ferramentas de Carpinteiro", custo: "8 PO", valor: 8 },
        { nome: "Ferramentas de Cartógrafo", custo: "15 PO", valor: 15 },
        { nome: "Ferramentas de Coureiro", custo: "5 PO", valor: 5 },
        { nome: "Ferramentas de Entalhador", custo: "1 PO", valor: 1 },
        { nome: "Ferramentas de Ferreiro", custo: "20 PO", valor: 20 },
        { nome: "Ferramentas de Joalheiro", custo: "25 PO", valor: 25 },
        { nome: "Ferramentas de Oleiro", custo: "10 PO", valor: 10 },
        { nome: "Ferramentas de Pedreiro", custo: "10 PO", valor: 10 },
        { nome: "Ferramentas de Sapateiro", custo: "5 PO", valor: 5 },
        { nome: "Ferramentas de Tecelão", custo: "1 PO", valor: 1 },
        { nome: "Ferramentas de Tintureiro", custo: "50 PO", valor: 50 },
        { nome: "Ferramentas de Vidreiro", custo: "30 PO", valor: 30 },
        { nome: "Suprimentos de Alquimista", custo: "50 PO", valor: 50 },
        { nome: "Suprimentos de Calígrafo", custo: "10 PO", valor: 10 },
        { nome: "Suprimentos de Cervejeiro", custo: "20 PO", valor: 20 },
        { nome: "Suprimentos de Pintor", custo: "10 PO", valor: 10 },
        { nome: "Utensílios de Cozinha", custo: "1 PO", valor: 1 },
    ],
    // --- KITS E PACOTES ---
    "Kits e Pacotes": [
        {
            nome: "Kit de Acadêmico (Scholar’s Pack)",
            custo: "40 PO",
            valor: 40,
        },
        {
            nome: "Kit de Arrombador (Burglar’s Pack)",
            custo: "16 PO",
            valor: 16,
        },
        {
            nome: "Kit de Aventureiro (Dungeoneer’s Pack)",
            custo: "12 PO",
            valor: 12,
        },
        { nome: "Kit de Curandeiro (Healer’s Kit)", custo: "5 PO", valor: 5 },
        {
            nome: "Kit de Diplomata (Diplomat’s Pack)",
            custo: "39 PO",
            valor: 39,
        },
        {
            nome: "Kit de Entretenimento (Entertainer’s Pack)",
            custo: "40 PO",
            valor: 40,
        },
        { nome: "Kit de Escalada (Climber’s Kit)", custo: "25 PO", valor: 25 },
        {
            nome: "Kit de Explorador (Explorer’s Pack)",
            custo: "10 PO",
            valor: 10,
        },
        { nome: "Kit de Sacerdote (Priest’s Pack)", custo: "33 PO", valor: 33 },
        { nome: "Instrumento Musical (genérico)", custo: "10 PO", valor: 10 },
        { nome: "Kit de Disfarce (Disguise Kit)", custo: "25 PO", valor: 25 },
        {
            nome: "Kit de Falsificação (Forgery Kit)",
            custo: "15 PO",
            valor: 15,
        },
        { nome: "Kit de Herbalismo (Herbalism Kit)", custo: "5 PO", valor: 5 },
        { nome: "Kit de Ladrão (Thieves’ Tools)", custo: "25 PO", valor: 25 },
        { nome: "Kit de Venenos (Poisoner’s Kit)", custo: "50 PO", valor: 50 },
    ],
    // --- FOCOS DE CONJURAÇÃO ---
    "Focos de Conjuração": [
        { nome: "Cristal (Arcane Focus – Crystal)", custo: "10 PO", valor: 10 },
        { nome: "Orbe (Arcane Focus – Orb)", custo: "20 PO", valor: 20 },
        { nome: "Cajado (Arcane Focus – Rod)", custo: "10 PO", valor: 10 },
        { nome: "Bastão (Arcane Focus – Staff)", custo: "5 PO", valor: 5 },
        { nome: "Varinha (Arcane Focus – Wand)", custo: "10 PO", valor: 10 },
        { nome: "Ramo de Visco (Druidic Focus)", custo: "1 PO", valor: 1 },
        {
            nome: "Cajado de Madeira (Druidic Focus – Wooden Staff)",
            custo: "5 PO",
            valor: 5,
        },
        { nome: "Varinha de Teixo (Yew Wand)", custo: "10 PO", valor: 10 },
    ],
    // --- MONTARIAS E OUTROS ANIMAIS ---
    "Montarias e Outros Animais": [
        { nome: "Camelo (Camel)", custo: "50 PO", valor: 50 },
        { nome: "Elefante (Elephant)", custo: "200 PO", valor: 200 },
        { nome: "Cavalo de Carga (Draft Horse)", custo: "50 PO", valor: 50 },
        {
            nome: "Cavalo de Montaria (Riding Horse)",
            custo: "75 PO",
            valor: 75,
        },
        { nome: "Massim (Massiff)", custo: "25 PO", valor: 25 },
        { nome: "Mula (Mule)", custo: "8 PO", valor: 8 },
        { nome: "Pônei (Pony)", custo: "30 PO", valor: 30 },
        { nome: "Cavalo de Guerra (Warhorse)", custo: "400 PO", valor: 400 },
    ],
    // --- EQUIPAMENTOS DE TRATO, ARNÊS E VEÍCULOS ---
    "Equipamentos de Trato, Arnês e Veículos": [
        { nome: "Carruagem (Carriage)", custo: "100 PO", valor: 100 },
        { nome: "Carroça (Cart)", custo: "15 PO", valor: 15 },
        { nome: "Carruagem de Guerra (Chariot)", custo: "250 PO", valor: 250 },
        { nome: "Feno por dia (Fresh per day)", custo: "5 PC", valor: 0.05 },
        { nome: "Sela (Saddle)", custo: "—", valor: 0 },
        { nome: "Golete (Gorget)", custo: "60 PO", valor: 60 },
        { nome: "Milita (Military Saddle)", custo: "20 PO", valor: 20 },
        { nome: "Montaria (Riding Saddle)", custo: "10 PO", valor: 10 },
        { nome: "Trenó (Sled)", custo: "20 PO", valor: 20 },
        {
            nome: "Estalagem por dia (Stabling per day)",
            custo: "5 PP",
            valor: 5,
        },
        { nome: "Carroção (Wagon)", custo: "35 PO", valor: 35 },
    ],
    // --- VEÍCULOS AÉREOS E AQUÁTICOS ---
    "Veículos Aéreos e Aquáticos": [
        { nome: "Aeronave (Airship)", custo: "40.000 PO", valor: 40000 },
        { nome: "Galeão (Galleon)", custo: "30.000 PO", valor: 30000 },
        { nome: "Barco Chato (Keelboat)", custo: "3.000 PO", valor: 3000 },
        { nome: "Navio Longo (Longship)", custo: "10.000 PO", valor: 10000 },
        { nome: "Barco a Remo (Rowboat)", custo: "50 PO", valor: 50 },
        {
            nome: "Navio a Vela (Sailing Ship)",
            custo: "10.000 PO",
            valor: 10000,
        },
        { nome: "Navio de Guerra (Warship)", custo: "25.000 PO", valor: 25000 },
    ],
    // --- COMIDA, BEBIDA E ALOJAMENTO ---
    "Comida, Bebida e Alojamento": [
        { nome: "Cerveja (Ale)", custo: "4 PC", valor: 0.04 },
        { nome: "Pão (Loaf of Bread)", custo: "2 PC", valor: 0.02 },
        { nome: "Queijo (Wedge of Cheese)", custo: "1 PP", valor: 0.1 },
        { nome: "Estadia - Miserável", custo: "7 PC", valor: 0.07 },
        { nome: "Estadia - Pobre", custo: "1 PP", valor: 0.1 },
        { nome: "Estadia - Modesta", custo: "5 PP", valor: 0.5 },
        { nome: "Estadia - Confortável", custo: "8 PP", valor: 0.8 },
        { nome: "Estadia - Rica", custo: "2 PO", valor: 2 },
        { nome: "Estadia - Aristocrática", custo: "4 PO", valor: 4 },
        { nome: "Refeição - Miserável", custo: "1 PC", valor: 0.01 },
        { nome: "Refeição - Pobre", custo: "2 PC", valor: 0.02 },
        { nome: "Refeição - Modesta", custo: "1 PP", valor: 0.1 },
        { nome: "Refeição - Confortável", custo: "2 PP", valor: 0.2 },
        { nome: "Refeição - Rica", custo: "3 PP", valor: 0.3 },
        { nome: "Refeição - Aristocrática", custo: "6 PP", valor: 0.6 },
        { nome: "Vinho (garrafa) - Comum", custo: "2 PP", valor: 0.2 },
        { nome: "Vinho (garrafa) - Fino", custo: "10 PO", valor: 10 },
    ],
    // --- SERVIÇOS DE CONJURAÇÃO ---
    "Serviços de Conjuração": [
        { nome: "Serviço de Conjuração - Truque", custo: "30 PO", valor: 30 },
        { nome: "Serviço de Conjuração - 1° nível", custo: "50 PO", valor: 50 },
        {
            nome: "Serviço de Conjuração - 2° nível",
            custo: "200 PO",
            valor: 200,
        },
        {
            nome: "Serviço de Conjuração - 3° nível",
            custo: "300 PO",
            valor: 300,
        },
        {
            nome: "Serviço de Conjuração - 4°-5° nível",
            custo: "2.000 PO",
            valor: 2000,
        },
        {
            nome: "Serviço de Conjuração - 6°-8° nível",
            custo: "20.000 PO",
            valor: 20000,
        },
        {
            nome: "Serviço de Conjuração - 9° nível",
            custo: "100.000 PO",
            valor: 100000,
        },
    ],
};

// Função para atualizar o total dos itens selecionados,
// convertendo o total (em PO) para PP, PO e PC automaticamente.
function atualizarTotal() {
    const operacao = document.getElementById("global-type").value;
    let total = 0;
    document.querySelectorAll("tbody tr").forEach((row) => {
        const valor = parseFloat(row.dataset.preco);
        const quantidade =
            parseInt(row.querySelector(".quantidade").value) || 0;
        total +=
            operacao === "comprar"
                ? valor * quantidade
                : (valor / 2) * quantidade;
    });
    const moedas = converterMoedas(total);
    document.getElementById(
        "total-price"
    ).textContent = `${moedas.pp} PP, ${moedas.po} PO, ${moedas.pc} PC`;
}

// Função para carregar os itens de cada categoria na página.
function carregarItens() {
    const container = document.getElementById("tabelas-container");
    container.innerHTML = "";
    for (const cat in categorias) {
        const section = document.createElement("div");
        section.classList.add("categoria");
        section.setAttribute("data-categoria", cat.toLowerCase());
        section.innerHTML = `<h3>${cat}</h3>`;
        const table = document.createElement("table");
        table.innerHTML = `
        <thead>
          <tr>
            <th>Item</th>
            <th>Custo</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          ${categorias[cat]
              .map(
                  (item) =>
                      `<tr data-preco="${item.valor}">
              <td class="item-name">${item.nome}</td>
              <td>${item.custo}</td>
              <td><input type="number" class="quantidade" min="0" value="0" oninput="atualizarTotal()"></td>
            </tr>`
              )
              .join("")}
        </tbody>`;
        section.appendChild(table);
        container.appendChild(section);
    }
}

// Função para filtrar os itens conforme o termo pesquisado.
// Agora, somente os itens que contenham o termo na coluna "Item" serão exibidos.
function filterItems() {
    const query = document.getElementById("search-input").value.toLowerCase();
    document.querySelectorAll(".categoria").forEach((section) => {
        let hasMatch = false;
        section.querySelectorAll("tbody tr").forEach((row) => {
            const itemName = row
                .querySelector(".item-name")
                .textContent.toLowerCase();
            if (itemName.includes(query)) {
                row.style.display = "";
                hasMatch = true;
            } else {
                row.style.display = "none";
            }
        });
        section.style.display = hasMatch || query === "" ? "block" : "none";
    });
}

carregarItens();
