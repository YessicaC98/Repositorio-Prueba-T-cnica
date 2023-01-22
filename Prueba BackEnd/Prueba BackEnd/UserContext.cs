using Microsoft.EntityFrameworkCore;

namespace Users;

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
