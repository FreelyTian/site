<h2 align="center"> Urubank ADM Pannel - ZecaAnálise.</h2>
<h1 align="center">
<img src="docs/res/WhatsApp Image 2022-09-12 at 11.26.58.jpeg">
</h1>
<!-- Esse modelo <details> e <summary> é pra deixar em modo colapsável-->
<details>
	<summary>
		<h2> Overview </h2>
	</summary>
  Nosso sistema vem pra trazer métricas sólidas e transformá-las em gráficos intuitivos que facilitem o processo de análise. Com isso traremos mais eficiência e qualidade principalmente pro setor de marketing e planejamento que poderá tomar suas decisões mais tranquilo. Embora existam muitos sistemas que entreguem algo parecido (Como o Sentry por exemplo) o nosso sistema é dedicado e 100% personalizável. Conheça mais lendo logo abaixo 😉
</details>

#     <!-- Esse # é o separador-->

<details>
	<summary>
		<h2>Escopo do Projeto</h2>
	</summary>
O Sistema de Análises de Dados Bancários surgiu a partir da necessidade da startup bancária ZecaUrubank em realizar investimentos inteligentes na sua empresa a fim de evitar perdas financeiras significativas que possam prejudicar o seu desenvolvimento. 
Para melhor compreensão dessa exigência é essencial o entendimento da definição de uma startup. Esse termo tem origem inglesa e, traduzido de forma literal tem como significado: “empresa emergente”, por isso é utilizado para referir-se a empresas iniciantes que ainda estão na fase de definição de público-alvo e modelo de negócios. Dito isso, é compreensível que por ser uma entidade nova os seus recursos são limitados e, o seu alcance de público é baixo, por isso há essa necessidade de conhecer e compreender os usuários que estejam interessados em participar dessa empresa, no caso o Banco ZecaUrubank. 
A partir disso, houve a ideia de se criar um sistema capaz de captar esses dados, agrupando-os de acordo com os critérios exigidos possibilitando a criação de gráficos para uma análise detalhada dos usuários do banco. Para a realização deste projeto concluiu-se que ele deveria ser capaz de permitir uma interação de dados, por isso está sendo utilizado para o seu desenvolvimento o framework Node.JS da linguagem JavaScript e o clássico HTML e CSS para estruturaçãoe estilização além da biblioteca Chart.js para a construção visual dos gráficos.
</details>

#

<details>
	<summary>
		<h2>Funcionalidades</h2>
	</summary>
As funcionalidades ou produtos gerados pelo nosso sistema de gerenciamento de dados, os quais são advindos da startup bancária ZecaUrubank, estão intrinsecamente relacionados aos processos de gestão de conhecimento. Tais processos são primordiais para a empresa obter um gerenciamento inteligente, evitando perdas e danos prejudiciais ao desenvolvimento dessa startup.
Por isso, antes de explicarmos quais serão as funcionalidades disponíveis em nosso sistema  devemos definir o que são esses processos, a sua importância para o desenvolvimento do projeto e como esses estão relacionados às funcionalidades do nosso projeto.

<h4 align="center"> Funcionalidades X Processos de gestão de conhecimento
<table align="center">
  <th> Funcionalidades </th>
  <th> Processo </th>
  <th> Descrição </th>
  <tr>
    <td> Obter dados do usuário a partir de seu login </td>
    <td> Adquirir conhecimento externamente </td>
    <td> Esse é o processo primordial para o funcionamento do nosso projeto, já que é a partir dele que o sistema obtém os dados necessários para análise, sendo eles: idade, localidade, sexo, renda média mensal, investimentos realizados </td>
  </tr>
  <tr>
    <td> Criação de gráficos de análise </td>
    <td> Processar e aplicar o conhecimento </td>
    <td> A partir da obtenção dos dados requeridos pelo sistema, é realizada um agrupamento desses, o que permite a criação de gráficos diversos para a compreensão detalhada sobre as características dos usuários </td>
  </tr>
  <tr>
    <td> Criação de gráficos de trajetória </td>
    <td> Reutilizar o conhecimento </td>
    <td> A partir das análises anteriores sobre as características dos usuários é possível realizar projeções ao usuário sobre a sua relação com o banco, o rendimento das suas aplicações </td>
  </tr>
</table>
</details>
	
#

<details>
	<summary>
		<h2>Conceitual</h2>
	</summary>
Página inicial para login do administrador do sistema

<img src="docs/res/Home.svg">

Página de métricas para análises

