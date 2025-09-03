"use client";

interface IndicatorProps {
  count: number;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
}

const CarouselIndicators: React.FC<IndicatorProps> = ({
  count,
  activeIndex,
  onIndicatorClick,
}) => {
  const MAX_INDICATORS = 5;

  const renderIndicators = () => {
    if (count <= MAX_INDICATORS) {
      // Se houver 5 ou menos itens, mostra todos.
      return Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          aria-label={`Ir para o item ${i + 1}`}
          onClick={() => onIndicatorClick(i)}
          className={`h-2 rounded-full transition-all duration-300 ease-out ${
            activeIndex === i ? "w-6 bg-brand-primary" : "w-2 bg-gray-300"
          }`}
        />
      ));
    } else {
      // Lógica para mais de 5 itens (efeito de rotação)
      // Calcula o ponto inicial para manter o indicador ativo no centro
      let start = Math.max(0, activeIndex - Math.floor(MAX_INDICATORS / 2));
      let end = start + MAX_INDICATORS;

      // Ajusta o final se passar do limite
      if (end > count) {
        end = count;
        start = end - MAX_INDICATORS;
      }

      const indicators = [];
      for (let i = start; i < end; i++) {
        indicators.push(
          <button
            key={i}
            aria-label={`Ir para o item ${i + 1}`}
            onClick={() => onIndicatorClick(i)}
            className={`h-2 rounded-full transition-all duration-300 ease-out ${
              activeIndex === i ? "w-6 bg-brand-primary" : "w-2 bg-gray-300"
            }`}
          />
        );
      }
      return indicators;
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {renderIndicators()}
    </div>
  );
};

export default CarouselIndicators;
