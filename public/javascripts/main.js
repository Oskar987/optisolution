$(function(){
    
    var _mainform = $('.application-form');
    var _formModal = $('#mainModal');
    
    $('.carousel').carousel({
          interval: 3500
      });
    
    
    _mainform.validate({
        
        submitHandler: function(form) {
            console.log('tam tam')
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    console.log('form submitted');
                }            
            });
            _formModal.modal('hide');
        }
    });
    
    /*$('#send-form').on('click', function(e){
        e.preventDefault();
        _mainform.submit();
        _formModal.modal('hide');
    })*/
    
});
      