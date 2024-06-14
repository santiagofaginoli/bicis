"use client";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  id,
  currency,
  name,
  description,
  images,
  price,
}) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  const bici = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bici);
        toast({
          title: `${name} ha sido añadido al carrito`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
