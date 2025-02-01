import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <> Hello World!!!!!
      {/* <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div> */}
    </>
  );
}