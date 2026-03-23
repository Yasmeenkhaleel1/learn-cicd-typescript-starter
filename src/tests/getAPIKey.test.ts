import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("should return null if no authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return null if wrong auth type", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer token123"
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return api key if valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-api-key-123"
    };
    expect(getAPIKey(headers)).toBe("my-api-key-123");
  });
});
