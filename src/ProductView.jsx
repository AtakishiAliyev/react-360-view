import ThreeSixty from "react-360-view";

const ProductView = () => {
  return (
    <div>
      <ThreeSixty
        amount={36}
        imagePath="/images/"
        fileName="kreslo.{index}.jpg"
      />
    </div>
  );
};

export default ProductView;
