class ProductManager {
    id = 1;
  
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      let checkCode = this.products.find((p) => p.code === product.code);
      if (checkCode) {
        
        return 'This code already exists';
      }
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        
        return 'Fields missing';
      }
      let newProduct = { ...product, id: this.id };
      this.products.push(newProduct);
      this.id++;
      return 'Product added';
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let found = this.products.find((p) => p.id === id);
      if (!found) {
        return 'Not found';
      }
      return found;
    }
  }
  
  const product = {
    title: 'zapatos',
    description: 'zapatosInvierno',
    price: 200,
    thumbnail:
      'https://i.pinimg.com/564x/15/b4/30/15b430802ecccb10ddda5f1e8e578bb1.jpg',
    code: 'be21',
    stock: 100,
  };
  const product2 = {
    title: 'zapatos1',
    description: 'ZapatosVerano',
    price: 200,
    thumbnail:
      'https://i.pinimg.com/564x/f5/92/4d/f5924d90c3a0c25a698487acde0f854a.jpg',
    code: 'be21',
    stock: 100,
  };
  
  const productManager = new ProductManager();