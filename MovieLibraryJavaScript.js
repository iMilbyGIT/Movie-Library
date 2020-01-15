
$(function (){

    var $movies = $('#movie-list');
    var $Title = $('#title');
    var $Genre = $('#genre');
    var $Director = $('#director');

    var movieTemplate = $('#movie-template').html();
    
    function addMovie(movie) {
        $('#movie-table').append(Mustache.render(movieTemplate, movie));
    }



    $.ajax({
        url: 'https://localhost:44352/api/movie',
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        success: function(movies) {
            $.each(movies, function(i, movie){
                addMovie(movie);
            });
        },
        error: function(){
            alert('error loading movies');
        }
    });

    $('#add-movie').on('click', function() {
        var movie = {
            Title: $Title.val(),
            Genre: $Genre.val(),
            Director: $Director.val(),
        }

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            type: 'POST',
            data: movie,
            success: function(newMovie) {
                addMovie(newMovie)
            },
            error: function() {
                alert('error saving order');
            }
        })
    });
})