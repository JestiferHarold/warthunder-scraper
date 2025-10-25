import puppeteer, { Browser, Page } from "puppeteer";
import { Country, Vehicle } from "./enums.js";

async function connectToWiki(country: Country): Promise<{browser: Browser, page: Page}> {
    const browser: Browser = await puppeteer.launch(
        {
            headless: true,
            browser: "firefox",
        }
    );

    const page: Page = await browser.newPage();

    await page.goto(
        "https://wiki.warthunder.com/" + country,
        {
            waitUntil: "domcontentloaded"
        }
    );

    return {
        browser: browser,
        page: page
    };
};

export default {
    connectToWiki
}