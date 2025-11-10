import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function Events() {
  return (
    <section className="events py-5">
      <div className="container">
        <h2 className="fw-bold">Yaptığımız Etkinlikler</h2>
        <div className="row mt-3">
          {events
            .slice()
            .reverse()
            .map((e) => (
              <div className="col-3" key={e.id}>
                <div className="card h-100">
                  <img
                    src={e.images[0]}
                    className="card-img-top object-fit-cover"
                    alt={e.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">{e.title}</h5>
                    <p className="card-text">{e.date}</p>
                    {e.location && (
                      <p className="card-text fw-medium">Konum: {e.location}</p>
                    )}
                    <Link
                      to={`/etkinlik/${e.id}`}
                      className="btn btn-primary mt-auto"
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
