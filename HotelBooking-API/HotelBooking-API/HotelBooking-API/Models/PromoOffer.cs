using System.ComponentModel.DataAnnotations;

namespace HotelBooking_API.Models
{
    public class PromoOffer
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string OfferTitle { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string ImagePath { get; set; }
        public int AdminId { get; set; }
    }
}
