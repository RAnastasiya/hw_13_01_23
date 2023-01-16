/*
Cтворіть функцію конструктор Продукт з властивостями:
назва(рядок), ціна(число), кількість(число - залишок на складі)

Cтворіть функцію конструктор прототипу Продукту з функціоналом:
showInfo() - повертає рядок з усіма данними
setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null

Не забути поєднати Продукт і його прототип!
*/


function Proto (){
    this.showInfo = function(){ 
        return 'name: ' + this.name + ', price: ' + this.price + ', remainder: ' + this.remainder;
    },
    /**
     * 
     * @param {number} value 
     * @returns {number}
     */
    this.setSaleToPrice = function(value=0){ 
        return this.price -=value;
    },
     /**
     * 
     * @param {number} value 
     * @returns {number}
     */
    this.buyAmountProduct = function(amountValue){ 
        if(amountValue > this.remainder){
            return null;
        }
        return amountValue * this.price;
    }
}
/**
 * 
 * @param {string} name 
 * @param {number} price 
 * @param {number} remainder 
 */
function Product (name, price, remainder){
    this.name = name,
    this.price = price,
    this.remainder = remainder
}

Product.prototype = new Proto();
const product = new Product("product", 100, 10);

console.log(product);
console.log(product.showInfo());
console.log(product.setSaleToPrice(5));
console.log(product.buyAmountProduct(10));