const annotations = () => {
    const http = new XMLHttpRequest()

    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            let response = JSON.parse(this.responseText)
            console.log(response);

        };
        
    }
    

    http.open("GET", "./test/pigs.json");
    http.send();
};


annotations()

