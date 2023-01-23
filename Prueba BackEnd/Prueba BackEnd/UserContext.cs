using Microsoft.EntityFrameworkCore;

namespace Test;

    internal class UserContext : DbContext
{
        private readonly string connectionString;

        public UserContext(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(connectionString);
        }
    }
