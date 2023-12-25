const myBlock = document.getElementById('myBlock');
// myBlock.style.backgroundColor = "red";
// myBlock.classList.add("dark")

function myFunction() {
    myBlock.classList.toggle("dark");
    myBlocka.classList.toggle("dark");
    myBlockb.classList.toggle("dark");
    myBlockd1.classList.toggle("dark1");
    myBlockd2.classList.toggle("dark1");
    myBlockd3.classList.toggle("dark1");
    myBlockd4.classList.toggle("dark1");
    myBlockc1.classList.toggle("dark4");
    myBlock1.classList.toggle("light");
    myBlockt1.classList.toggle("dark3");
    myBlockt2.classList.toggle("dark3");
    myBlockt3.classList.toggle("dark3");
    myBlockt4.classList.toggle("dark3");
    

    
}

const myBtn = document.getElementById('myButton');
myBtn.onclick = myFunction;
