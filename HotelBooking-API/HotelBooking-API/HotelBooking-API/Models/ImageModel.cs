using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelBooking_API.Models
{
    public class ImageModel
    {
        [Key]
        public int Id { get; set; }
        public string ImagePath { get; set; }
        [ForeignKey("Room")]
        public int RoomId { get; set; }
        public RoomModel Room { get; set; }
    }
}
