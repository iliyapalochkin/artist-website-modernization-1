const LatestReleases = () => {
  const releases = [
    {
      id: 1,
      cover:
        "https://cdn.poehali.dev/files/4dddc490-c197-42e9-b143-492d496e2e71.jpg",
      link: "https://music.yandex.ru/album/36234169/track/138216241?utm_source=web&utm_medium=copy_link",
    },
    {
      id: 2,
      cover:
        "https://cdn.poehali.dev/files/c44818ee-a2f5-4e44-b213-379551c63910.jpg",
      link: "https://music.yandex.ru/album/32756782?utm_source=web&utm_medium=copy_link",
    },
    {
      id: 3,
      cover:
        "https://cdn.poehali.dev/files/0fb4c253-9952-4220-823c-6a669422cc5f.jpg",
      link: "https://music.yandex.ru/album/32756782?utm_source=web&utm_medium=copy_link",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
            Последние релизы
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;
