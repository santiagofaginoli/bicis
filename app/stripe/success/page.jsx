import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="text-center mb-4">El pago ha sido procesado con exito!! Gracias</h3>
        <Link href='/'>
        <button className="btn btn-primary mx-auto">Volver al home</button></Link>
      </div>
    </section>
  );
};

export default SuccessPage;
