import img from "../assets/under_construct.png";

export default function ErrorPage() {
  return (
    <section className="error py-5">
      <div className="container">
        <h2 className="fw-bold text-center">
          Üzgünüz, sizi biraz bekleteceğiz. <br />
          Bu sayfa henüz yapım aşamasında.
        </h2>
        <img
          src={img}
          className="img-fluid mx-auto d-block mb-4"
          alt="error-img"
        />
      </div>
    </section>
  );
}
