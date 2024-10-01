using Day1.Server.DTOs;
using Day1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Regester([FromForm] UserRequest userdto)
        {
            var user = _db.Users.Where(x=>x.Email == userdto.Email).FirstOrDefault();
            if (user != null)
            {
                return BadRequest("Game Over! You already have ACCOUNT");
            }

            var useer = new User
            {
                Email = userdto.Email,
                UserName = userdto.UserName,
                UserPassword= userdto.UserPassword,
            };
            _db.Users.Add(useer);
            _db.SaveChanges();
            return Ok(useer);
        }

        [HttpPost("login")]
        public IActionResult Log([FromForm] UserLogIn user)
        {
            var logg = _db.Users.FirstOrDefault(x=>x.Email == user.Email);
            if (logg == null) {
                return BadRequest("password or email invalid");
            }
            return Ok(logg);
        }
    }
}
