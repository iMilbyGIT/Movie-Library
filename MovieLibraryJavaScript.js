
$(function (){

    var $movies = $('#movie-list');

    $.ajax({
        url: 'https://localhost:44352/api/movie',
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<li>Title: ' + movie.Title +'\n Genre: ' + movie.Genre +'\n Director: ' + movie.Director + '</li>');
            });
        }
    });

})