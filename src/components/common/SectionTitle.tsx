import React from 'react';
import clsx from 'clsx';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={clsx(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-dark-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div 
        className={clsx(
          'h-1 w-20 bg-primary-600 mt-4',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
};

export default SectionTitle;