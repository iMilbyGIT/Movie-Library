using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET api/values
        public IHttpActionResult Get() // Retrieve all movies from db logic
        {
            List<Movie> movies = new List<Movie>();
            foreach(var movie in db.Movies)
            {
                movies.Add(movie);
            }

            return Ok(movies);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id) // Retrieve movie by id from db logic
        {
            var movie = db.Movies.Find(id);

            return Ok(movie);
        }

        public void Post([FromBody]Movie movie) // Create movie in db logic
        {
                db.Movies.Add(movie);
                db.SaveChanges();

        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]Movie movie) // Update movie in db logic
        {
            Movie updatedMovie = db.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            updatedMovie.Title = movie.Title;
            updatedMovie.Genre = movie.Genre;
            updatedMovie.Director = movie.Director;
            db.SaveChanges();
            return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id) // Delete movie from db logic
        {
            try
            {
                var movie = db.Movies.Where(m => m.MovieId == id).FirstOrDefault();
                db.Movies.Remove(movie);
                db.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest("Not a valid id");
            }
        }
    }

}