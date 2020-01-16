
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
        $(document).on('click', '.editMovie', function(){
            alert("Test Message - The button has been clicked!"); //alert message to test that the edit button is being activated when clicked
            var $tr = $(this).closest('tr');
            $tr.find('input.title').val( $tr.find('td.title') );
            $tr.find('input.genre').val( $tr.find('td.genre') );
            $tr.find('input.director').val( $tr.find('td.director') );
            $tr.find('input.title').addClass('edit');
            $tr.find('input.genre').addClass('edit');
            $tr.find('input.director').addClass('edit');
        });
        $(document).on('click', '.cancelEdit', function(){
            $(this).closest('tr').removeClass('edit');
        });
        $(document).on('click', '.saveMovie', function(){
            var $tr = $(this).cloest('tr');
            var movie = {
                Title: $tr.find('input.name').val(),
                Genre: $tr.find('input.name').val(),
                Director: $tr.find('input.name').val(),
            };

            $.ajax({
                url: 'https://localhost:44352/api/movie' + $tr.attr('data-id'),
                type: 'PUT',
                data: movie,
                success: function(newMovie) {
                    $tr.find('td.title').html(movie.title);
                    $tr.find('td.genre').html(movie.genre);
                    $tr.find('td.director').html(movie.director);
                    $tr.find('td.title').removeClass('edit');
                    $tr.find('td.genre').removeClass('edit');
                    $tr.find('td.director').removeClass('edit');
                },
                error: function() {
                    alert('error updating movie');
                }
            })

        });
});