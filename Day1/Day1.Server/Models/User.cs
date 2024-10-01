using System;
using System.Collections.Generic;

namespace Day1.Server.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public string? Email { get; set; }

    public string? UserPassword { get; set; }
}
