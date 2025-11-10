import img from "../assets/hedef-main.jpg";

export default function About() {
  return (
    <>
      <section className="about py-5">
        <div
          className="container"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <h2 className="section-title text-center mb-4 fw-bold">Biz Kimiz?</h2>

          <img
            src={img}
            className="img-fluid mx-auto d-block mb-4"
            alt="hedef community logo"
          />

          <p className="fw-normal">
            Hedef Doğa Sporları, 2014 yılında kurulmuş ve doğayı, sporu ve
            sosyal dayanışmayı birleştiren bir grup olarak faaliyet
            göstermektedir. Türkiye Bisikletliler Derneği’nin Lüleburgaz şubesi
            olarak, hem bisiklet hem de açık hava etkinliklerinde üyelerine
            güvenli ve keyifli deneyimler sunmaktadır. Grubumuz, yürüyüş,
            trekking, bisiklet, kamp ve diğer doğa sporları etkinlikleri ile
            şehir yaşamının stresinden uzaklaşmayı, doğayla bütünleşmeyi ve
            sağlıklı yaşamı teşvik etmeyi amaçlar.
            <br />
            <br />
            Hedef Doğa Sporları, yalnızca bir spor grubu değil; aynı zamanda
            doğayı koruma bilinci, tarihimize sahip çıkma ve keşfetme tutkusu
            etrafında birleşmiş bir topluluktur. Bizimle katıldığınız her
            etkinlik, bedeninizi ve ruhunuzu besler, doğayla bağınızı
            güçlendirir.
            <br />
            <br />
            Şehir yaşamının stresinden uzaklaşmak, doğayla yeniden bağ kurmak ve
            sağlıklı bir yaşam biçimini benimsemek isteyen herkes için
            kapılarımız açıktır. Amacımız yalnızca spor yapmak değil, aynı
            zamanda doğa bilincini geliştirmek, çevreye duyarlılığı artırmak ve
            yeni dostluklar kurmaktır.
            <br />
            <br />
            Her etkinliğimizde güvenliği, dayanışmayı ve paylaşımı ön planda
            tutarız. Yola birlikte çıkmanın, zirveye birlikte ulaşmanın verdiği
            mutluluk bizim için en büyük motivasyondur. Hedefimiz doğayı
            koruyarak, doğayla birlikte yaşamak. Kısacası hedefimiz doğa.
          </p>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge bg-primary">Bisiklet</span>
            <span className="badge bg-success">Trekking</span>
            <span className="badge bg-warning">Kampçılık</span>
            <span className="badge bg-danger">Tarih & Kültür Turları</span>
            <span className="badge bg-secondary">Macera Sporları</span>
          </div>
        </div>
      </section>
    </>
  );
}
