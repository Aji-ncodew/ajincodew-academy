const ForWhoBlock = require("./ForWhoBlock");

exports.default = function ForWho({ ctx, name }) {
  if (name == "backend")
    return (
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-8 md:py-8">
          <div class="md:gap-4">
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
              <p class="px-2 mb-6 font-bold leading-tight text-2xl md:text-3xl text-right ltr:text-left md:text-center">
                شكون ايستافد من التدريب
              </p>
              <div class="">
                <ForWhoBlock
                  title={"خريجي المعلوميات"}
                  goal={"الهدف : تطوير مهاراتك"}
                  goals={["إضافة مهارات برمجية قوية إلى سيرتك الذاتية", "الحصول على شهادة معتمدة"]}
                />
                <ForWhoBlock
                  title={"المهنيون في مجالات أخرى"}
                  goal={"تعزيز مسارك المهني وتوسيع آفاقك في سوق العمل."}
                  goals={["اكتساب مهارات البرمجة لتطوير مشاريعك الخاصة أو دعم عملك الحالي.", "لا يتطلب التدريب أي تجربة سابقة في البرمجة.", "إضافة مهارات برمجية قوية إلى سيرتك الذاتية.", "الحصول على شهادة معتمدة تزيد من فرصك المهنية."]}
                />
                <ForWhoBlock
                  title={"روّاد الأعمال وأصحاب المشاريع"}
                  goal={"بناء مشاريع تقنية وفهم كيفية عمل البرمجيات."}
                  goals={["تعلم كيفية تطوير تطبيقات ومواقع إلكترونية تدعم مشروعك.", "لا حاجة لأي خبرة سابقة في البرمجة.", "اكتساب المعرفة اللازمة للتواصل مع المطورين وفهم متطلبات التطبيقات.", "الحصول على شهادة معتمدة تدعم مصداقيتك في المجال التقني."]}
                />
                <ForWhoBlock
                  title={"الطلاب"}
                  goal={"الانتقال من مجالك الحالي إلى عالم البرمجة وتقنية المعلومات."}
                  goals={["تعلم جميع الأساسيات اللازمة لبدء مشوار مطور برمجيات.", "التدريب عملي و يؤهلك لسوق العمل.", "إضافة مهارات تقنية حديثة إلى سيرتك الذاتية.", "الحصول على شهادة معتمدة تعزز فرصك في دخول المجال التقني."]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <>
    </>
  )
};
