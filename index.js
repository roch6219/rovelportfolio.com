function Swap(id1,id2) {
    var y = document.getElementById(id1).innerHTML;
    var z = document.getElementById(id2).innerHTML;
    document.getElementById(id1).innerHTML = z;
    document.getElementById(id2).innerHTML = y;  
    
};