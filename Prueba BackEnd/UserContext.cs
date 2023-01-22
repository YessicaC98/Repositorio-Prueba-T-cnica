using Microsoft.EntityFrameworkCore;
using System;


internal class UserContext : DbContext
{
    private readonly string connectionString; 

    public UserContext(string connectionString)
    {
        this.connectionString = connectionString;   
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL(connectionString);
    }




}
