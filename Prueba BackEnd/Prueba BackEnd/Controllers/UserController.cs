using Microsoft.AspNetCore.Mvc;
using Test;

namespace Prueba_BackEnd.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public Users Get(string usuario)
        {   
           Users users = new Users();
            users.Usuario = usuario;
           
           return DataConfig.Singleton.userContext.Users.Single<Users>((queryusuario => queryusuario.Usuario == usuario));

        }

        public void Add(string usuario, string contraseña)
        {
            Users users = new Users();
            users.Usuario = usuario;
            users.Contraseña = contraseña;
            DataConfig.Singleton.userContext.Users.Add(users);
        }

    }
}

