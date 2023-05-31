import { Splide, SplideSlide } from "@splidejs/react-splide";
import images from "../../data/images.json";
import "@splidejs/react-splide/css";

export default function ImageSllider() {
  return (
    <div className="w-[500px] mx-auto">
      <Splide>
        {images.map((image, index) => (
          <SplideSlide key={`image-${index}`}>
            <img src={image} alt="img" className="w-full rounded-lg" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
