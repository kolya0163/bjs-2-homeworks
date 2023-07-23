﻿function parseCount (value) {
    const number = Number.parseFloat(value);
    if (isNaN (number)) {
        throw new Error ('Невалидное значение');        
    } 
    return number;
}     

function validateCount (value) {
    try {
        return parseCount (value);
    }
    catch (err) {
        return err;
    }
}



class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    
        if (a + b < c || a + c < b || b + c < a) {
           throw new Error ('Треугольник с такими сторонами не существует');
        }       
    }


    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        let p = this.perimeter / 2;
        let ar = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return ar;
    }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует"
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}