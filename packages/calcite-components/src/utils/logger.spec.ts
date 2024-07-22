import { LogLevel } from "./logger";

describe("logger", () => {
  type LoggerModule = typeof import("./logger");

  let loggerModule: LoggerModule;
  let logger: LoggerModule["logger"];

  let debugSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;
  let infoSpy: jest.SpyInstance;
  let traceSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;

  beforeEach(async () => {
    const noop = () => {
      /* intentional noop */
    };

    debugSpy = jest.spyOn(console, "debug").mockImplementation(noop);
    errorSpy = jest.spyOn(console, "error").mockImplementation(noop);
    infoSpy = jest.spyOn(console, "info").mockImplementation(noop);
    traceSpy = jest.spyOn(console, "trace").mockImplementation(noop);
    warnSpy = jest.spyOn(console, "warn").mockImplementation(noop);

    jest.resetModules();
    loggerModule = await import("./logger");
    logger = loggerModule.logger;
    loggerModule.loggedDeprecations.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete (globalThis as TestGlobal).calciteConfig;
  });

  describe("deprecated", () => {
    it("helps log planned deprecations", () => {
      const options = {
        name: "calcite-foo",
        removalVersion: 3,
      };

      logger.deprecated("component", options);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy.mock.calls[0][2]).toMatch(
        `[${options.name}] component is deprecated and will be removed in v${options.removalVersion}.`,
      );
    });

    it("helps log future deprecations", () => {
      const options = {
        name: "calcite-foo",
        removalVersion: "future" as const,
      };

      logger.deprecated("component", options);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy.mock.calls[0][2]).toMatch(
        `[${options.name}] component is deprecated and will be removed in a future version.`,
      );
    });

    it("shows deprecation suggestions (single)", () => {
      const options = {
        name: "calcite-foo",
        removalVersion: 3,
        suggested: "calcite-bar",
      };

      logger.deprecated("component", options);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy.mock.calls[0][2]).toMatch(
        `[${options.name}] component is deprecated and will be removed in v${options.removalVersion}. Use "${options.suggested}" instead.`,
      );
    });

    it("shows deprecation suggestions (multiple)", () => {
      const options = {
        name: "calcite-foo",
        removalVersion: 3,
        suggested: ["calcite-bar", "calcite-baz"],
      };

      logger.deprecated("component", options);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy.mock.calls[0][2]).toMatch(
        `[${options.name}] component is deprecated and will be removed in v${options.removalVersion}. Use "${options.suggested.join(`" or "`)}" instead.`,
      );
    });

    it("logs once per component", () => {
      const options = {
        name: "calcite-foo",
        removalVersion: 3,
      };

      logger.deprecated("component", options);
      logger.deprecated("component", options);

      expect(warnSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("logLevel", () => {
    function messageAllLevels(): void {
      const levels = ["debug", "info", "warn", "error", "trace"] as const;

      levels.forEach((level) => logger[level]("message"));
    }

    async function setLogLevel(level: LogLevel): Promise<void> {
      jest.resetModules();

      (globalThis as TestGlobal).calciteConfig = {
        logLevel: level,
      };

      loggerModule = await import("./logger");
      logger = loggerModule.logger;
    }

    it("logs all messages when set to lowest level", async () => {
      await setLogLevel("trace");

      messageAllLevels();

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy).toHaveBeenCalledTimes(1);
      expect(traceSpy).toHaveBeenCalledTimes(1);
    });

    it("logs only error messages when set to highest level", async () => {
      await setLogLevel("error");

      messageAllLevels();

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledTimes(0);
      expect(warnSpy).toHaveBeenCalledTimes(0);
      expect(debugSpy).toHaveBeenCalledTimes(0);
      expect(traceSpy).toHaveBeenCalledTimes(0);
    });

    it("logs info messages and above when set to default level", async () => {
      await setLogLevel("info");

      messageAllLevels();

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy).toHaveBeenCalledTimes(0);
      expect(traceSpy).toHaveBeenCalledTimes(0);
    });

    it("logs no messages when set to `off`", async () => {
      await setLogLevel("off");

      messageAllLevels();

      expect(debugSpy).toHaveBeenCalledTimes(0);
      expect(errorSpy).toHaveBeenCalledTimes(0);
      expect(infoSpy).toHaveBeenCalledTimes(0);
      expect(traceSpy).toHaveBeenCalledTimes(0);
      expect(warnSpy).toHaveBeenCalledTimes(0);
    });
  });
});
