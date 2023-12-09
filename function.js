
function one(count){
    console.log(count + 1);

}
one(5);

const two = (count) => {
    console.log(count + 2);
} 
two(8);

// IIFE (immediate involves function execution)
(
    function passmessage () {
        console.log("first execution");
        console.log("Database fetched");

    }
)
();

