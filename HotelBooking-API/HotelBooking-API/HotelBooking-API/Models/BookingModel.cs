
using System.ComponentModel.DataAnnotations;

namespace HotelBooking_API.Models
{
    public class BookingModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string GuestName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int RoomId { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int BookingPrice { get; set; }
    }
}
