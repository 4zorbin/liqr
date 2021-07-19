
let codeEl = document.getElementById('text');
let scanner = new Instascan.Scanner(
    { video: document.getElementById('preview')});

           Instascan.Camera.getCameras().then(function(cameras){
               if(cameras.length > 0 ){
                   scanner.start(cameras[0]);
               } else{
                   alert('No cameras found');
               }

           }).catch(function(e) {
               console.error(e);
           });

           scanner.addListener('scan',function(c){
            let codeEl = document.getElementById('text').value=c;
            console.log(codeEl);

           });


        function saveEl() {
            let testusEl = document.getElementById("testus");

            // console.log(codeEl);
                // console.log('checkClick');

            }
        function addEl() {
                console.log('addClick');
            }
        function dellEl() {
                console.log('dellClick');
            }
            function myFunction() {
                document.getElementById("myForm").submit();
              }
