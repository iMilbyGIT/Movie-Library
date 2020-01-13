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
            foreach (var movie in db.Movies)
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

        // POST api/values
        public IHttpActionResult Post([FromBody]Movie movie) // Create movie in db logic
        {  
            //if (ModelState.IsValid)
            //{
            //    db.Movies.Add(movie);
            //    db.SaveChanges();
                
            //}
            return Ok();
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]string value) // Update movie in db logic
        {


            return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id) // Delete movie from db logic
        {
            {
                if (id <= 0)
                    return BadRequest("Not a valid movie id");

                using (var moviedel = new ApplicationDbContext())
                {
                    var movie = moviedel.Movies
                        .Where(s => s.MovieId == id)
                        .FirstOrDefault();

                    moviedel.Entry(movie).State = System.Data.Entity.EntityState.Deleted;
                    moviedel.SaveChanges();
                }

                return Ok();
            }
            //Movie movie = db.Movies.Find(id);
            //db.Movies.Remove(movie);
            //db.SaveChanges();
            //return Ok();
        }
    }

}