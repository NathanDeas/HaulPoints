using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HaulPointsAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Organizations_OrganizationOrgId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "OrgId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "OrganizationOrgId",
                table: "Users",
                newName: "OrganizationId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_OrganizationOrgId",
                table: "Users",
                newName: "IX_Users_OrganizationId");

            migrationBuilder.RenameColumn(
                name: "OrgId",
                table: "Organizations",
                newName: "Id");

            migrationBuilder.AlterColumn<int>(
                name: "Role",
                table: "Users",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "Users",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "LogoUrl",
                table: "Organizations",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Organizations_OrganizationId",
                table: "Users",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Organizations_OrganizationId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Active",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LogoUrl",
                table: "Organizations");

            migrationBuilder.RenameColumn(
                name: "OrganizationId",
                table: "Users",
                newName: "OrganizationOrgId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_OrganizationId",
                table: "Users",
                newName: "IX_Users_OrganizationOrgId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Organizations",
                newName: "OrgId");

            migrationBuilder.AlterColumn<string>(
                name: "Role",
                table: "Users",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "OrgId",
                table: "Users",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Organizations_OrganizationOrgId",
                table: "Users",
                column: "OrganizationOrgId",
                principalTable: "Organizations",
                principalColumn: "OrgId");
        }
    }
}
