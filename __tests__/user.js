const request = require("supertest");
const app = require("../src");

const connection = require("../knex/knex");

describe("USER", () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    beforeEach(async () => {});

    afterAll(async () => {
        await connection.destroy();
    });

    it("should be able to CREATE a USER", async () => {
        await request(app)
            .post("/user")
            .send({
                username: "username",
                password: "passoword",
            })
            .expect(201);
    });

    it("should't be able to CREATE a USER", async () => {
        await request(app)
            .post("/user")
            .send({
                username: "username",
                password: "passoword",
            })
            .expect(401);
    });
});
