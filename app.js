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
            this.showMessage('Product Deleted Successfully', 'warning');
        }
    }

    showMessage(message, css_class){
        const div = document.createElement('div');
        div.className = `alert alert-${css_class} mt-3`;
        div.appendChild(document.createTextNode(message));
        //Mostrando en el Dom la alert
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');

        container.insertBefore(div, app);

        //Temporizador de alerta para que desaparezca
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 1400);
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

        //Validaciones
        if (name === '' || price === '' || year === '') {
            return ui.showMessage('Complete Fields Please', 'danger');
        }

        ui.addProduct(product);
        ui.resetForm();

        ui.showMessage('Product Added Successfully', 'success');

        //Cancelar evento reload de la app
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});