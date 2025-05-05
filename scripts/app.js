$(document).ready(function() {
    // Mobile nav toggle
    $('#menuToggle').on('click', function() {
        $('#mobileNav').toggleClass('hidden')
    })

    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        dataType: 'json',
        success: function (response) {
            console.log('What is the response from the API ? ', response)
        }
    })
})