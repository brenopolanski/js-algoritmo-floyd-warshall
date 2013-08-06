/* * * * * * * * * * * * * * * * * * * * * * * *

        Exemplo grafo

Observação: Em computação, NaN (acrónimo em inglês para Not a Number) 
            é um valor ou símbolo usado nas linguagens de programação 
            para representar um valor numérico não válido.

Fonte: http://pt.wikipedia.org/wiki/NaN
 
var grafo = [[NaN, 7,   9,   NaN, NaN, 16],
             [7,   NaN, 10,  15,  NaN, NaN],
             [9,   10,  NaN, 11,  NaN, 2],
             [NaN, 15,  11,  NaN, 6,   NaN],
             [NaN, NaN, NaN, 6,   NaN, 9],
             [16,  NaN, 2,   NaN, 9,   NaN]];

* * * * * * * * * * * * * * * * * * * * * * * */

/**
* Algoritmo de Floyd-Warshall
* Encontra a menor distância entre os vértices do grafo
*
* Complexidade theta(|V|^3)
*/
var algoritmoFloydWarshall = (function(){

	return { floydWarshall: floydWarshall };

	var dist;

	/**
	* Inicialização do algoritmo
	* @private
	* @param {array} grafo matriz de entrada do grafo
	* @return {array} distância da matriz utilizada para o algoritmo
	*/
	function init(grafo) {
		var dist = [];
		for (var i = 0; i < grafo.length; i++) {
			dist[i] = [];
			for (var j = 0; j < grafo.length; j++) {
				if (i === j)
					dist[i][j] = 0;
				// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN
				else if (isNaN(grafo[i][j]))
					// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Infinity
					dist[i][j] = Infinity;
				else
					dist[i][j] = grafo[i][j];
			}
		}
		return dist;

		/* * * * * * * * * * * * * * * * * * * * * * * *

		        return
		 
			dist = [[0, 7,  9, Infinity, Infinity, 16],
		            [7, 0,  10, 15, Infinity, Infinity],
		            [9, 10, 0, 11, Infinity, 2],
		            [Infinity, 15, 11, 0, 6, Infinity],
		            [Infinity, Infinity, Infinity, 6, 0, 9],
		            [16, Infinity, 2, Infinity, 9, 0]];

		* * * * * * * * * * * * * * * * * * * * * * * */
	}

	/**
    * Encontra o caminho mais curto entre cada dois vértices
	* @public
    * @param {array} grafo
    * @return {array} matriz que contém a menor distância entre cada par de vértices
    */
	function floydWarshall(grafo) {
		dist = init(grafo);
		for (var k = 0; k < grafo.length; k++) {
			for (var i = 0; i < grafo.length; i++) {
				for (var j = 0; j < grafo.length; j++) {
					if (dist[i][j] > dist[i][k] + dist[k][j])
						dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
		}
		alert("Menor caminho: " + "["+dist+"]");
	
		/* * * * * * * * * * * * * * * * * * * * * * * *

		        return
		 
			dist = [[0, 7, 9, 20, 20, 11],
		            [7, 0, 10, 15, 21, 12],
		            [9, 10, 0, 11, 11, 2],
		            [20, 15, 11, 0, 6, 13],
		            [20, 21, 11, 6, 0, 9],
		            [11, 12, 2, 13, 9, 0]];

		* * * * * * * * * * * * * * * * * * * * * * * */
	}

}());