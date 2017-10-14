//Function
var fn = function() {};

// add :: (Number,Number) -> Number 
var add = (x,y) => x + y;

// adD :: Number -> Number -> Number + Number
var adD = x=> y => x + y; 

// addTwo :: Number -> Number 
//var addTwo = x => x + 2;

// Filter :: Function -> Array -> Array
// Filter :: (a -> Boolean) -> [a] -> [a]
var filter = pr => xs => xs.filter(pr);

//Reduce :: (b -> a -> b) -> b -> [a] -> b
var reduce = fn => acc => xs => xs.reduce(fn, acc);

/**
 * ENTORNOS
 */

 function Enviroment(somenthing){
     this.__value=somenthing;
 }

 var env = new Enviroment("Hello I am in a enviroment!. Do you want to get inside?");

 // Ejemplo con una funcion y una lista
 var addTwo = x => x + 2;
 //[NUmber]
 var I_X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

 // ojo :: (Number -> Number) -> ([Number] -> [Number])
 // ojo es una verion curryficada de .map()
 var ojo = function(fn) {
        return function(xs) {
            return xs.map(fn)
     }
 };

 var addTwoprima = ojo(addTwo);
 
 addTwoprima(I_X);
 // >> [3, 4, 5, 6, 7, 8, 9, ...]

 var fmap = ojo;

 var timesThree = x => x * 3;

 var timesThreeprima = fmap(timesThree);

 var doALotOfThings = compose(addTwoprima, timesThreeprima, timesThreeprima, addTwoprima)

 
 var two = 2;
 // unit :: Number -> [Number]
 var unit = x => [x];
 doALotOfThings(uju(two));
 
 // lift :: ([Number] -> Number) -> ([Number] -> [Number])
 var lift = fn => compose(unit, fn);

 // Join :: [[Number]] -> [Number]
 var join = xss => xss.reduce((acc, xs) => acc.concat(xs), []);

 // chain :: (Number -> [Number]) -> ([Number] -> [Number])
 var chain = fn => compose(join, fmap(fn));

 // Promise[a, b] = pending | Resolved[a] | Rejected[b]
 
 // unit :: a => Resolved[a]
 var unit = a => Promise.resolve(a);

 // reject :: b => Rejected[b]
 var reject = b => Promise.reject(b);

 // fmap :: (a -> c) -> (Promise[a, b] -> Promise[c, b])
 var fmap = fn => pr => pr.then(fn);

 // chain :: (a -> Promise[c, b]) -> (Promise[a, b] -> Promise[c, b])
 var chain = fn => pr => pr.then(fn);

 // divideTwoBy :: Number -> Promise[NUmber, String]
 var divideTwoBY = function(x) {
    if (x === 0) return Promise.reject("can not divide by zero");
    else return Promise.resolve(2 / x);
 };

 Promise.resolve(0).then(divideTwoBY).then(value => console.log('resolved', value), value => console.log('rejected', value));
 // [log] "rejected" "cannot divide by zero"

 Promise.resolve(0).then(divideTwoBY).catch(value => console.log('rejected', value));
 // [log] "rejected" "cannot divide by zero"

 /**
  * LAZY PROMISES
  */
