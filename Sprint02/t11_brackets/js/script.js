
function checkBrackets (text){
    checkData = /[(]|[)]/;
        testText = checkData.test(text);
        if (testText == false) {return ('-1');}
        else 
        {
        let count = 0; //needed brackets
            let process = 0;
            var i;
            for (i=0 ; i < text.length ; i++) {
            if (text.charAt(i)===')' && process <1 ) {count += 1 ;}
            else if (text.charAt(i)==='(') {process +=1 ;}
            else if (text.charAt(i)===')' && process >=1 ) { process-=1 ;}
        }
        count = count + Math.abs(process);
    
        return (count);
        }
    }
    
    console.log(checkBrackets('1)()(())2(()')); // 2 
    console.log(checkBrackets(NaN)); // -1
    console.log(checkBrackets('(0)))1)'));
    console.log(checkBrackets('(0)))8977hjljl)))1)'));
    console.log(checkBrackets('(0)))8977hjljl)))1)'));
    console.log(checkBrackets('(0))l)))1)'));
    console.log(checkBrackets('(0)))8977hjljl)1)'));
    console.log(checkBrackets('sw9090)()()'));
    console.log(checkBrackets("switc"));