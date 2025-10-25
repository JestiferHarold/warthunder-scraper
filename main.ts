import puppeteer from "puppeteer";
import Functions from "./src/functions.js";
import { Country, Vehicle } from "./src/enums.js";

await Functions.connectToWiki(Country.GERMANY);
