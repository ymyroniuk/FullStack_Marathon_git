"use strict"



let myname = prompt('What animal is the superhero most similar to?'); 
let regex1 = /^[a-z, A-Z]\D*$/;
if(regex1.exec(myname) != null && myname.length <= 20){
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    let regex2 =/^female$|^male$|^$/i;
        if(regex2.exec(gender) != null) {
           let age = prompt('How old is the superhero?');
           let z = /^[1-9][0-9]{0,4}$/;
           //let z = /\b/;
            if (z.exec(age) != null && age.length <= 5) {
                if (age < 18 && gender === 'male') {
                    alert('The superhero name is: ' + myname.toLowerCase() + '-' + 'boy!');
               }
                if (age > 18 && gender === 'male') {
                   alert('The superhero name is: ' + myname.toLowerCase() + '-' + 'man');
             }
              if (age < 18 && gender === 'female') {
                    alert('The superhero name is: ' + myname.toLowerCase() + '-' + 'girl');
                }
                if (age > 18 && gender === 'female') {
                    alert('The superhero name is: ' + myname.toLowerCase() + '-' + 'woman');
                }
                if (age < 18 && gender === '') {
                    alert('The superhero names is: ' + myname.toLowerCase() + '-' + 'kid');
                }
                if (age > 18 && gender === '') {
                    alert('The superhero name is: ' + myname.toLowerCase() + '-' + 'hero');
               }
            }else alert('Wrong');
         
        }else alert('Wrong');
     
    }else alert('Wrong'); 
   