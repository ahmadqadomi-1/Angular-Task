using Day1.Server.DTOs;
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

        [HttpPost("AddNewService")]
        public IActionResult AddNew([FromForm] ServiceDTOs servicerequest)
        {
            var Folder = Path.Combine(Directory.GetCurrentDirectory(), "UplodsImages");
            if (!Directory.Exists(Folder))
            {
                Directory.CreateDirectory(Folder);
            }
            var fileImage = Path.Combine(Folder, servicerequest.ServiceImage.FileName);
            using (var stream = new FileStream(fileImage, FileMode.Create))
            {
                servicerequest.ServiceImage.CopyToAsync(stream);
            }
            var NewService = new Service
            {
                ServiceName = servicerequest.ServiceName,
                ServiceDescription = servicerequest.ServiceDescription,
                ServiceImage = servicerequest.ServiceImage.FileName
            };

            _db.Services.Add(NewService);
            _db.SaveChanges();
            return Ok(NewService);
        }

        [HttpGet("GetImage/{imageName}")]
        public IActionResult ImageGet(string imageName)
        {
            var PathImage = Path.Combine(Directory.GetCurrentDirectory(), "UplodsImages", imageName);
            if(System.IO.File.Exists(PathImage))
            {
                return PhysicalFile(PathImage, "image/*");
            }
            return NotFound();
        }
    }
}
