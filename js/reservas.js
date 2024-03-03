
$('#btn').click(function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "¿Estas seguro de enviar?",
        text: "Elige una respuesta",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, quiero enviarlo",
        cancelButtonText: "No, atras",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Exito!",
            text: "Tu formulario llego a nuestro correo.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "Esperamos que vuelvas :C",
            icon: "error"
          });
        }
      });
      
    })
    
    var i = 0;
    var txt = 'Contacto';
    var speed = 100;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        
      }
    }
    
    
    
    
    oal.addEventListener('submit', function(event) {
      event.preventDefault();
    
      
      const correo = document.getElementById("email");
      const correoValor = correo.value;
    
      oal.reset();
    });
    