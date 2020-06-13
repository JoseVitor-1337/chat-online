import createChatServer from "../../src/redis/createChatServer";

describe("Public Chat Class: Methods", () => {
  it("Shoul create a PublicChat Instancie", async () => {
    let publicChat = createChatServer("PublicChat");

    for (let property in publicChat) {
      expect(publicChat).toHaveProperty(property);
    }
  });
});
