var el = document.getElementById("top");
el.addEventListener('change', function(){
    alert(this.value);
    console.log(this);
}, false);