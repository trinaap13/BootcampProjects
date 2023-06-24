process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("./app");
let cats = require("./fakeDb");

let skittles = { name: "skittles", price: 1.00 };

beforeEach(function() {
  items.push(skittles);
});

afterEach(function() {
  items.length = 0;
});

describe("GET /items", function() {
  test("Gets all items", async function() {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({items: [skittles]});
  });
});

describe("GET /items/:name", function() {
  test("Gets a single item", async function() {
    const resp = await request(app).get(`/cats/${skittles.name}`);
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({item: skittles});
  });

  test("Responds with 404 if can't find item", async function() {
    const resp = await request(app).get(`/items/0`);
    expect(resp.statusCode).toBe(404);
  });
});

describe("POST /items", function() {
  test("Creates a new item", async function() {
    const resp = await request(app)
      .post(`/items`)
      .send({
        name: "Lays"
        price: 2.99
      });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      item: { name: "Lays", price: 2.99 }
    });
  });
});

describe("DELETE /items/:name", function() {
  test("Deletes an item", async function() {
    const resp = await request(app).delete(`/items/${skittles.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Deleted" });
  });
});