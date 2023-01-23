class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI { 
    //Metodos dentro de la Interface
    addProduct(){

    }

    deleteProduct(){

    }

    showMessage(){

    }
}

//DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function(e) { //Obteniendo datos del form
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        
        //Definir productos para crear nuevo objeto
        const product = new Product(name, price, year);

        

        //Cancelar evento reload de la app
        e.preventDefault();
});
