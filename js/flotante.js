  //Floating whatsapp by https://github.com/rafaelbotazini
  
   $(function () {
           $('#WAButton').floatingWhatsApp({
               phone: '+5491161965970', //WhatsApp Business phone number
               headerTitle: 'Pide tu turno!', //Popup Title
               popupMessage: 'Hola, en que puedo ayudarte?', //Popup Message
               showPopup: true, //Enables popup display
               buttonImage: '<img src="/imagenes/iconos/whatsapp.svg" />', //Button Image
               //headerColor: 'crimson', //Custom header color
               //backgroundColor: 'crimson', //Custom background button color
               position: "left" //Position: left | right

           });
       });
 