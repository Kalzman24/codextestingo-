import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Button from './Button';
import { Gauge } from './Gauge';
import { ArrowRight, CheckCircleIcon, ArrowLeft, RefreshCwIcon, MailIcon } from './Icons';

const diagnosisQuestions = [
    { question: "How would you describe your current AI adoption?", options: ["No AI usage", "Experimental phase", "Some AI tools", "Integrated AI strategy"] },
    { question: "What is your organization's data maturity level?", options: ["Data scattered", "Basic analytics", "Advanced analytics", "Predictive insights"] },
    { question: "How automated are your core business processes?", options: ["Mostly manual", "Some automation", "Highly automated", "Autonomous systems"] },
    { question: "What is your team's technical readiness for AI?", options: ["Limited skills", "Some expertise", "AI literate", "AI experts"] },
    { question: "How important is AI transformation to your competitive strategy?", options: ["Not important", "Nice to have", "Important", "Critical"] },
    { question: "What is your budget allocation for AI initiatives?", options: ["No budget", "Limited budget", "Significant budget", "Major investment"] },
    { question: "How quickly does your organization adopt new technologies?", options: ["Very slow", "Cautious", "Moderate", "Early adopter"] },
    { question: "What is your timeline for AI implementation?", options: ["No timeline", "1-2 years", "6-12 months", "Immediate"] }
];

