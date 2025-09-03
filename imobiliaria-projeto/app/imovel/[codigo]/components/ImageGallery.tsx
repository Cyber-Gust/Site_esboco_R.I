import Image from "next/image";
import { Corretor, Imovel } from "../../../../lib/types";

interface GalleryProps {
  property: Imovel;
}

// Por enquanto, usaremos a mesma imagem principal.
// No futuro, você pode adicionar um campo de galeria de imagens no Supabase.
const ImageGallery: React.FC<GalleryProps> = ({ property }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <div className="col-span-4 md:col-span-2 row-span-2 h-full">
        <Image
          src={property.imagem_url}
          alt={`Imagem principal de ${property.nome || property.codigo}`}
          width={1000}
          height={1000}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="hidden md:block h-full">
        <Image
          src={property.imagem_url.replace("?w=800", "?w=400&h=400&fit=crop")}
          alt="Imagem secundária 1"
          width={400}
          height={400}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="hidden md:block h-full">
        <Image
          src={property.imagem_url.replace("?w=800", "?w=400&h=400&fit=crop&blur=10")}
          alt="Imagem secundária 2"
          width={400}
          height={400}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="hidden md:block h-full">
        <Image
          src={property.imagem_url.replace("?w=800", "?w=400&h=400&fit=crop&grayscale")}
          alt="Imagem secundária 3"
          width={400}
          height={400}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="hidden md:block h-full">
        <Image
          src={property.imagem_url.replace("?w=800", "?w=400&h=400&fit=crop&auto=format")}
          alt="Imagem secundária 4"
          width={400}
          height={400}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
