import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyText } from "./GooeyText";
import Button from "./Button";
import { ArrowRight } from "./Icons";
import { DiagnosisTool } from "./DiagnosisTool";

const taglineTexts = ["Strategy.", "Execution.", "Outcomes."];

type FinalHookSectionProps = {
  id: string;
};

export const FinalHookSection: React.FC<FinalHookSectionProps> = React.memo(({ id }) => {
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  const handleStart = () => setShowDiagnosis(true);
  const handleFinish = () => setShowDiagnosis(false);

  return (
    <section id={id} className="bg-white text-black py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          {!showDiagnosis ? (
            <motion.div
              key="hook-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <GooeyText
                texts={taglineTexts}
                className="h-48 flex items-center justify-center"
                textClassName="font-bold text-5xl md:text-7xl lg:text-8xl"
              />
              <p className="mt-8 text-lg md:text-xl text-gray-600 tracking-wide">
                Black and white. No noise.
              </p>
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={handleStart}
                  size="lg"
                  variant="dark"
                  className="font-semibold shadow-2xl shadow-black/20"
                >
                  Start a diagnosis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="diagnosis-content"
              className="bg-[#0a0a0a] text-white rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <DiagnosisTool onFinish={handleFinish} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});