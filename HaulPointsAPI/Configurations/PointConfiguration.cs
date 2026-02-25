using HaulPointsAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HaulPointsAPI.Configurations 
{
    public class PointConfiguration : IEntityTypeConfiguration<Point>
    {
        public void Configure(EntityTypeBuilder<Point> builder)
        {
            builder.ToTable("Points");

            builder.HasKey(p => p.UserId);

            builder.Property(p => p.Balance)
                .IsRequired()
                .HasColumnType("INTEGER");
            
            builder.Property(p => p.UpdatedAt)
                .IsRequired()
                .HasDefaultValueSql("datetime('now')")
                .ValueGeneratedOnAdd();
            
            builder.HasOne(p => p.User)
                .WithOne(u => u.Point)
                .HasForeignKey<Point>(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}