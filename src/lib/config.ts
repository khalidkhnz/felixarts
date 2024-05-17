export class Config {
  public static CLIENT_URL: string =
    process.env.AUTH_TRUST_HOST || "env-not-found";

  public static ENVIRONMENT: string =
    process.env.ENVIRONMENT || "env-not-found";

  public static MONGO_URI: string = process.env.MONGO_URI || "env-not-found";

  public static AUTH_SECRET: string =
    process.env.AUTH_SECRET || "env-not-found";

  public static AUTH_GOOGLE_ID: string =
    process.env.AUTH_GOOGLE_ID || "env-not-found";

  public static AUTH_GOOGLE_SECRET: string =
    process.env.AUTH_GOOGLE_SECRET || "env-not-found";

  public static AUTH_FACEBOOK_ID: string =
    process.env.AUTH_FACEBOOK_ID || "env-not-found";

  public static AUTH_FACEBOOK_SECRET: string =
    process.env.AUTH_FACEBOOK_SECRET || "env-not-found";

  public static AUTH_APPLE_ID: string =
    process.env.AUTH_APPLE_ID || "env-not-found";

  public static AUTH_APPLE_SECRET: string =
    process.env.AUTH_APPLE_SECRET || "env-not-found";
}
