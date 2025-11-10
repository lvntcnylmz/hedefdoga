import img from "../assets/lubifest.jpg";

export default function Home() {
  return (
    <div>
      <section className="hero bg-light text-center">
        <img src={img} className="img-fluid" alt="Etkinlik" />
        <div className="container">
          <div className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 px-3 py-2 rounded">
            <h1 className="fw-bold">Hedef Doğa Sporları'na Hoşgeldiniz</h1>
            <p className="fw-semibold">
              Doğayla iç içe, keşif dolu ve sağlıklı maceralar için buradayız.
              <br /> Her pedal çeviriş yeni bir yolculuktur.
            </p>
          </div>
        </div>
      </section>

      <section className="projects py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-4 fw-bold">
            Değerlerimiz
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-bicycle"></i> Bisiklet Tutkusu
                </h3>
                <p>
                  Her pedal çevirişimizde tutkuyu, özgürlüğü ve keşfetmenin
                  heyecanını hissediyoruz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-leaf-fill"></i> Doğa Sevgisi
                </h3>
                <p>
                  Doğayı korumayı, onunla uyum içinde yaşamayı ve her yolculukta
                  doğanın değerini hatırlatmayı hedefliyoruz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-people-fill"></i> Dayanışma
                </h3>
                <p>
                  Birlikte pedallıyor, zorlukları birlikte aşıyor ve her üyemizi
                  bu ailenin bir parçası olarak görüyoruz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-recycle"></i> Sürdürülebilirlik
                </h3>
                <p>
                  Bisikleti çevre dostu bir ulaşım biçimi olarak benimseyerek
                  sürdürülebilir bir gelecek için hareket ediyoruz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-heart-pulse-fill"></i> Sağlık ve Güvenlik
                </h3>
                <p>
                  Her etkinlikte sağlığı, güvenliği ve bilinçli sürüşü ön planda
                  tutuyoruz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-3">
                <h3>
                  <i className="bi bi-shield-fill-check"></i> Saygı ve
                  Sorumluluk
                </h3>
                <p>
                  Doğaya, topluma ve birbirimize karşı duyarlı ve sorumlu bir
                  kulüp anlayışı benimsiyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
