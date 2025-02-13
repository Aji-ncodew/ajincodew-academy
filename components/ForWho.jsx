const ForWhoBlock = require("./ForWhoBlock");

exports.default = function ForWho({ ctx, name }) {
  const i18n = ctx.getFilter("i18n");
  const faq = ctx.getLocale(name + ".profiles");
  return (
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-8 md:py-8">
        <div class="md:gap-4">
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
            <p class="px-2 mb-6 font-bold leading-tight text-2xl md:text-3xl text-right ltr:text-left md:text-center">
              {i18n(name + ".title")}
            </p>
            <div class=" ">
              {Array.isArray(faq) && faq.map((item, index) => (
                <ForWhoBlock
                  title={item.title}
                  goal={item.goal}
                  goals={item.goals}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
