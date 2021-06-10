let nm = 1
   document.getElementById('btnadd').addEventListener('click',
   function treatmen() {
       let work = document.getElementById('textCoolies').value;
       if(work === ' ') {
           alert("It's empty. Try to input in 'Text input'!");

       }else {
           
           document.getElementById('inputResult').value += work + '--> Чинааа' + "\n";
       let date = new Date(Date.now() + 86400e3); 
       date = date.toUTCString();
       document.cookie = `${nm} nm = ${encodeURIComponent(work)}; expires = ${date}`
       nm ++;
   }})
    document.getElementById('btnclear').addEventListener('click',
    function() {
        let perem = confirm('Are you sure?' );
        if(perem == true) {
            document.getElementById('textCoolies').value = "";
            document.getElementById('inputResult').value = '';
            CookiesDelete()
        }
    })
        function CookiesDelete() {
            let cookies = document.cookie.split(';');
            for(i = 0; i < cookies.lenght; i++ ) {
                let a = cookies[i];
                let b = a.indexOf();
                let c = b > -1 ? a.substr(0, b) : a; 
                document.a = c + "=; expires = Thuesday, 01 Jan 1970 00:00:00 GMT;";
                document.a = c + '=; path =/; expires = Tuesday, 01 Jan 1970 00:00:00 GMT;';
            } 
        }
