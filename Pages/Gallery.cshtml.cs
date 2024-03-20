using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyWeb.Pages
{
    public class GalleryModel : PageModel
    {
        static string root = "wwwroot/images";
        public List<string> files {get; set;} = default!;
        public void OnGet()
        {
            files = Enumerable.ToList(Directory.EnumerateFiles(root));
        }
    }
}
