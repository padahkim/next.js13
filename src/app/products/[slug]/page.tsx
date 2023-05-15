import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return (
    <>
      <h1>{params.slug}page!!</h1>
    </>
  );
};
export default PantsPage;

export const generateStaticParams = () => {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
};
