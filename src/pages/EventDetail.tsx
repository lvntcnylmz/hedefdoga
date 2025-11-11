import { useParams } from "react-router-dom";
import { events } from "../data/events";
import type { Event } from "../types";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ErrorPage from "./ErrorPage";

export default function EventDetail() {
  const { id } = useParams();
  const event: Event | undefined = events
    .filter((e) => e.id != 0)
    .find((e) => e.id === Number(id));
  const [index, setIndex] = useState<number>(-1);

  if (!event) return <ErrorPage />;

  return (
    <div className="container py-5">
      <h2 className="fw-bold">{event.title}</h2>
      <p className="fw-bold">
        Tarih: <span className="fw-normal">{event.date}</span>
      </p>
      {event.location && (
        <p className="fw-bold">
          Konum: <span className="fw-normal">{event.location}</span>
        </p>
      )}
      <p className="fw-normal" style={{ whiteSpace: "pre-line" }}>
        {event.description}
      </p>
      <div className="row mt-4">
        {event.images.map((img, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div
              className="overflow-hidden rounded shadow-sm"
              style={{ height: "250px" }}
            >
              <img
                src={img}
                alt={event.title}
                className="img-fluid w-100"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setIndex(i)}
              />
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={event.images.map((src) => ({ src }))}
      />
    </div>
  );
}
