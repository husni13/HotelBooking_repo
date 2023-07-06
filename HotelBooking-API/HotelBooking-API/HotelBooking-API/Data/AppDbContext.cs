using HotelBooking_API.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking_API.Data
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options)
        {

        }

        public DbSet<BookingModel> Bookings { get; set; }
        public DbSet<RoomModel> Rooms { get; set; }
        public DbSet<PromoOffer> promoOffers { get; set; }
        public DbSet<ImageModel> Images { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

           modelBuilder.Entity<ImageModel>()
                .HasOne(im => im.Room)
                .WithMany(rm => rm.RoomImages)
                .HasForeignKey(im => im.RoomId)
                .IsRequired();
        }
    }
}
