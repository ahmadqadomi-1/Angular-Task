using Day1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class subscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public subscriptionController(MyDbContext db)
        {
            _db = db;

        } 

        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }
    }
}
