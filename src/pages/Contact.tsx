export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4 fw-bold text-underline">
          Bize Ulaşın
        </h2>
        <div className="row g-3">
          <div className="col-md-6">
            <h3 className="fw-semibold">İletişim Bilgileri</h3>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-instagram me-2"></i>
                <a
                  href="https://www.instagram.com/hedefdogasporlari/"
                  className="text-decoration-none"
                >
                  hedefdogasporlari
                </a>
              </li>
              <li>
                <i className="bi bi-facebook me-2"></i>
                <a
                  href="https://www.facebook.com/hedefdogasporlari"
                  className="text-decoration-none"
                >
                  hedefdogasporlari
                </a>
              </li>
              <li>
                <i className="bi bi-envelope-heart me-2"></i>
                info@hedefdogasporlari.com
              </li>
            </ul>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.2212230865929!2d27.34897351884452!3d41.39312953761628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4bb916a2cca79%3A0x32cb94985c4f07a2!2zSGVkZWYgRG_En2EgU3BvcmxhcsSx!5e0!3m2!1str!2str!4v1761828283409!5m2!1str!2str"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="fw-semibold">Mesaj Gönderin</h3>
            <form
              action="mailto:info@hedefdogasporlari.com"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="İsim"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="E-posta"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Konu Başlığı
                </label>
                <input
                  type="text"
                  id="subject"
                  name="Konu"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="Mesaj"
                  rows={5}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
