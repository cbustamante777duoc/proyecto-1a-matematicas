module.exports = {
    /**
     * suma de dos numeros
     * @example 
     * n1 = 1, n2 = 1 => resultado 2
     * @param {*} n1 numero 1 de la suma
     * @param {*} n2 numero 2 de la suma
     */
    suma: function(n1,n2){
        return `el resultado es  ${n1+n2} ;` 
    },
     /**
     * resta  dos numeros
     * @example 
     * n1 = 5, n2 = 1 => resultado 4
     * @param {*} n1 numero 1 de la resta
     * @param {*} n2 numero 2 de la resta
     */
    resta: function(n1,n2){
        return `el resultado es  ${n1-n2} ;` 
    },
     /**
     * multiplica dos numeros
     * @example 
     * n1 = 7, n2 = 8 => resultado 56
     * @param {*} n1 numero 1 de la multiplicacion
     * @param {*} n2 numero 2 de la multiplicacion
     */
    multiplicacion: function(n1,n2){
        return `el resultado es  ${n1*n2} ;` 
    },
     /**
     * division de dos numeros
     * @example 
     * n1 = 10, n2 = 2 => resultado 5
     * @param {*} n1 numero 1 de la division
     * @param {*} n2 numero 2 de la divison
     */
    division: function(n1,n2){
        return `el resultado es  ${n1/n2} ;` 
    }
}