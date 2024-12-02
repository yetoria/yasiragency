import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px est le breakpoint md de Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardVariants: Variants = {
    collapsed: {
      height: "70px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  if (isMobile) {
    return (
      <div
        className="w-full backdrop-blur-sm bg-white/5 border border-white/10 
                   my-4 cursor-pointer select-none rounded-xl 
                   hover:bg-white/10 transition-colors duration-300"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between p-5">
          <h2 className="text-base font-medium text-stone-100 text-center flex-1">
            {title}
          </h2>
          <div
            className={`text-purple-400 ml-4 flex-shrink-0 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={20} />
          </div>
        </div>
        <div
          className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          <p className="text-sm text-stone-400 leading-relaxed">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full backdrop-blur-sm bg-white/5 border border-white/10 
                 my-4 cursor-pointer select-none overflow-hidden rounded-xl 
                 hover:bg-white/10 transition-colors duration-300"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-5">
        <h2 className="text-base font-medium text-stone-100  flex-1">
          {title}
        </h2>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-purple-400 ml-4 flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      <motion.div
        className="px-5 pb-5"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <p className="text-sm text-stone-400 leading-relaxed">{content}</p>
      </motion.div>
    </motion.div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: "Pourquoi investir dans un site web professionnel ?",
    content:
      "Un site web bien conçu est la vitrine de votre entreprise et un outil essentiel pour attirer de nouveaux clients, renforcer votre crédibilité, et augmenter vos conversions.",
  },
  {
    title: "Quels types de services offrez-vous ?",
    content:
      "Nous proposons la création de sites vitrines, e-commerce, optimisation SEO, développement sur mesure, et bien plus pour répondre à vos besoins spécifiques.",
  },
  {
    title: "Comment garantissez-vous la performance des sites ?",
    content:
      "Nos experts en développement optimisent chaque site pour la vitesse, l'expérience utilisateur, et la compatibilité mobile, assurant une navigation fluide et rapide.",
  },
  {
    title: "Quelles technologies utilisez-vous ?",
    content:
      "Nous maîtrisons les technologies modernes comme React, TypeScript, Tailwind tout en étant à l’aise avec des plateformes populaires comme WordPress et Shopify pour une solution adaptée à chaque projet.",
  },
];

const AccordionExample: React.FC = () => {
  return (
    <div>
      <div className="">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default AccordionExample;
