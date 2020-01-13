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
        public IEnumerable<string> Get() // Retrieve all movies from db logic
        {

            return new string[] { "movie1 string", "movie2 string" };
        }

        // GET api/values/5
        public string Get(int id) // Retrieve movie by id from db logic
        { 
            Movie movie = db.Movies.Find(id);
           
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Movie movie) // Create movie in db logic
        {  
            if (ModelState.IsValid)
            {
                db.Movies.Add(movie);
                db.SaveChanges();
                Ok();
            }
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value) // Update movie in db logic
        {



        }

        // DELETE api/values/5
        public void Delete(int id) // Delete movie from db logic
        {
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            db.SaveChanges();           
        }
    }

}