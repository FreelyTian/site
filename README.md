<h2 align="center"> Urubank ADM Pannel - ZecaAnálise.</h2>
<h1 align="center">
<img src="docs/res/WhatsApp Image 2022-09-12 at 11.26.58.jpeg">
</h1>

## Overview
  Nosso sistema vem pra trazer métricas sólidas e transformá-las em gráficos intuitivos que facilitem o processo de análise. Com isso traremos mais eficiência e qualidade principalmente pro setor de marketing e planejamento que poderá tomar suas decisões mais tranquilo. Embora existam muitos sistemas que entreguem algo parecido (Como o Sentry por exemplo) o nosso sistema é dedicado e 100% personalizável. Conheça mais lendo logo abaixo 😉

## Escopo do Projeto 
O Sistema de Análises de Dados Bancários surgiu a partir da necessidade da startup bancária ZecaUrubank em realizar investimentos inteligentes na sua empresa a fim de evitar perdas financeiras significativas que possam prejudicar o seu desenvolvimento. 
Para melhor compreensão dessa exigência é essencial o entendimento da definição de uma startup. Esse termo tem origem inglesa e, traduzido de forma literal tem como significado: “empresa emergente”, por isso é utilizado para referir-se a empresas iniciantes que ainda estão na fase de definição de público-alvo e modelo de negócios. Dito isso, é compreensível que por ser uma entidade nova os seus recursos são limitados e, o seu alcance de público é baixo, por isso há essa necessidade de conhecer e compreender os usuários que estejam interessados em participar dessa empresa, no caso o Banco ZecaUrubank. 
A partir disso, houve a ideia de se criar um sistema capaz de captar esses dados, agrupando-os de acordo com os critérios exigidos possibilitando a criação de gráficos para uma análise detalhada dos usuários do banco. Para a realização deste projeto concluiu-se que ele deveria ser capaz de permitir uma interação de dados, por isso está sendo utilizado para o seu desenvolvimento o framework Node.JS da linguagem JavaScript e o clássico HTML e CSS para estruturaçãoe estilização além da biblioteca Chart.js para a construção visual dos gráficos.

## Funcionalidades
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
  
## Conceitual
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
	
## Modelo e banco
Modelo Lógico <br>
<img src="docs/res/WhatsApp Image 2022-10-14 at 18.27.50.jpeg" alt="Modelo Lógico"> <br>
<br>
Banco em si em fase de validação <br>
<img src="docs/res/model.png" alt="Banco em si"> <br>
Nosso banco conta apenas com 2 tabelas no presente momento uma para puxar as informações do usuário pelo seu código único no sistema do nosso cliente - por enquanto estamos usando um banco de desenvolvimento sem integração com o final - e a outra para guardar os dados que interesssam pra nossa análise. 

# Colaboradores:

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
		Meu nome é Esther Kohtz Frank, sou estudante de Engenharia de Software na Universidade Católica do Tocantins.
    Neste projeto atuo aplicando os processos de gestão de conhecimento as suas funcionalidades.
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
