using HotelBooking_API.Data;
using HotelBooking_API.Models;
using HotelBooking_API.Models.ResponseModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace HotelBooking_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelBookingsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public HotelBookingsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("GetAllRooms")]
        public IActionResult GetAllRooms() 
        {
            RoomResponseModel response = new RoomResponseModel();
            
            response.Rooms = _db.Rooms.ToList();

            response.RoomImagePaths = _db.Images.ToList();
            
            return Ok(response);
        }

        [HttpGet]
        [Route("GetRoomById/{id}")]
        public IActionResult GetRoomById(int id) 
        {
            if(id == 0)
            {
                return BadRequest();
            }
            
            var room = _db.Rooms.FirstOrDefault(r => r.Id == id);

            var images = _db.Images.Where(im => im.RoomId == id).ToList();

            OneRoomResponse response = new OneRoomResponse();

            response.Room = room;

            response.Images = images;

            return Ok(response);
        }

        [HttpGet]
        [Route("GetAllPromoOffers")]
        public IActionResult GetPromoOffers()
        {
            List<PromoOffer> offers = _db.promoOffers.ToList();
                
            return Ok(offers);
        }

        [HttpPost]
        [Route("CreateBooking")]
        public IActionResult CreateBooking ([FromBody] BookingModel model)
        {
                
            if (ModelState.IsValid)
            {
                _db.Bookings.Add(model);
                _db.SaveChanges();

                return Ok();
            }

            return BadRequest();
            
        }

    }
}
