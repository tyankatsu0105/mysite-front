import sliceText from "@/util/sliceText.js";

const text = "あいうえおかきくけこさしすせそ";

describe("sliceText", () => {
  it("10まで切り取る", () => {
    expect(sliceText(text, 0, 10)).toEqual("あいうえおかきくけこ");
  });
  it("7まで切り取る", () => {
    expect(sliceText(text, 0, 7)).toEqual("あいうえおかき");
  });
});
