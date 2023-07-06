using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace HotelBooking_API.Models
{
    public class RoomModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int RoomNumber { get; set; }
        [Required]
        public string RoomName { get; set; }
        [Required]
        public int BedsNumber { get; set; }
        [Required]
        public int NightPrice { get; set; }
        [NotMapped]
        public List<ImageModel> RoomImages { get; set; }
    }
}
