import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Target,
  Clock,
  Lightbulb,
  MessageSquare,
  BarChart3,
  GraduationCap,
  Timer,
  Sparkles,
  Video
} from 'lucide-react';
import ScrollAnimation from 'react-animate-on-scroll';

const features = [
  {
    id: 1,
    title: 'Confidence Boosting Shots',
    description: 'Micro-tests that strengthen your weak areas and track your confidence growth.',
    icon: Target,
    image:
      'https://images.unsplash.com/photo-1758519289990-9f7257a1c6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbmNlJTIwbW90aXZhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY1NjEyOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'Confidence'
  },
  {
    id: 2,
    title: 'On-Demand Tests',
    description: 'Take topic-wise or full-length tests anytime, anywhere – at your own pace.',
    icon: Clock,
    image:
      'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwb25saW5lJTIwdGVzdCUyMGxhcHRvcHxlbnwxfHx8fDE3NjU2MTI5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'On-Demand'
  },
  {
    id: 3,
    title: 'Personalised Recommender',
    description: 'Get smart suggestions on what to study next based on your performance and confidence level.',
    icon: Lightbulb,
    image:
      'https://images.unsplash.com/photo-1717632268406-8f7be56a9f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcGVyc29uYWxpemF0aW9ufGVufDF8fHx8MTc2NTYxMjk0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'Personalised'
  },
  {
    id: 4,
    title: 'AI-Powered Chatbot',
    description: 'Instant academic help, 24/7 guidance, and answers tailored to your learning journey.',
    icon: MessageSquare,
    image:
      'https://images.unsplash.com/photo-1762330470070-249e7c23c8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwZGlnaXRhbCUyMGFzc2lzdGFudHxlbnwxfHx8fDE3NjU2MTI5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'AI-Powered'
  },
  {
    id: 5,
    title: 'Smart Insights Dashboard',
    description: 'Visualize your progress, accuracy, and confidence trends in one place.',
    icon: BarChart3,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzY1NTc5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'Smart Insights'
  },
  {
    id: 6,
    title: 'Teacher-Like Guidance',
    description: 'Experience AI that notices when you doubt yourself and helps you get back on track.',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1561346745-5db62ae43861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZ3VpZGFuY2UlMjBtZW50b3J8ZW58MXx8fHwxNzY1NjEyOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'Teacher-Like'
  },
  {
    id: 7,
    title: '7 Min Confidence Diagnosis',
    description: 'Quick revision tests at a glance to assess your confidence level instantly.',
    icon: Timer,
    image:
      'https://images.unsplash.com/photo-1734024653249-c6ba7b742ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMHRlc3QlMjB0aW1lciUyMGNsb2NrfGVufDF8fHx8MTc2NTYxMjk1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: '7 Min'
  },
  {
    id: 8,
    title: 'Special Tips & Tricks',
    description: 'Unlock expert shortcuts and strategies to ace your exams with confidence.',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1583341655470-c039d25ce01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGJ1bGIlMjB0aXBzJTIwaWRlYXN8ZW58MXx8fHwxNzY1NjEyOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    keyPhrase: 'Special Tips'
  },
  {
    id: 9,
    title: 'Recorded Sessions',
    description: 'Access recorded learning sessions anytime to revisit concepts and strengthen understanding.',
    icon: Video,
    image:
      'https://images.unsplash.com/photo-1663867840919-61fb60270992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHJlY29yZGluZyUyMGxlc3NvbnxlbnwxfHx8fDE3NjU2MjMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyPhrase: 'Recorded'
  }
];

