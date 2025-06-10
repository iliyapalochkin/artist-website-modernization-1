import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DonateButton = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto bg-black/30 border-white/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={32} className="text-white" />
            </div>
            <CardTitle className="text-3xl font-bold font-montserrat text-white">
              Поддержи творчество
            </CardTitle>
            <CardDescription className="text-xl text-gray-300">
              Твоя поддержка помогает создавать новую музыку
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {["100₽", "500₽", "1000₽"].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {amount}
                </Button>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4"
            >
              <Icon name="Zap" size={20} />
              Поддержать через Яндекс.Музыку
            </Button>

            <div className="flex justify-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                Безопасно
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Мгновенно
              </div>
              <div className="flex items-center">
                <Icon name="Heart" size={16} className="mr-2" />С любовью
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DonateButton;
