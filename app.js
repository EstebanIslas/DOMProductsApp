class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI { 
    //Metodos dentro de la Interface
    addProduct(product){
        const product_list = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name: </strong> ${product.name}
                    <strong>Product Price: </strong> ${product.price}
                    <strong>Product Year: </strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;

        product_list.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove(); //Eliminar card
        }
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

        const ui = new UI();

        ui.addProduct(product);
        ui.resetForm();

        //Cancelar evento reload de la app
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});