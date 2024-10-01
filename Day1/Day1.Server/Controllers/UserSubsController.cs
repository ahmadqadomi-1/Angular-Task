using Day1.Server.DTOs;
using Day1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubsController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserSubsController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult addUserSubs([FromBody] UserSubscriptionRequest request)
        {
            var subscription = _db.Subscriptions.Where(x=> x.SubscriptionId == request.SubscriptionId).FirstOrDefault();
            var amount = subscription.SubscriptionAmount;
            var startDate = DateOnly.FromDateTime(DateTime.Now);
            var endDate = DateOnly.FromDateTime(DateTime.Now);
            //DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);
            switch (amount)
            {
                case "7":
                    endDate = startDate.AddDays(7); break;
                case "90":
                    endDate = startDate.AddMonths(3); break;
                case "365":
                    endDate = startDate.AddYears(1); break;
            }
            var UserSubscription = new UserSubscription
            {
                SubscriptionId = request.SubscriptionId,
                SubServiceId = request.SubscriptionId,
                StartDate = startDate,
                EndDate = endDate,
            };
            _db.UserSubscriptions.Add(UserSubscription);
            _db.SaveChanges();
            return Ok();
        }
        [HttpGet]
        public IActionResult get()
        {
            var x = _db.UserSubscriptions.ToList();
            return Ok(x);
        }
    }
}
