let pwGenBtn = document.getElementById('click')
let pwdView = document.getElementById('pwdview')

pwGenBtn.addEventListener('click',function(){
    pwdView.innerHTML = ''
    let xmlReq = new XMLHttpRequest()
    xmlReq.open('GET', 'https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true&len=8');
    xmlReq.responseType='json'
    xmlReq.onreadystatechange = function() {
        if (xmlReq.readyState === 4 && xmlReq.status === 200) {
        
            let pwdViewer = document.createElement('h1');
           // pwdViewer.setAttribute('h2',xmlReq.response)
            pwdViewer.innerText = xmlReq.response.data;
            pwdView.append(pwdViewer)
        //console.log(xmlReq.response);
        }
    };
    xmlReq.send();
})
