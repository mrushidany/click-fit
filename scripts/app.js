$(document).ready(function() {
    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        dataType: 'json',
        success: function (response) {
            console.log('What is the response from the API ? ', response)
        }
    })
})