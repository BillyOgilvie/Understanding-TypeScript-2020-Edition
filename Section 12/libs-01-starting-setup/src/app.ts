import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { Product } from './product.model';
import { validate } from 'class-validator';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const prod = new Product('', -12.99);
validate(prod).then((errors) => {
  if (errors.length > 0) {
    console.log('Validation Errors');
    console.log(errors);
  } else {
    console.log(prod.getInformation());
  }
});

// const p1 = new Product('A book', 12.99);

// const loadedProducts = products.map(
//   (prod) => new Product(prod.title, prod.price)
// );

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
