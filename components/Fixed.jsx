exports.default = function ({ ctx }) {
    const { Image } = ctx
  const i18n = ctx.getFilter("i18n");
  return (
    <section className="md:hidden" x-data>
      {/* Buttom Bar */}
      <div
        className="fixed bottom-0 mx-auto px-2 sm:px-6
    bg-white h-16 flex flex-row justify-around items-center pb-3 pt-2
    border-t w-full z-40
    "
      >
        <div className="max-w-xl flex flex-row w-full">
          <a
            // onClick={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            //   setModalOpen(true);
            // }}
            aria-controls="modal"
            className="btn
                        ml-2 mr-4 p-2.5 bg-green-primary flex-initial
                        text-white text-center w-full h-10
                        flex justify-around items-center
                        "
            type="submit"
            href="#register"
            x-cta={ctx.training ? JSON.stringify({
              training: ctx.training,
            }): ""}
          >
            {i18n("CTA.register")}
          </a>
        </div>
      </div>
      {/* Whatsapp BTN */}
      <a
        href="https://api.whatsapp.com/send?phone=212612527672"
        target="_blank"
        onClick={() => fbq("track", "Contact")}
        className="whatsapp-button z-40"
        style={{
          position: "fixed",
          right: "15px",
          bottom: "70px",
        }}
      >
        <Image
          src="src/assets/images/whatsapp-button.png"
          alt="Whatsapp"
          formats={["png"]}
          widths={["60"]}
          sizes="100vw"
        />
      </a>
    </section>
  );
};
