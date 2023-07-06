namespace HotelBooking_API.Models.ResponseModels
{
    public class OneRoomResponse
    {
        public RoomModel Room { get; set; }
        public List<ImageModel> Images { get; set; }
    }
}
