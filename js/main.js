function getvideo(){
    const link1 = document.getElementById("formGroupExampleInput").value;
    const data = JSON.stringify({
        url: link1
    });

    const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let jscod = JSON.parse(this.responseText)
            let link = jscod[0].urls[0].url;
            window.location.replace(link); 
            document.getElementById("formGroupExampleInput").value = " ";
        }
    });

    xhr.open('POST', 'https://instagram120.p.rapidapi.com/api/instagram/links');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '69e527e202msh77520cfeabae221p1a1739jsn2dea43031f1e');
    xhr.setRequestHeader('X-RapidAPI-Host', 'instagram120.p.rapidapi.com');

    xhr.send(data);
}