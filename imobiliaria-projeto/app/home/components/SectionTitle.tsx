import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

// Componente reutilizável para os títulos das seções, mantendo a consistência visual.
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{title}</h2>
      <p className="text-md text-brand-secondary mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
