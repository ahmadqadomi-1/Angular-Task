using Day1.Server.Models;

namespace Day1.Server.DTOs
{
    public class UserSubscriptionRequest
    {
        public int? SubscriptionId { get; set; }

        public int? SubServiceId { get; set; }
    }
}
