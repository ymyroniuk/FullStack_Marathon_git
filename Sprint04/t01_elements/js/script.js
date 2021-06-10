let a = document.querySelectorAll("li");

for(i = 0; i < a.length; i++ ) {
    let claass = a[i].getAttribute("class");
      if(!claass || (claass != 'good' && claass != 'evil' && claass != 'unknown')) {
          a[i].setAttribute("class", "unknown"); }
          a[i].append(document.createElement('br'));
    let dataElement = a[i].getAttribute('data-element');
      if(!dataElement){
          a[i].setAttribute('data-element', 'none');}
          dataElement = a[i].getAttribute('data-element').split(" ");

        for(k = 0; k < dataElement.length; k++) {
            let b = document.createElement('div');
            b.className = `elem ${dataElement[k]}`
            a[i].append(b);
              if(dataElement[k] == "none") {
                  let c = document.createElement('div');
                  c.className = `line`
                  b.append(c)

              }
        }
    }