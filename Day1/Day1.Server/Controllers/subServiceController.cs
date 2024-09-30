using Day1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.ConstrainedExecution;

namespace Day1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class subServiceController : ControllerBase
    {
        private readonly MyDbContext _db;
        public subServiceController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetSubServicesById/{id}")]
        public IActionResult Service(int id)
        {
            var ser = _db.SubServices.Find(id);
            return Ok(ser); 
        }

        [HttpGet("GetsubServiceForOneService/{id}")]
        public IActionResult Pr(int id)
        {
            var Ta = _db.SubServices.Where(a => a.ServiceId == id).ToList();
            return Ok(Ta);
        }

    }
}