interface AnalysisResult {
    headline: string;
    analysis: string;
    readinessScore: number;
    readinessCategory: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const IntroScreen: React.FC<{onStart: (context: { industry: string; goal: string }) => void, onBack: () => void, theme: 'light' | 'dark'}> = ({ onStart, onBack, theme }) => {
    const [industry, setIndustry] = useState('');
    const [goal, setGoal] = useState('');

    const handleStart = () => {
        if (industry.trim() && goal.trim()) {
            onStart({ industry, goal });
        } else {
            alert("Please provide your industry and a business goal to begin.");
        }
    };
    
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
            <motion.p variants={itemVariants} className={`text-sm font-semibold uppercase tracking-wider mb-3 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>
                Get Your Free AI Readiness Report in Under 1 Minute
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-4">AI Readiness Diagnosis</motion.h2>
            <motion.p variants={itemVariants} className={`text-lg sm:text-xl max-w-3xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
                First, tell us about your business. This context allows our AI to provide a more accurate and relevant analysis.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 max-w-md mx-auto flex flex-col gap-4 text-left">
                 <div>
                    <label htmlFor="industry" className={`block text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-white/80'}`}>Your Industry</label>
                    <input
                        id="industry"
                        type="text"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        placeholder="e.g., E-commerce, Manufacturing, Healthcare"
                        className={`w-full rounded-lg border p-3 bg-transparent focus:ring-2 transition-shadow ${
                            theme === 'light' ? 'border-gray-300 focus:ring-black' : 'border-white/20 focus:ring-white'
                        }`}
                    />
                </div>
                <div>
                    <label htmlFor="goal" className={`block text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-white/80'}`}>Your Primary Business Goal or Challenge</label>
                    <input
                        id="goal"
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="e.g., Reduce operational costs, Increase sales leads"
                        className={`w-full rounded-lg border p-3 bg-transparent focus:ring-2 transition-shadow ${
                            theme === 'light' ? 'border-gray-300 focus:ring-black' : 'border-white/20 focus:ring-white'
                        }`}
                    />
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center gap-4">
                <Button size="lg" onClick={handleStart} className="font-semibold" variant='outline' theme={theme}>
                    Begin Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" onClick={onBack} variant='ghost' theme={theme}>
                    Back
                </Button>
            </motion.div>
        </motion.div>
    );
};

const loadingSteps = [
    "Evaluating AI adoption...",
    "Assessing data maturity...",
    "Analyzing process automation...",
    "Gauging technical readiness...",
    "Calculating readiness score...",
    "Generating personalized insights...",
];

const LoadingScreen: React.FC = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const durationPerStep = 1500; // 1.5 seconds per step
    const totalDuration = (loadingSteps.length - 1) * durationPerStep;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStepIndex((prevIndex) => (prevIndex + 1) % loadingSteps.length);
        }, durationPerStep); 

        return () => clearInterval(interval);
    }, []);
    
    return (
        <motion.div
            key="loading"
            variants={containerVariants} initial="hidden" animate="visible" exit="exit"
            className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <motion.div variants={itemVariants}>
                <RefreshCwIcon className="w-16 h-16 text-white/80 animate-spin"/>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mt-8">Analyzing your results...</motion.h2>
            
            <motion.div variants={itemVariants} className="w-full max-w-xs mx-auto mt-8">
                <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                        className="bg-white h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "95%" }}
                        transition={{ duration: totalDuration / 1000, ease: "linear" }}
                    />
                </div>
            </motion.div>

            <div className="mt-4 text-lg text-white/70 h-8 relative w-full">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentStepIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        {loadingSteps[currentStepIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};


const ResultsScreen: React.FC<{result: AnalysisResult, onRetake: () => void, onFinish: () => void, onContact: () => void, theme: 'light' | 'dark'}> = ({ result, onRetake, onFinish, onContact, theme }) => {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center flex flex-col items-center">
            <motion.div variants={itemVariants}><Gauge value={result.readinessScore} /></motion.div>
            <motion.h3 variants={itemVariants} className={`mt-8 text-3xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{result.readinessCategory}</motion.h3>
            <motion.div variants={itemVariants} className={`mt-10 w-full max-w-3xl text-left p-8 rounded-2xl border ${theme === 'light' ? 'bg-gray-100 border-gray-200' : 'bg-white/5 border-white/10'}`}>
                <h4 className="font-bold text-2xl mb-3">{result.headline}</h4>
                <p className={`${theme === 'light' ? 'text-gray-700' : 'text-white/80'} text-base leading-relaxed`}>{result.analysis}</p>
            </motion.div>
             <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center justify-center gap-4">
                <p className={`mb-2 text-lg font-semibold max-w-2xl ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    This is just the start.
                </p>
                <p className={`mb-4 text-base max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
                    Your results indicate a significant opportunity, but the key is a tailored execution strategy. Let's discuss a detailed roadmap to turn this insight into impact.
                </p>
                <Button size="lg" onClick={onContact} variant={theme === 'dark' ? 'default' : 'dark'} theme={theme} className="font-semibold">
                    Get Your Full Action Plan
                    <MailIcon className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <Button size="sm" onClick={onRetake} variant='outline' theme={theme}>
                        <RefreshCwIcon className="mr-2 h-4 w-4"/>
                        Retake Diagnosis
                    </Button>
                     <Button size="sm" onClick={onFinish} variant='ghost' theme={theme}>
                        Finish
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}

const ContactFormScreen: React.FC<{ onSubmit: (email: string) => void, onBack: () => void, theme: 'light' | 'dark'}> = ({ onSubmit, onBack, theme }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubmitting(true);
      onSubmit(email);
    } else {
        alert("Please enter a valid email address.");
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">Share Your Results</motion.h2>
      <motion.p variants={itemVariants} className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
        Enter your email to send your diagnosis summary to our team. We'll contact you to schedule a complimentary strategy session.
      </motion.p>
      <motion.form variants={itemVariants} onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
          className={`w-full rounded-lg border p-3 bg-transparent focus:ring-2 transition-shadow ${
            theme === 'light' 
            ? 'border-gray-300 focus:ring-black' 
            : 'border-white/20 focus:ring-white'
          }`}
        />
        <Button size="lg" type="submit" variant={theme === 'dark' ? 'default' : 'dark'} theme={theme} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send & Schedule Call'}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </motion.form>
      <motion.div variants={itemVariants} className="mt-4">
        <Button size="sm" onClick={onBack} variant="ghost" theme={theme}>
            <ArrowLeft className="mr-2 h-4 w-4"/> Back to Results
        </Button>
      </motion.div>
    </motion.div>
  );
};

const SuccessScreen: React.FC<{onFinish: () => void, theme: 'light' | 'dark'}> = ({ onFinish, theme }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center flex flex-col items-center">
      <motion.div variants={itemVariants}>
        <CheckCircleIcon className="w-24 h-24 text-green-400" />
      </motion.div>
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mt-8 mb-4">Thank You!</motion.h2>
      <motion.p variants={itemVariants} className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
        Your diagnosis summary has been sent. Our team will review it and get in touch shortly to schedule your strategy session.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-12">
        <Button size="lg" onClick={onFinish} variant={theme === 'dark' ? 'outline' : 'dark'} theme={theme}>
          Done
        </Button>
      </motion.div>
    </motion.div>
  );
};

export const DiagnosisTool: React.FC<{ onFinish: () => void; theme?: 'light' | 'dark' }> = ({ onFinish, theme = 'dark' }) => {
    const [step, setStep] = useState(0); // 0: intro, 1-8: Qs, 9: loading, 10: results, 11: contact, 12: success
    const [answers, setAnswers] = useState<(string | null)[]>(Array(diagnosisQuestions.length).fill(null));
    const [context, setContext] = useState({ industry: '', goal: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

    const fetchAnalysis = async (currentAnswers: (string | null)[]) => {
        setIsLoading(true);
        setStep(diagnosisQuestions.length); // A temporary step for loading state

        try {
            const response = await fetch('/api/diagnose', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    context,
                    answers: currentAnswers,
                    diagnosisQuestions
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "API request failed");
            }

            const resultJson = await response.json();
            setAnalysisResult(resultJson);
            setStep(diagnosisQuestions.length + 1);
        } catch (error) {
            console.error("Error fetching AI analysis:", error);
            alert("Sorry, we couldn't analyze your results at this time. Please try again.");
            handleRetake();
        } finally {
            setIsLoading(false);
        }
    };

    const handleStart = (userContext: { industry: string; goal: string }) => {
        setContext(userContext);
        setStep(1);
    };

    const handleAnswer = (option: string) => {
        const currentQuestionIndex = step - 1;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = option;
        setAnswers(newAnswers);
        
        if (currentQuestionIndex === diagnosisQuestions.length - 1) {
             setTimeout(() => {
                setIsLoading(true);
                fetchAnalysis(newAnswers);
            }, 300);
        } else {
            setTimeout(() => setStep(prev => prev + 1), 200);
        }
    };

    const handleRetake = () => {
        setAnswers(Array(diagnosisQuestions.length).fill(null));
        setAnalysisResult(null);
        setContext({ industry: '', goal: '' });
        setStep(0);
    };
    
    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleContact = () => setStep(diagnosisQuestions.length + 2);
    const handleBackToResults = () => setStep(diagnosisQuestions.length + 1);
    
    const handleSubmitReport = async (email: string) => {
        if (!analysisResult) return;

        const formattedMessage = `
AI Readiness Diagnosis Report for: ${email}
----------------------------------------------------
Industry: ${context.industry}
Goal/Challenge: ${context.goal}
----------------------------------------------------
Score: ${analysisResult.readinessScore}%
Category: ${analysisResult.readinessCategory}
Headline Analysis: ${analysisResult.headline}
AI Consultant Summary: ${analysisResult.analysis}
----------------------------------------------------
Full Answers:
${diagnosisQuestions.map((q, i) => `Q: ${q.question}\nA: ${answers[i]}`).join('\n\n')}
        `;

        const templateParams = { from_name: email, email: email, message: formattedMessage };
        const emailjs = (window as any).emailjs;

        try {
            await emailjs.send('service_6j8e98r', 'template_d5dd5hl', templateParams);
            setStep(diagnosisQuestions.length + 3);
        } catch (error) {
            console.error('FAILED to send report...', error);
            alert("Failed to send the report. Please check your connection and try again.");
        }
    };

    const currentQuestionIndex = step > 0 && step <= diagnosisQuestions.length ? step - 1 : -1;
    const isQuestionStep = currentQuestionIndex !== -1;
    const isResultsStep = step === diagnosisQuestions.length + 1;
    const isContactStep = step === diagnosisQuestions.length + 2;
    const isSuccessStep = step === diagnosisQuestions.length + 3;

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading" />}
                
                {!isLoading && step === 0 && (
                    <IntroScreen key="intro" onStart={handleStart} onBack={onFinish} theme={theme} />
                )}

                {!isLoading && isQuestionStep && (
                    <motion.div
                        key={currentQuestionIndex}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className={`w-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700/50'} rounded-full h-2 mb-8`}>
                                    <motion.div
                                        className={`${theme === 'light' ? 'bg-black' : 'bg-white'} h-2 rounded-full`}
                                        initial={{width: `${(100 / diagnosisQuestions.length) * (step - 2)}%`}}
                                        animate={{ width: `${(100 / diagnosisQuestions.length) * (step - 1)}%` }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    />
                                </div>
                                <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-white/50'} mb-2`}>Question {step} of {diagnosisQuestions.length}</p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 min-h-[6rem]">{diagnosisQuestions[currentQuestionIndex].question}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {diagnosisQuestions[currentQuestionIndex].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            className={`text-left w-full p-4 rounded-lg border transition-all duration-200 ${theme === 'light' ? 'border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400' : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Button size="sm" variant="ghost" onClick={handleBack} disabled={step <= 0} theme={theme}>
                                        <ArrowLeft className="mr-2 h-4 w-4"/> Back
                                    </Button>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 w-full h-80 lg:h-full rounded-2xl overflow-hidden hidden lg:block">
                                <img 
                                    src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
                                    alt="AI Diagnosis"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {!isLoading && isResultsStep && analysisResult && (
                    <ResultsScreen key="results" result={analysisResult} onRetake={handleRetake} onFinish={onFinish} onContact={handleContact} theme={theme} />
                )}
                {!isLoading && isContactStep && (
                    <ContactFormScreen key="contact" onSubmit={handleSubmitReport} onBack={handleBackToResults} theme={theme} />
                )}
                {!isLoading && isSuccessStep && (
                    <SuccessScreen key="success" onFinish={onFinish} theme={theme} />
                )}

            </AnimatePresence>
        </div>
    );
};