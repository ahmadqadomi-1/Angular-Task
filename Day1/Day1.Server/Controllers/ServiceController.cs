using Day1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServiceController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetAllServices")]
        public IActionResult Service()
        {
            var ser = _db.Services.ToList();
            return Ok(ser);
        }
    }
}
