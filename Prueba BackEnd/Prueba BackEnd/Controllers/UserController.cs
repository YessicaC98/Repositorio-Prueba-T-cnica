using Microsoft.AspNetCore.Mvc;

namespace Prueba_BackEnd.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string[] Get()
        {
            return new string[]
            {
        "Hello",
        "World"
            };
        }

    }
}

