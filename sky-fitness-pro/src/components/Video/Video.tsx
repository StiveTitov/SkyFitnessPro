export default  function VideoComponent() {
    // const src = await getVideoSrc()
   
    return (
        <iframe className="rounded-[12px]" width="100%" height="100%" src="https://www.youtube.com/embed/GMID4_t3EXU?si=6e390RD61p9xCssl" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            // <iframe src={src} frameBorder="0" allowfullscreen />
    )

  }