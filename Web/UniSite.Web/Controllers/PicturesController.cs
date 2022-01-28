namespace UniSite.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class PicturesController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}
