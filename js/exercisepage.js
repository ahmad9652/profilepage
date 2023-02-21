
    function toggleexercisediv(id1,id2){
        console.log(id1+" "+id2)
        div1 = document.getElementById(id1).style.display;
        div2 = document.getElementById(id2).style.display;
        console.log(div1)
        console.log(div2)
        if (div1=='block' && div2 == 'block') {
            document.getElementById(id1).style.display = 'none';
            document.getElementById(id2).style.display = 'none';
            console.log(div1)
            console.log(div2)
        }
        else{
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).style.display = 'block';
            console.log(div1)
            console.log(div2)

        }
    }
