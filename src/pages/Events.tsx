import { Link } from "react-router-dom";
import { events } from "../data/events";
import pdf_document from "../../src/assets/risk_kabul_beyani.pdf";

export default function Events() {
  return (
    <section className="events py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold mb-0">Yaptığımız Etkinlikler</h2>
          <a
            href={pdf_document}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ background: "#2E72AE" }}
          >
            Risk Kabul Beyanı Önizle / İndir
          </a>
        </div>
        <div className="row g-3 mt-3">
          {events
            .slice()
            .reverse()
            .map((e) => (
              <div className="col-md-4" key={e.id}>
                <div className="card h-100">
                  <img
                    src={e.images[0]}
                    className="card-img-top object-fit-cover"
                    alt={e.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold text-truncate">
                      {e.title}
                    </h5>
                    <p className="card-text">{e.date}</p>
                    <p className="card-text">
                      <strong>Konum:</strong> {e.location}
                    </p>
                    <Link
                      to={`/etkinlik/${e.id}`}
                      className="btn btn-primary fw-medium"
                      style={{ background: "#2E72AE" }}
                    >
                      Detaylar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
