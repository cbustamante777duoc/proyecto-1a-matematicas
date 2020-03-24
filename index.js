module.exports = {
    /**
     * suma de dos numeros
     * @example 
     * n1 = 1, n2 = 1 => resultado 2
     * @param {*} n1 numero 1 de la suma
     * @param {*} n2 numero 2 de la suma
     */
    suma: function(n1,n2){
        return (this.esNumero(n1,n2) ? n1+n2 :this.MensajeError() )
    },
     /**
     * resta  dos numeros
     * @example 
     * n1 = 5, n2 = 1 => resultado 4
     * @param {*} n1 numero 1 de la resta
     * @param {*} n2 numero 2 de la resta
     */
    resta: function(n1,n2){
        return (this.esNumero(n1,n2) ?  n1-n2 :this.MensajeError() )
    },
     /**
     * multiplica dos numeros
     * @example 
     * n1 = 7, n2 = 8 => resultado 56
     * @param {*} n1 numero 1 de la multiplicacion
     * @param {*} n2 numero 2 de la multiplicacion
     */
    multiplicacion: function(n1,n2){
        return (this.esNumero(n1,n2) ? n1*n2 :this.MensajeError() )
    },
     /**
     * division de dos numeros
     * @example 
     * n1 = 10, n2 = 2 => resultado 5
     * @param {*} n1 numero 1 de la division
     * @param {*} n2 numero 2 de la divison
     */
    division: function(n1,n2){
        return (this.esNumero(n1,n2) ? n1/n2 :this.MensajeError() )
    },
    /**
     * mensaje de error en caso que un parametro este malo
     */
    MensajeError: function(){
        console.log('uno de los valores no es un numero');
    },
    /**
     * funcion que comprueba que sean valores numericos
     * @param {*} n1 
     * @param {*} n2 
     */
    esNumero: function(n1,n2){
        if(typeof n1 !=='number' || typeof n2 !=='number'){
            return false;
        }
        else{
            return true;
        }
    }
}