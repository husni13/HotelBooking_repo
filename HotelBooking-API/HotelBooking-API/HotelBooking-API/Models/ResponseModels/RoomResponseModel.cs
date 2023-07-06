namespace HotelBooking_API.Models.ResponseModels
{
    public class RoomResponseModel
    {
        public List<RoomModel> Rooms { get; set; }
        public List<ImageModel> RoomImagePaths { get; set; }
    }
}
