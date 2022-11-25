import random
rendas = [50256, 751, 70058, 53940, 6825, 44231, 37214,	14654, 35163, 63378, 2408, 7873, 1476, 2876,67728, 53675, 12883, 18043, 8694, 41848]
locais = ['Norte', 'Sul', 'Nordeste', 'Sudeste', 'Centro-Oeste']
sexo = ['Masculino', 'feminino']
renda = ''
local = ''
datas = []
for i in range(233):
    renda = random.choice(rendas)
    local = random.choice(locais)
    idade = random.randint(16, 94)
    data = {
    "renda": f"{renda}",
    "local": f'{local}',
    "sexo": f'{random.choice(sexo)}',
    "idade": f'{idade}'
    }
    datas.append(data)

print(datas)