<img src="docs/res/Brief.svg">

O protótipo interativo pode ser acessado clicando [aqui](https://www.figma.com/proto/AVziC7LfJEeqgt3wduEgn4/Site?node-id=21%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=21%3A2&hide-ui=1) (Recomendamos utilizar em tela cheia)

## Rotas
As rotas no nosso sistema são todas bem simples:
<h4 align="center">
<table>
	<th> Início </th>
	<th> Meio </th>
	<th> Fim </th>
	<tr>
	<th colspan="3"> Entrar no sistema </th>
	</tr>
	<tr>
	<td> Usuário entra no site </td>
	<td> Usuário digita os campos requeridos </td>
	<td> Usuário clica no botão de login</td>
	</tr>
	<tr>
	<th colspan="3"> Entrar na tela de métricas </th>
	</tr>
	<tr>
	<td> Após fazer login </td>
	<td> Usuário estará no dashboard principal </td>
	<td> Usuário pode fazer suas análises</td>
	</tr>
	<th colspan="3"> Comparaçóes com dados anteriores </th>
	</tr>
	<tr>
	<td> Dentro do dashboard </td>
	<td> Usuário clica no menu de contexto "..." </td>
	<td> Seleciona o gráfico anterior à ser comparado na opção "comparar"</td>
	</tr>
	<th colspan="3"> Previsões </th>
	</tr>
	<tr>
	<td colspan="3" style="text-align: center;"> Essa função é automática e basta que o usuário clique nela </td>
	</tr>
	<!-- No momento só isso -->

</table>
</h4>
	No momento só isso
</details>

#

<details>
	<summary>
		<h2>Modelo e banco</h2>
	</summary>
Modelo Lógico <br>
<img src="docs/res/WhatsApp Image 2022-10-14 at 18.27.50.jpeg" alt="Modelo Lógico"> <br>
<br>
Banco em si em fase de validação <br>
<img src="docs/res/model.png" alt="Banco em si"> <br>
Nosso banco conta apenas com 2 tabelas no presente momento uma para puxar as informações do usuário pelo seu código único no sistema do nosso cliente - por enquanto estamos usando um banco de desenvolvimento sem integração com o final - e a outra para guardar os dados que interesssam pra nossa análise. 
</details>

#

<details>
	<summary>
		<h2> Nossa API </h2>
	</summary>
	Durante o desenvolvimento do back-end da nossa plataforma foram encontrados muitos problemas com os frameworks anteriores e isso nos forçou à medidas bem fortes. O projeto inicial previa um desenvolvimento com NodeJS e integração com o Firebase. Isso no entanto se provou uma tarefa impossível já que o Node não roda em navegador e nao encontramos implementação clara do JS puro com o firebase.
	Foi por causa desses problemas que foi necessário que criássemos nossa própria API para busca e tratamento dos dados do banco de dados escolhido, que dessa vez foi o <a href="https://www.mongodb.com"> MongoDB</a>, cujo tem uma implementação relativamente simples com o framework utillizado pra construir a API que no caso é o <a href="https://fastapi.tiangolo.com/pt/">FastAPI</a>. </br>
	O FastAPI é um framework Python voltado para o desenvolvimento de APIs. 
	Suas Principais características são: </br> </br>
	<ul>
		<li> Rápido: as API'S desenvolvidas com FastAPI possuem alta perfomance. De tal forma que é considerado um dos framewors Python mais rápidos </br>
		<li> Intuitivo: o código de fonte do framework foi inteiramente desenvolvido utilizando o recurso de type hints, que consiste na declaração antecipada de tipos de variáveis, parâmetros e valores de retorno de uma função, o que possibilita que IDE'S e Editores de Código Fonte possuam um melhor intellisense, fazendo assim com que se gaste menos tempo debugando o código. </br>
		<li> Fácil: foi inteiramente pensado para ser fácil de usar e aprender, fazendo assim com que se gaste menos tempo lendo a documentação. </br>
	</ul>
	Para hostear <i><small>(hospedar)</small></i> nosso projeto optamos por uma plataforma cloud, sendo esse tipo de plataformas definidas como empresas que oferecem o serviço de manter e disponibilizar recursos de computação sob demanda. A Heroku foi a plataforma escolhida, já que nos permite hospedar código e não se preocupar muito com a disponibilidade, escala e infraestrutura da aplicação e, por oferecer categorias de uso gratuito para projetos não comerciais. Sendo muito utilizada para aplicações de back-end, como as desenvolvidas em Node.js, Ruby, Java, PHP, Python, Go, entre outras. No entanto a disponibilidade gratuita dos seus serviços se encerrará no final de novembro de 2022, o que pode vir a nos fazer migrar pra <a href="https://www.netlify.com/"> Netlify </a> por exemplo pois oferece serviços semelhantes.
	Como banco de dados o MongoDB foi o escolhido, sendo um banco de dados orientado a documentos que possui código aberto (open source) e que foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes. Possuindo como vantagens: </br> </br>
	<ul>
		<vi>
			<li> A permissão oara criar vários bancos de dados e várias coleções dentro do principal;
			<li> Nas coleções estão os documentos que contêm os dados que serão armazenados no banco do MongoDB, sendo que uma única coleção pode conter vários documentos, os quais não necessitm ser semelhantes um ao outro já que não existe esquema de tipo;
			<li> Nos documentos, pode-se armazenar dados aninhadoss. Essa conexão permite criar relações complexas entres eles e armazeená-los no mesmo documento, o que torna o trabalho de busca mais eficiente em relação ao SQL;
			<li> Não é necessário projetar o esquema do banco de dados ao trabalhar com o mongoDB;
			<li> Fornece grande flexibilidade para os campos nos documentos;
			<li> Trabalha com dados heterogêneos;
			<li> Não requer nenhuma adição ou injeção de SQL;
		</vi>
	</ul>
</details>

#

## Constitucional:
[Termos e condições](docs/res/MDs/terms.md) </br>
[Regras de negócio e Rotas](docs/res/MDs/RN-RT.md) </br>
[Histórias de Usuário](docs/res/MDs/US.md)



<h2 align="center">Colaboradores</h2>

<p align="left">
	<img width="256"
	     	align="left"
		alt="Samuel"
		src="docs/res/WhatsApp Image 2022-10-12 at 20.42.29 (1).jpeg">
    <a href="https://github.com/FreelyTian"> Samuel Araújo </a> <br>
		Bonjour Meu nome é Samuel Sou natural de Miracema do Tocantins, atualmente estagiário na Sefaz (Secretaria da Fazenda) e estudo Engenharia de software na Unicatólica Palmas. Nesse projeto atuo como
    <a href="https://www.atlassian.com/br/agile/scrum/scrum-master" target="_blank"> Scrum master. </a> e
    <a href="https://querobolsa.com.br/carreiras-e-profissoes/dba-administrador-de-banco-de-dados" target="_blank"> DBA. 
    </a> até o momento tem sido um projeto divertido - com seus desafios mas divertido - no qual pude ter muitas novas experiências bem úteis pra minha       carreira que ainda está no seu início mas é um bom início.
</p>
<br> <br> <br> <br> <br> 
<p align="left">
	<img width="256"
	     	align="left"
		alt="Esther"
		src="docs/res/WhatsApp Image 2022-10-14 at 19.40.42.jpeg">
    <a href="https://github.com/kothz"> Esther Kothz Frank </a> <br>
		Hello World!
		Meu nome é Esther Kohtz Frank, sou estudante de Engenharia de Software na Universidade Católica do Tocantins.
    Neste projeto atuo aplicando os processos de gestão de conhecimento as suas funcionalidades, e com a parte de documentação do Sistema.
</p>
<br> <br> <br> <br> <br> <br> <br> 
<p align="left">
	<img width="256"
	     	align="left"
		alt="João Neto"
		src="docs/res/WhatsApp Image 2022-10-14 at 19.39.27.jpeg">
    <a href="https://github.com/TaoAleatoro"> João Neto da Silva </a> <br>
    Olá pessoas, sou João Atrdr 27 do TG de Miracema. Cursante de Engenharia de software na Universidade Católica. Nesse projeto sou basicamente o
    suporte e alívio cômico, estou desenvolvendo divesas habilidades novas a medida que avançamos, está sendo bem interessante.
</p>
<br> <br> <br> <br> <br> <br> <br>
<p align="left">
	<img width="256"
	     	align="left"
		alt="Maria Clara"
		src="docs/res/WhatsApp Image 2022-10-14 at 19.55.19.jpeg">
    <a href="https://github.com/clarasoliveira"> Maria Clara Oliveira </a> <br>
    Olá me chamo Maria Clara, sou de Palmas, curso Engenharia de software na Universidade católica do Tocantins e auxiliei na parte de documentação e aplicação dos processos de gestão de conhecimento.
</p>
