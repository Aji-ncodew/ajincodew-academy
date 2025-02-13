const esbuild = require("esbuild");
const Image = require("@11ty/eleventy-img");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const get = require('lodash/get');

// Global site data
const globalSiteData = {
    baseUrl: "https://www.ajincodew.com",
}

// Function to escape HTML entities
function escapeHtml(unsafe) {
    if (!unsafe) return "";
    if (typeof unsafe !== "string") return unsafe;
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Import Eleventy plugin for handling JSX
const hastJsx = require("eleventy-hast-jsx");

/**
 * Configure and export Eleventy settings.
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {Object}
 */
module.exports = function (eleventyConfig) {
    // Set global data
    eleventyConfig.addGlobalData("locale", "en");

    // Add Eleventy plugin for JSX support
    eleventyConfig.addPlugin(hastJsx.plugin);

    // Define a symbol for rendering JSX components
    const jsxsymbol = hastJsx.renderComponent;

    // Function to convert image to HTML
    function imageToHtml(widths, formats, src, alt, sizes, attributes) {
        let options = {
            widths,
            formats,
            urlPath: "/img/",
            outputDir: "./dist/img",
        };

        Image(src, options);

        let imageAttributes = {
            alt,
            sizes,
            ...attributes,
        };
        let metadata = Image.statsSync(src, options);

        // Generate HTML for the image
        const html = Image.generateHTML(metadata, imageAttributes);
        return html;
    }

    // Function to convert image to a raw HTML element
    const imageSync = function({ src, alt, formats, widths, sizes, attributes = {} }) {
        const html = imageToHtml(widths, formats, src, alt, sizes, attributes);
        return hastJsx.Raw({ html });
    }

    // Add a Nunjucks shortcode for rendering JSX components
    eleventyConfig.addNunjucksAsyncShortcode("jsx", async function (name, props) {
        /** @type {Function} */
        const component = eleventyConfig[jsxsymbol];
        return await component(name, {
            ...props,
            ctx: {
                ...this.ctx,
                getFilter: (name) => eleventyConfig.getFilter(name).bind(this),
                getLocale: (value) => {
                    const page = this.page || this.ctx.page;
                    const translations = this.ctx.translation;
                    const lang = page.lang ?? "en";
                    const translation = get(translations[lang], value, value);
                    if (!translation)
                        console.error(`"${value}" translation not found for lang: ${lang}`);
                    return translation;
                },
                Image: imageSync,
            },
        });
    });

    // Add a Nunjucks paired shortcode for rendering JSX components within content
    eleventyConfig.addPairedNunjucksAsyncShortcode("blk", async function (content, name, props) {
        /** @type {Function} */
        const component = eleventyConfig[jsxsymbol];
        return await component(name, {
            ...props,
            children: { type: "raw", value: content },
            ctx: {
                ...this.ctx,
                getFilter: (name) => eleventyConfig.getFilter(name).bind(this),
                getLocale: (value) => {
                    const page = this.page || this.ctx.page;
                    const translations = this.ctx.translation;
                    const lang = page.lang ?? "en";
                    const translation = get(translations[lang], value, value);
                    if (!translation)
                        console.error(`"${value}" translation not found for lang: ${lang}`);
                    return translation;
                },
                Image: imageSync,
            },
        });
    });

    // Add a Nunjucks shortcode for rendering images
    eleventyConfig.addShortcode(
        "image",
        function (src, alt, formats, widths, sizes, attributes = {}) {
            return imageToHtml(widths, formats, src, alt, sizes, attributes);
        }
    );

    // Add global data for the site
    eleventyConfig.addGlobalData("site", globalSiteData);

    // Copy public files to the output directory
    eleventyConfig.addPassthroughCopy({
        public: "./",
        "node_modules/cleave.js/dist/addons/cleave-phone.ma.js":
            "./js/cleave-phone.ma.js",
    });

    // Build JavaScript files using esbuild after the Eleventy build
    eleventyConfig.on("afterBuild", () => {
        return esbuild.build({
            entryPoints: [
                "./plugins/app.ts",
                "./plugins/swiper.ts",
                "./plugins/mask.js",
            ],
            bundle: true,
            target: ["chrome58", "firefox57", "safari11", "edge18"],
            outdir: "./dist/js",
            minify: process.env.ELEVENTY_ENV === "production",
            sourcemap: process.env.ELEVENTY_ENV !== "production",
        });
    });

    // Add Eleventy I18n plugin configuration
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "strict",
    });

    // Filter to translate values
    eleventyConfig.addFilter("i18n", function (value) {
        const page = this.page || this.ctx.page;
        const lang = page.lang ?? "en";
        const translations = this.ctx.translation;
        const translation = get(translations[lang], value, value);
        if (!translation)
            console.error(`"${value}" translation not found for lang: ${lang}`);
        return translation;
    });

    // Filter to translate values to JSON
    eleventyConfig.addFilter("i18njson", function (value) {
        const page = this.page || this.ctx.page;
        const translations = this.ctx.translation;
        const lang = page.lang ?? "en";
        const translation = get(translations[lang], value, value);
        if (!translation)
            console.error(`"${value}" translation not found for lang: ${lang}`);
        return JSON.stringify(translation);
    });

    // Filter to convert values to JSON
    eleventyConfig.addFilter("json", function (value) {
        return JSON.stringify(value);
    });

    // Filter to extract language from URL
    eleventyConfig.addFilter("lang", function (url) {
        let s = (url || "").split("/");
        return s.length > 0 && s[1];
    });

    // Watch targets for changes
    eleventyConfig.addWatchTarget("./plugins/**/*.{ts,js}");
    eleventyConfig.addWatchTarget("./components/**/*.{tsx,jsx}");

    // Return Eleventy configuration
    return {
        dir: {
            input: "src",
            output: "dist",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};