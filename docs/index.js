const request = new XMLHttpRequest()
request.open("GET", "https://zecanalizeapi.herokuapp.com/users")
request.send()
request.onload = function() {
  if (request.status === 200) {
    getted = JSON.parse(request.responseText)
    console.log(getted)
  } else if (request.status === 404){
    console.log('Houve um erro no processamento dos dados, verifique os status e tente novamente.')
  }
}
request.onerror = function() {
  console.log("Erro de rede")
}
// essas 3 peguei da internet na pressa
function CountItems(arr, item=null){
  if(item == null) return arr.length;
  if(Array.isArray(item)) return countMultipleItems(arr, item);
  return countSingleItem(arr, item);
}

function countMultipleItems(arr, items){
  return items.map(item => {
    return {[item]:arr.filter(i => i == item).length}
  })
}

function countSingleItem(arr,item){
  let filteredResult = arr.filter(i => i == item);
  return filteredResult.length;
}
// Aq já volta à ser minha
request.onloadend = function parse() {
  var data = getted['data'][0]
  var many = []
  var locais = []
  var rendas = []
  var idades = []
  var sexos = []
  for (let i = 0; i < 233; i++) {
    var local = data[i]['local']
    var renda = data[i]['renda']
    var idade = data[i]['idade']
    var sexo = data[i]['sexo']
    locais.push(local)
    rendas.push(rendas)
    idades.push(idade)
    sexos.push(sexo)
  }
  regioes = ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste']
  many.push(countMultipleItems(locais, regioes))
  var manyS = `${parseInt(parseFloat(Object.values(many[0][4]) / 233 * 100).toFixed(2))}%`
  var manySex = `${parseInt(parseFloat(Object.values(countMultipleItems(sexos, ['Masculino', 'feminino'])[0]) / 233 * 100).toFixed(2))}% e ${parseInt(parseFloat(Object.values(countMultipleItems(sexos, ['Masculino', 'feminino'])[1]) / 233 * 100).toFixed(2))}%`
  var manyIdd = Object.values(countMultipleItems(idades, [18, 19, 20, 21, 22, 23, 24])) // a soma é 14
  document.getElementById('Dado1').innerText = `${manyS} dos nossos clientes de encontram na região ${Object.keys(many[0][4])}.`
  document.getElementById('Dado2').innerText = `${manySex} dos nossos clientes são do sexo masculino e feminino respectivamente.`
  document.getElementById('Dado3').innerText = 'Apenas 14 dos nossos clientes estão entre 18 e 24 anos de idade.'
  var ctx1 = document.getElementById('popu').getContext('2d');
  var ctx2 = document.getElementById('barr').getContext('2d');
  console.log(rendas)
  var campaignDonut = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: regioes,
        datasets: [{
            data: [Object.values(many[0][0]),Object.values(many[0][1]), Object.values(many[0][2]), Object.values(many[0][3]), Object.values(many[0][4])],
            backgroundColor: ['#27DA3F', '#27DF3F', '#77DA3F', '#27DA3F', '#27FA3F'],
        }],
    },
    options: {
        aspectRatio: 1,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        cutoutPercentage: 60,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    }
  });
  var barchart = new Chart( ctx2, {
    type: bar,
    data: {
      labels: ['Janeiro', 'Fevereiro','Março' , 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro','Março' , 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [{
        data: [(rendas[0][0] * 132), Object.values(rendas[0][1] * 132), Object.values(rendas[0][2] * 132), Object.values(rendas[0][3] * 132), Object.values(rendas[0][4] * 132), Object.values(rendas[0][5] * 132), Object.values(rendas[0][6] * 132), Object.values(rendas[0][7] * 132),
        Object.values(rendas[0][8] * 132), Object.values(rendas[0][9] * 132), Object.values(rendas[0][10] * 132), Object.values(rendas[0][11] * 132), Object.values(rendas[0][12] * 132), Object.values(rendas[0][13] * 132), Object.values(rendas[0][14] * 132), Object.values(rendas[0][15] * 132),
        Object.values(rendas[0][16] * 132), Object.values(rendas[0][17] * 132), Object.values(rendas[0][18] * 132), Object.values(rendas[0][19] * 132), Object.values(rendas[0][20] * 132), Object.values(rendas[0][21] * 132), Object.values(rendas[0][22] * 132), Object.values(rendas[0][23] * 132), Object.values(rendas[0][24] * 132)
        ],
        backgroundColor: ['#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F', '#27DA3F']
              }],
      options: {
        aspectRatio: 1,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    }
    }
  });
}