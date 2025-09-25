// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a > c && a > b){
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(5113, 231 , 122));
