import { motion, type Variants } from "motion/react";

type WordPullUpProps = {
  words: string;
  className?: string;
};

const wrapper: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const word: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

export function WordPullUp({ words, className = "" }: WordPullUpProps) {
  return (
    <motion.h2 variants={wrapper} initial="hidden" animate="show" className={className}>
      {words.split(" ").map((item, index) => <motion.span key={`${item}-${index}`} variants={word} className="inline-block pr-2">{item}</motion.span>)}
    </motion.h2>
  );
}
