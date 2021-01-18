const entradas = [[0,0],[1,0],[0,1],[1,1]]
const saidas   = [0,1,1,1]
const pesos    = [0.0,0.0]
const tax 		 = 0.1

function trainer(){
	r = [0.0,0.0];
	tot = 1.0;
		for(i=0;i<=10;i++){
			entradas.forEach((entrada, index)=>{
				r[index] = entrada[0] * pesos[0] + entrada[1] * pesos[1]
				err = saidas[index] - r[index]
				tot += err
				if(err > 0){
					pesos[0] += tax
					pesos[1] += tax
				}
				if(r[index] > 1){
					r[index] = 1
				}
			})
		}
		console.log('primeiro resultado (0):',r[0])
		console.log('segundo resultado  (1):',r[1])
		console.log('terceiro resultado (1):',r[2])
		console.log('quarto resultado   (1):',r[3])

		console.log('peso-1: '+pesos[0])
		console.log('peso-2: '+pesos[1])
}

trainer()