function AnimatedFeatureCard({ feature }) {
  const [showHighlight, setShowHighlight] = useState(false);
  const Icon = feature.icon;

  useEffect(() => {
    const highlightTimer = setTimeout(() => {
      setShowHighlight(true);
    }, 600);

    return () => {
      clearTimeout(highlightTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative w-full h-[500px]'
    >
      <div className='relative w-full h-full rounded-[20px] bg-white/40 backdrop-blur-md p-12 flex flex-col items-center justify-center text-center border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='bg-gradient-to-br from-purple-500 to-blue-600 rounded-[16px] p-6 mb-8 shadow-lg'
        >
          <Icon className='w-16 h-16 text-slate-800' />
        </motion.div>

        <h2 className='mb-6 leading-tight max-w-2xl text-2xl md:text-3xl font-semibold text-slate-800'>
          {feature.title.split(' ').map((word, i) => {
            const isKeyPhrase = feature.keyPhrase.includes(word);
            const firstLetter = word.charAt(0);
            const rest = word.slice(1);
            return (
              <span key={i}>
                {isKeyPhrase ? (
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={
                      showHighlight
                        ? {
                            scale: [1, 1.1, 1],
                            textShadow: [
                              '0 0 0px rgba(147, 51, 234, 0)',
                              '0 0 20px rgba(147, 51, 234, 0.6)',
                              '0 0 0px rgba(147, 51, 234, 0)'
                            ]
                          }
                        : {}
                    }
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='inline-flex'
                  >
                    <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                      {firstLetter}
                    </span>
                    <span className='text-slate-700'>{rest}</span>
                  </motion.span>
                ) : (
                  <span className='text-slate-700'>{word}</span>
                )}{' '}
              </span>
            );
          })}
        </h2>

        <p className='text-slate-600 leading-[1.8] max-w-2xl'>{feature.description}</p>
      </div>
    </motion.div>
  );
}

function BackgroundReveal({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='absolute inset-0 rounded-[20px] overflow-hidden'
    >
      <div className='relative w-full h-full'>
        <div className='aspect-[16/9] w-full h-full'>
          <img src={feature.image} alt={feature.title} className='w-full h-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center text-slate-200 p-12 text-center'>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='mb-4 leading-tight text-slate-800'
          >
            {feature.title}
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-slate-200 leading-[1.8] max-w-2xl'
          >
            {feature.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function WhyChooseInstaPreps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const nextCardTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 6000);

    return () => {
      clearInterval(nextCardTimer);
    };
  }, [isInView]);

  const currentFeature = features[currentIndex];

  return (
    <section ref={sectionRef} className='min-h-screen bg-white py-20 px-6 flex items-center justify-center'>
      <div className='max-w-7xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          <section className='w-full bg-white py-12'>
            {/* <h4 className='text-center text-md md:text-xl font-medium text-gray-800 w-full'>
              Why Choose{' '}
              <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                InstaPreps AI
              </span>{' '}
              – Built to improve confidence, not just scores.
            </h4> */}
            <div className="flex justify-center h-24 lg:w-full w-[80%] m-auto text-center">
                    <ScrollAnimation animateIn="zoomIn" duration={1}>
                      <h3 className="lg:text-5xl text-4xl font-bold text-black">
                        Why choose <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                InstaPreps AI?
              </span>{' '}
                      </h3>
                    </ScrollAnimation>
                  </div>
            
          </section>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]'>
          <div className='relative min-h-[500px] flex items-center justify-center'>
            <AnimatePresence mode='wait'>
              <AnimatedFeatureCard key={currentFeature.id} feature={currentFeature} />
            </AnimatePresence>
          </div>

          <div className='relative min-h-[500px] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.1)]'>
            <AnimatePresence mode='wait'>
              <BackgroundReveal key={`bg-${currentFeature.id}`} feature={currentFeature} />
            </AnimatePresence>
          </div>
        </div>

        <div className='flex justify-center gap-2 mt-12 mb-12'>
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-slate-500/80' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className='text-center mb-8 text-slate-700'>All Features</h3>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`cursor-pointer rounded-[20px] bg-white p-6 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all 
    ${currentIndex === index ? 'ring-2 ring-purple-400/60' : 'hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]'}
  `} */}
                {/* > */}
                  {/* Icon */}
                  {/* <div className='bg-gradient-to-br from-purple-500 to-blue-600 rounded-[14px] p-4 w-fit mb-4 shadow-md'>
                    <Icon className='w-8 h-8 text-slate-800' />
                  </div> */}

                  {/* Title */}
                  {/* <h4 className='text-lg font-medium mb-2 leading-tight'>
                    <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                      {feature.keyPhrase}
                    </span>{' '}
                    {feature.title.replace(feature.keyPhrase, '').trim()}
                  </h4> */}

                  {/* Description */}
                  {/* <p className='text-slate-600 text-sm leading-[1.7]'>{feature.description}</p> */}
                {/* </motion.div>
              );
            })}
          </div> */}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='text-center mt-16'
        >
          <button className='bg-gradient-to-r from-purple-600 to-blue-600 text-slate-100 px-10 py-4 rounded-[20px] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]'>
            Start Your Journey Today
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

export default WhyChooseInstaPreps;
