import puppeteer, { Browser, Page } from "puppeteer";

async function connectToWiki(): Promise<Page> {
    const browser: Browser = await puppeteer.launch(
        {
            headless: true,
            browser: "firefox",
        }
    );

    const page: Page = await browser.newPage();

    await page.goto(
        "https://wiki.warthunder.com/",
        {
            waitUntil: "domcontentloaded"
        }
    );

    return page;
};

export {
    connectToWiki
}