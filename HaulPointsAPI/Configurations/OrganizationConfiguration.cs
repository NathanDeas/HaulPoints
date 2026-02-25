using HaulPointsAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HaulPointsAPI.Configurations
{
    public class OrganizationConfiguration : IEntityTypeConfiguration<Organization>
    {
        public void Configure(EntityTypeBuilder<Organization> builder)
        {
            builder.ToTable("Organizations");

            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id) 
                .ValueGeneratedOnAdd();

            builder.Property(o => o.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder.HasIndex(o => o.Name)
                .IsUnique();
            
            builder.Property(o => o.Description)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(o => o.LogoUrl)
                .HasMaxLength(2000);

            builder.Property(o => o.CreatedAt)
                .HasDefaultValueSql("date('now')")
                .ValueGeneratedOnAdd()
                .IsRequired();
        }
    }
}