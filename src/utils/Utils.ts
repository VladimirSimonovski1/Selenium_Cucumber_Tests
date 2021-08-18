export class Utils {
    public static async generateRandomString(): Promise<string> {
        return (Math.random() + 1).toString(36).substring(7);
    }

    public static async generateRandomEmail(): Promise<string> {
        return (Math.random() + 1).toString(36).substring(7) + "@gmail.com";
    }
}
