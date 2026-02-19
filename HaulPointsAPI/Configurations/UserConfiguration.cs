using HaulPointsAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace HaulPointsAPI.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .ToTable("Users");

            builder.HasKey(u => u.Id);

            builder.Property(u => u.Id)
                .ValueGeneratedOnAdd();

            builder.Property(u => u.Username)
                .IsRequired()
                .HasMaxLength(50);

            builder.HasIndex(u => u.Username)
                .IsUnique();

            builder.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(255);

            builder.HasIndex(e => e.Email)
                .IsUnique();

            builder.Property(p => p.PasswordHash)
                .IsRequired();

            builder.Property(r => r.Role)
                .HasConversion<string>()
                .HasDefaultValue(RoleEnum.Driver)
                .IsRequired();

            builder.Property(a => a.Active)
                .HasDefaultValue(false);

            builder.HasOne(p => p.Point)
                .WithOne(u => u.User)
                .HasForeignKey<Point>(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}