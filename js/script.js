$(document).ready(function() {
    $('.owl-carousel').owlCarousel();

    $('a[href*=\\#]').click(function(event) {
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top
            },
            500
        );
        event.preventDefault();
    });
});

//Form (AJAX)
function GETreq(url,callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              callback(this.responseText);
        }
      };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function POSTreq(url,body,callback) {
    var objJSON = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText)
        }
      };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(objJSON);
}

/*
//Validate (already donde with requires)
function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    //...
    
}
*/

