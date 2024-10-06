using Microsoft.AspNetCore.Http;

namespace Day1.Server.DTOs
{
    public class ServiceDTOs
    {
        public string? ServiceName { get; set; } 

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}
