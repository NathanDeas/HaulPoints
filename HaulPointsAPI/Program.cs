using HaulPointsAPI.Data;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();

/// Add OpenAPI/Swagger services
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();


// Add controllers
builder.Services.AddControllers();

// Register UserService for dependency injection
builder.Services.AddScoped<UserService>();


// Configure CORS to allow requests from React app
builder.Services.AddCors(options =>
{
    
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            // Update the origins to match your React app's URL and port
            policy.WithOrigins("http://localhost:5173", "http://localhost:3000") 
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
// Configure JWT Authentication
// Add Authentication services
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
});


// Configure DbContext with SQLite
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
                       ?? "Data Source=haulpoints.db";

// Register the DbContext with the service container
builder.Services.AddDbContext<HaulPointsDbContext>(options =>
    options.UseSqlite(connectionString));

// Register PasswordHasher for User model
builder.Services.AddScoped<IPasswordHasher<HaulPointsAPI.Models.User>, PasswordHasher<HaulPointsAPI.Models.User>>();

// Build the app
var app = builder.Build();


// use OpenAPI/Swagger only in Development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// Use CORS
app.UseCors("AllowReactApp");
// app.UseHttpsRedirection();


// Use Authentication and Authorization
app.UseAuthentication();
app.UseAuthorization();

// Map controllers
app.MapControllers();
// Run the application
app.Run();

