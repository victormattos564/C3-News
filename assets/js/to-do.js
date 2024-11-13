var edit = -1;
var hoje = new Date();
var diak = hoje.getDate() - 1;
var mesk = hoje.getMonth() + 1;
var anok = hoje.getFullYear();
var atual = new Date(`${anok}-${mesk}-${diak}`);
var titulos = [];
var datas = [];
var descricoes = [];
var autores = [];
var i = 0;
var text = [];
var dias = [];
var meses = [];
var anos = [];
var categorias = [];
var editarkk = "editar"
var addkk = "adicionar"
// declaração de variaveis e arrays





//function para adição de noticia 
function adicionarnot() {

    //variáveis pegar valor escrito
    var titulo = document.getElementById('titulo').value;
    var data = document.getElementById('data').value;
    var descricao = document.getElementById('descrição').value;
    var autor = document.getElementById('autor').value;
    var categoria = document.getElementById('categoria').value;

    //variável separar a data
    var inteiro = data.split('-');


    if (categoria == "Esportes" || categoria == "Tecnologia" || categoria == "Saúde e bem estar" || categoria == "Cinema" || categoria == "Vestibular" || categoria == "Música") {
        if (titulo == '' || data == '' || descricao == '' || autor == '' || new Date(data) < new Date(atual) || categoria == '') {
            if (titulo == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (data == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (descricao == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (autor == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (new Date(data) < new Date(atual)) {
                document.getElementById('error').innerHTML = 'Digite uma data válida!';
            }
            if (categoria == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            // mensagens de erro adicionadas aos erros
        }

        //verifica se o botão de editar foi apertado (caso for falso)
        else if (edit < 0) {

            //puxando os intens escritos para uma array
            dias.push(inteiro[2]);
            meses.push(inteiro[1]);
            anos.push(inteiro[0]);
            titulos.push(titulo);
            datas.push(data);
            descricoes.push(descricao);
            autores.push(autor);
            categorias.push(categoria);

            //esvaziando variaveis
            titulo = '';
            data = '';
            descricao = '';
            autor = '';
            categoria = '';

            //esvaziando as caixas de texto
            document.getElementById('titulo').value = '';
            document.getElementById('data').value = '';
            document.getElementById('descrição').value = '';
            document.getElementById('autor').value = '';
            document.getElementById('categoria').value = "Esportes"



            //array dos textos adicionados
            text[i] = `<section class="noticiToDo" id="noticia${i}">
                <div class="separator">
                    <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[i]}</h1>
                    <p class="titlesno"><strong>Categoria:</strong> ${categorias[i]}</p>
                    <p class="titlesno"><strong>Data:</strong> ${dias[i]}/${meses[i]}/${anos[i]}</p>
                    <p class="titlesno"><strong>Descrição:</strong> ${descricoes[i]}</p>
                    <p class="titlesno"><strong>Autor:</strong> ${autores[i]}</p>
                    <div class="flexin">
                        <button class="butdel" onclick="deletar(${i})">Deletar 🗑️</button>
                        <button class="butedit" onclick="editar(${i})">Editar ✏️</button>
                        <p class="rightjo" id="new${i}">novo</p>
                    </div>
                </div>
            </section>`;



            // retirar o ''novo'' de noticias acima de 3
            if (i > 2) {
                var sac = document.getElementById(`new${i - 3}`).innerHTML;
                if (sac.toUpperCase() == 'NOVO') {
                    text[i - 3] = `<section class="noticiToDo" id="noticia${i - 3}">
            <div class="separator">
                <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[i - 3]}</h1>
                <p class="titlesno"><strong>Categoria:</strong> ${categorias[i - 3]}</p>
                <p class="titlesno"><strong>Data:</strong> ${dias[i - 3]}/${meses[i - 3]}/${anos[i - 3]}</p>
                <p class="titlesno"><strong>Descrição:</strong> ${descricoes[i - 3]}</p>
                <p class="titlesno"><strong>Autor:</strong> ${autores[i - 3]}</p>
                <div class="flexin">
                    <button class="butdel" onclick="deletar(${i - 3})">Deletar 🗑️</button>
                    <button class="butedit" onclick="editar(${i - 3})">Editar ✏️</button>
                    <p class="rightjo" id="new${i - 3}"></p>
                </div>
            </div>
        </section>`;
                }
            }



            //adicionar outros textos
            var text2 = [];
            text2 = [...text];
            text2.reverse();
            document.getElementById(`todos`).innerHTML = `${text2.join(' ')}`;


            //adicionar 1 ao contador de noticias
            i++;

            //remover mensagem de erro
            document.getElementById('error').innerHTML = '';

        }

        //verifica se o botão de editar foi apertado (caso verdadeiro)
        else if (edit > -1) {

            //puxando os itens escritos para uma array
            dias[edit] = inteiro[2];
            meses[edit] = inteiro[1];
            anos[edit] = inteiro[0];
            titulos[edit] = titulo;
            datas[edit] = data;
            descricoes[edit] = descricao;
            autores[edit] = autor;
            categorias[edit] = categoria;

            //esvaziando as caixas de texto
            document.getElementById('titulo').value = '';
            document.getElementById('data').value = '';
            document.getElementById('descrição').value = '';
            document.getElementById('autor').value = '';
            document.getElementById('categoria').value = "Esportes"



            if (i > 2) {
                var sac = document.getElementById(`new${i - 3}`).innerHTML;
                if (sac.toUpperCase() == 'NOVO') {
                    text[i - 3] = `<section class="noticiToDo" id="noticia${i - 3}">
                        <div class="separator">
                            <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[i - 3]}</h1>
                            <p class="titlesno"><strong>Categoria:</strong> ${categorias[i - 3]}</p>
                            <p class="titlesno"><strong>Data:</strong> ${dias[i - 3]}/${meses[i - 3]}/${anos[i - 3]}</p>
                            <p class="titlesno"><strong>Descrição:</strong> ${descricoes[i - 3]}</p>
                            <p class="titlesno"><strong>Autor:</strong> ${autores[i - 3]}</p>
                            <div class="flexin">
                                <button class="butdel" onclick="deletar(${i - 3})">Deletar 🗑️</button>
                                <button class="butedit" onclick="editar(${i - 3})">Editar ✏️</button>
                                <p class="rightjo" id="new${i - 3}">novo</p>
                            </div>
                        </div>
                    </section>`;
                }



                if (sac.toUpperCase() == 'EDITADO') {
                    text[i - 3] = `<section class="noticiToDo" id="noticia${i - 3}">
                        <div class="separator">
                            <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[i - 3]}</h1>
                            <p class="titlesno"><strong>Categoria:</strong> ${categorias[i - 3]}</p>
                            <p class="titlesno"><strong>Data:</strong> ${dias[i - 3]}/${meses[i - 3]}/${anos[i - 3]}</p>
                            <p class="titlesno"><strong>Descrição:</strong> ${descricoes[i - 3]}</p>
                            <p class="titlesno"><strong>Autor:</strong> ${autores[i - 3]}</p>
                            <div class="flexin">
                                <button class="butdel" onclick="deletar(${i - 3})">Deletar 🗑️</button>
                                <button class="butedit" onclick="editar(${i - 3})">Editar ✏️</button>
                                <p class="rightjo" id="new${i - 3}">editado</p>
                            </div>
                        </div>
                    </section>`;
                }
            }


            //array dos textos adicionados
            text[edit] = `<section class="noticiToDo" id="noticia${edit}">
                <div class="separator">
                    <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[edit]}</h1>
                    <p class="titlesno"><strong>Categoria:</strong> ${categorias[edit]}</p>
                    <p class="titlesno"><strong>Data:</strong> ${dias[edit]}/${meses[edit]}/${anos[edit]}</p>
                    <p class="titlesno"><strong>Descrição:</strong> ${descricoes[edit]}</p>
                    <p class="titlesno"><strong>Autor:</strong> ${autores[edit]}</p>
                    <div class="flexin">
                        <button class="butdel" onclick="deletar(${edit})">Deletar 🗑️</button>
                        <button class="butedit" onclick="editar(${edit})">Editar ✏️</button>
                        <p class="rightjo" id="new${edit}">editado</p>
                    </div>
                </div>
            </section>`;



            //adicionar outros textos
            document.getElementById(`noticia${edit}`).style.display = 'block'
            var text2 = "";
            text2 = [...text];
            text2.reverse();
            document.getElementById(`todos`).innerHTML = `${text2.join(' ')}`;

            // colocar o texto no botão adicionar
            document.getElementById('addbut').innerHTML = addkk

            //variável para completar
            edit = -1;

            //limpar a caixa de erros
            document.getElementById('error').innerHTML = '';

        }
        // deixar o valor do campo categoria preenchido
    } else {
        document.getElementById('error').innerHTML = 'Escolha uma categoria válida!';
        //erro de caso a categoria não seja valida (caso editada diretamente no codigo)

    }  //verificar se as caixas de textos estão vazias

}





//function para deletar
function deletar(x) {

    //esvazia a posição que deseja deletar
    dias[x] = '';
    meses[x] = '';
    anos[x] = '';
    titulos[x] = '';
    datas[x] = '';
    descricoes[x] = '';
    autores[x] = '';
    text[x] = '';
    categorias[x] = '';

    //fazer desaparecer o item desejado
    document.getElementById(`noticia${x}`).style.display = 'none';
}





//fuction para editar o item desejado 
function editar(y) {
    document.getElementById('titulo').value = titulos[y];
    document.getElementById('data').value = datas[y];
    document.getElementById('categoria').value = categorias[y];
    document.getElementById('descrição').value = descricoes[y];
    document.getElementById('autor').value = autores[y];
    edit = y;



    text[y] = `<section class="noticiToDo" id="noticia${y}">
        <div class="separator">
            <h1 class="titlesno"><strong>Titulo:</strong> ${titulos[y]}</h1>
            <p class="titlesno"><strong>Categoria:</strong> ${categorias[y]}</p>
            <p class="titlesno"><strong>Data:</strong> ${dias[y]}/${meses[y]}/${anos[y]}</p>
            <p class="titlesno"><strong>Descrição:</strong> ${descricoes[y]}</p>
            <p class="titlesno"><strong>Autor:</strong> ${autores[y]}</p>
            <div class="flexin">
                <button class="butdel" onclick="deletar(${y})">Deletar 🗑️</button>
                <button class="butedit" onclick="editar(${y})">Editar ✏️</button>
                <p class="rightjo" id="new${y}">editado</p>
            </div>
        </div>
    </section>`;
    document.getElementById('addbut').innerHTML = editarkk
    document.getElementById(`noticia${y}`).style.display = 'none'
}