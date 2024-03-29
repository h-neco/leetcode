import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

export const capturePage = async (user: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2,
  });

  await Deno.mkdir("images", {
    recursive: true,
  });

  await page.goto(`https://leetcode.com/${user}/`, {
    timeout: 30000, // タイムアウトを30秒に設定
    waitUntil: "networkidle0",
  });

  const targets = [
    {
      xpath:
        "//span[contains(., 'submissions in the last year')]/parent::div/parent::div/parent::div",
      name: "streak",
    },
    {
      xpath: "//div[contains(., 'Solved Problems') and not(*)]/parent::div",
      name: "problems",
    },
  ];

  for (const { xpath, name } of targets) {
    const streakElement = await page.waitForXPath(xpath);

    await new Promise((r) => setTimeout(r, 5000));

    // capture light mode
    await page.evaluate((html) => {
      html.classList.remove("dark");
    }, await page.$("html"));
    await streakElement?.screenshot({ path: `images/${name}.png` });

    await new Promise((r) => setTimeout(r, 5000));

    // capture dark mode
    await page.evaluate((html) => {
      html.classList.add("dark");
    }, await page.$("html"));
    await streakElement?.screenshot({ path: `images/${name}_dark.png` });
  }

  await browser.close();
};
