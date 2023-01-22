using System.ComponentModel.DataAnnotations;

namespace Test
{
    public class Users
    {
        [Key] 
        public int IdUsuario { get; set; }
      public string Usuario { get; set; }  
      public string Contraseña { get; set; }





    }
}