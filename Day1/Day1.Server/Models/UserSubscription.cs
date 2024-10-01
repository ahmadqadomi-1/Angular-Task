using System;
using System.Collections.Generic;

namespace Day1.Server.Models;

public partial class UserSubscription
{
    public int Id { get; set; }

    public int? SubscriptionId { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public int? SubServiceId { get; set; }

    public virtual Subscription? Subscription { get; set; }
}
