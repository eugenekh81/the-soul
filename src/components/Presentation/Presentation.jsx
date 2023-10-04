import './Presentation.scss';

export const Presentation = () => {
  return (
    <section className="presentation">
      <div className="container">
        <h2 className="presentation__title">
          Presentation of the Ukrainian Circle Project by the founders of the Centre - Maria Vynnytska and Oleksandra Shymanova
        </h2>

      <div className="presentation__video-container">
        <iframe src="https://www.youtube.com/embed/kEemfcvEBq8?si=v00h1BEAijdpEaTa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
    </section>
  )
}
