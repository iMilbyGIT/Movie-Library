
$(function (){

    var $movies = $('#movie-list');
    var $Title = $('#title');
    var $Genre = $('#genre');
    var $Director = $('#director');

    // function addMovie(movie) {
    //     $movies.append('<li>Title: ' + movie.Title +'\n Genre: ' + movie.Genre +'\n Director: ' + movie.Director + '</li>');
    // }
    
    function addMovie(movie) {
        $('#movie-table').append(
            "<tr>" +
            "<td>" + movie.Title + "</td>" +
            "<td>" + movie.Genre + "</td>" +
            "<td>" + movie.Director + "</td>" +
            "</tr>"
        );
    }


    
    // $.ajax({
    //     url: 'https://localhost:44352/api/movie',
    //     dataType: 'json',
    //     type: 'GET',
    //     contentType: 'application/json',
    //     success: function(movies) {
    //         $.each(movies, function(i, movie){
    //             $movies.append('<li>Title: ' + movie.Title +'\n Genre: ' + movie.Genre +'\n Director: ' + movie.Director + '</li>');
    //         });
    //     },
    //     error: function(){
    //         alert('error loading movies');
    //     }
    // });

    // $('#add-movie').on('click', function() {
    //     var movie = {
    //         Title: $Title.val(),
    //         Genre: $Genre.val(),
    //         Director: $Director.val(),
    //     }

    //     $.ajax({
    //         url: 'https://localhost:44352/api/movie',
    //         type: 'POST',
    //         data: movie,
    //         success: function(newMovie) {
    //             $movies.append('<li>Title: ' + newMovie.Title +'\n Genre: ' + newMovie.Genre +'\n Director: ' + newMovie.Director + '</li>');
    //         },
    //         error: function() {
    //             alert('error saving order');
    //         }
    //     })
    // });
})