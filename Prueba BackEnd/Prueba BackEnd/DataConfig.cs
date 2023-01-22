using Test;

namespace Prueba_BackEnd
{
    public class DataConfig
    { 
       internal UserContext userContext { get; set; }
        public static DataConfig Singleton = new DataConfig();    
       public DataConfig()
        {
            userContext = new UserContext("server=127.0.0.1;uid=root;pwd=NamiLuffy1;database=bdclientes");
            //userContext.Add(new Users { Usuario = "Masiv", Contraseña = "2023" });
            //userContext.SaveChanges();
        }
    }  
}
