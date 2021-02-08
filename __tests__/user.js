const request = require("supertest");
const app = require("../src/app");

const connection = require("../knex/knex");

describe("USER", () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it("should be able to CREATE a USER", async () => {
        await request(app).post("/user").send({
            username: "username",
            password: "passoword",
        });
        expect(200);
    });
});
