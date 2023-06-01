import "@testing-library/jest-dom";
import { getFormattedDate } from "../utils/helpers";

describe("Test GetFormattedDate formats date correctly", () => {
  test("Verify correct output", () => {
    const apiData = "2020-10-10";
    const eventDate = getFormattedDate(apiData);
    expect(eventDate).toBe("October 10th");
  });

  test("Check invalid date error", () => {
    const apiData = "abc";
    const eventDate = getFormattedDate(apiData);
    expect(eventDate).toBe("Invalid Date NaNth");
  });
});
