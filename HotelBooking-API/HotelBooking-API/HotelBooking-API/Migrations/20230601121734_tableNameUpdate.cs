using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelBooking_API.Migrations
{
    /// <inheritdoc />
    public partial class tableNameUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomsAndFeatures_RoomFeatures_FeatureId",
                table: "RoomsAndFeatures");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomsAndFeatures_Rooms_RoomId",
                table: "RoomsAndFeatures");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RoomsAndFeatures",
                table: "RoomsAndFeatures");

            migrationBuilder.RenameTable(
                name: "RoomsAndFeatures",
                newName: "RoomFeatureMapping");

            migrationBuilder.RenameIndex(
                name: "IX_RoomsAndFeatures_FeatureId",
                table: "RoomFeatureMapping",
                newName: "IX_RoomFeatureMapping_FeatureId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RoomFeatureMapping",
                table: "RoomFeatureMapping",
                columns: new[] { "RoomId", "FeatureId" });

            migrationBuilder.AddForeignKey(
                name: "FK_RoomFeatureMapping_RoomFeatures_FeatureId",
                table: "RoomFeatureMapping",
                column: "FeatureId",
                principalTable: "RoomFeatures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RoomFeatureMapping_Rooms_RoomId",
                table: "RoomFeatureMapping",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomFeatureMapping_RoomFeatures_FeatureId",
                table: "RoomFeatureMapping");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomFeatureMapping_Rooms_RoomId",
                table: "RoomFeatureMapping");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RoomFeatureMapping",
                table: "RoomFeatureMapping");

            migrationBuilder.RenameTable(
                name: "RoomFeatureMapping",
                newName: "RoomsAndFeatures");

            migrationBuilder.RenameIndex(
                name: "IX_RoomFeatureMapping_FeatureId",
                table: "RoomsAndFeatures",
                newName: "IX_RoomsAndFeatures_FeatureId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RoomsAndFeatures",
                table: "RoomsAndFeatures",
                columns: new[] { "RoomId", "FeatureId" });

            migrationBuilder.AddForeignKey(
                name: "FK_RoomsAndFeatures_RoomFeatures_FeatureId",
                table: "RoomsAndFeatures",
                column: "FeatureId",
                principalTable: "RoomFeatures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RoomsAndFeatures_Rooms_RoomId",
                table: "RoomsAndFeatures",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
