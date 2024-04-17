import { newE2EPage } from "@stencil/core/testing";

describe("test", () => {
  it("tests how long an e2e test takes", async () => {
    const page = await newE2EPage();
    await page.setContent("<button></button>");
    const button = await page.find("button");

    await button.click();
  });
});

describe("test again", () => {
  it("tests how long an e2e test takes", async () => {
    const page = await newE2EPage();
    expect(page).not.toBeNull();
  });
});
