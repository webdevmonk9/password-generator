document.getElementById('generate-button').onclick = function() {
     // generate a random password
     var password = '';
     var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for (var i = 0; i < 8; i++) {
       password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
     }
   
     // display the password
     document.getElementById('password').innerHTML = password;
   };
   