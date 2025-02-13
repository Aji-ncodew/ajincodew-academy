const TrainingBlock = require("./TrainingBlock");

exports.default = function TrainingContent({ ctx, name }) {
  const i18n = ctx.getFilter("i18n");
  const faq = ctx.getLocale(name + ".modules");
  return (
    <section id="content" className="relative max-w-6xl md:mx-auto md:justify-center
    px-6 sm:px-12 py-4 md:py-10 ">

    <div className="relative md:gap-6
    max-w-3xl md:max-w-none md:w-full 
    mx-auto md:col-span-7 lg:col-span-6">
        
              {/* title */}
                <p className="px-2 pb-5 font-bold text-2xl md:text-3xl text-right ltr:text-left">
                    {i18n(name + ".title")}
                </p>
              {/* Tabs buttons */}
              <div className=" border-b border-gray-300 ">
                {Array.isArray(faq) && faq.map((item, index) => (
                        <TrainingBlock
                        title={item.title}
                        items={item.items}
                        />
                    ))}
                
              </div>
            </div>
    </section >
  );
};
