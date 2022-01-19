namespace UniSite.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    using UniSite.Data.Common.Models;

    public class Minions : BaseDeletableModel<int>
    {
        public string Name { get; set; }

        public int Age { get; set; }
    }
}
