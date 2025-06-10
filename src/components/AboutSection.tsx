import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Донаты секция */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-white">
              Донаты в Яндекс Музыке
            </h2>
            <p className="text-xl text-gray-300">
              Поддерживайте любимых артистов
            </p>
            <p className="text-lg text-gray-400">
              На микроавтобус, чтобы поехать в тур
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full"
            >
              Поддержать
            </Button>
          </div>

          {/* О себе секция */}
          <div className="space-y-8 pt-12 border-t border-gray-700">
            <h3 className="text-3xl lg:text-4xl font-bold font-montserrat text-white">
              ИльяПалочкин
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              <p className="text-xl font-semibold text-white">Кто я?</p>
              <p>Я молодой исполнитель</p>
              <p>
                И в своем блоге делюсь своими мыслями через свою честную музыку
                🫀
              </p>
              <p>Уверен, что Ты можешь стать кем угодно, если постараешься.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
