let nm = 1
   document.getElementById('btnadd').addEventListener('click',
   function treatmen() {
       let work = document.getElementById('textCoolies').value;
       if(work === '') {
           alert("It's empty. Try to input in 'Text input'!");

       }else {

           let date = new Date(Date.now() ); 
           date = date.toUTCString();
           document.getElementById('inputResult').value += '-->' + work + 'Чинааа' + ' ' + date + "\n";
           localStorage.setItem(nm, work); 
           nm++;
       }})
       document.getElementById('btnclear').addEventListener('click',
    function() {
        let perem = confirm('Are you sure?' );
        if(perem == true) {
            document.getElementById('textCoolies').value = "";
            document.getElementById('inputResult').value = '';
            localStorage.clear();
        }
    })