import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import ScrollAnimation from 'react-animate-on-scroll';
import VerticalSidebar from 'src/components/VerticalSidebar';

const PremiumPage = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPaying, setIsPaying] = useState(false);

  const ensureRazorpayScript = () =>
    new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return reject(new Error('Window unavailable'));
      if (window.Razorpay) return resolve(true);

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
      document.body.appendChild(script);
    });

  const createOrder = async (plan) => {
    const res = await fetch('/api/razorpay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: plan.price, currency: 'INR', planId: plan.id })
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.error || 'Unable to create order');
    }

    const data = await res.json();
    return data.order;
  };

  const openCheckout = (order, plan) => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!key) {
      alert('Razorpay key missing. Set NEXT_PUBLIC_RAZORPAY_KEY_ID in .env.local');
      setIsPaying(false);
      return;
    }

    const options = {
      key,
      amount: order.amount,
      currency: order.currency,
      name: 'InstaPreps Premium',
      description: `${plan.name} plan`,
      order_id: order.id,
      notes: { planId: plan.id },
      theme: { color: '#4f46e5' },
      handler: (response) => {
        setSelectedPlan(plan.id);
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        setIsPaying(false);
      },
      modal: {
        ondismiss: () => setIsPaying(false)
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', (err) => {
      console.error('Payment failed', err);
      alert('Payment failed. Please try again.');
      setIsPaying(false);
    });

    rzp.open();
  };

  const handleJoinClick = async (plan) => {
    setSelectedPlan(plan.id);
    setIsPaying(true);
    try {
      await ensureRazorpayScript();
      const order = await createOrder(plan);
      openCheckout(order, plan);
    } catch (err) {
      console.error(err);
      alert(err.message || 'Unable to initiate payment.');
      setIsPaying(false);
    }
  };

  const premiumFeatures = [
    {
      icon: '📚',
      title: 'Verified Tutors',
      description: 'Tutors verified by InstaPreps team'
    },
    {
      icon: '🎥',
      title: 'Lifelong recordings',
      description: 'Never lose access to what you study'
    },
    {
      icon: '🤝',
      title: 'Direct Connect',
      description: 'Connect directly to your favourite tutor'
    },
    {
      icon: '24/7',
      title: '24x7 Doubt Solving',
      description: 'No limit to the number of sessions you can have'
    }
  ];

  const pricingPlans = [
    {
      id: 'lite',
      name: 'Lite',
      duration: '1 Day',
      description: 'Check your confidence issue immediately, and solve your doubt.',
      price: 49,
      originalPrice: 99,
      cta: 'Join at INR 49',
      features: ['1 Day Access', 'Verified Tutors', 'Direct Connect']
    },
    {
      id: 'plus',
      name: 'Plus',
      duration: '1 Month',
      description: 'Preparation incomplete for the upcoming exam? Use InstaPreps Premium to learn fast',
      price: 999,
      originalPrice: 1299,
      cta: 'Join at INR 999',
      features: ['1 Month Access', 'All Premium Features', 'Lifelong Recordings']
    }
  ];

  return (
    <>
      <Head>
        <title>InstaPreps Premium - Unlimited Access to Expert Tutors</title>
        <meta
          name='description'
          content='Join InstaPreps Premium for unlimited access to verified tutors, 24x7 doubt solving, and lifelong recordings.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100'>
        {/* Header */}
        <div className='hidden md:block'>
          <VerticalSidebar />
        </div>

        <div className='transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 80px)' }}>
          {/* Hero Section */}
          <section className='relative overflow-hidden py-24 px-4'>
            <div className='absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-300/30 via-cyan-200/20 to-transparent rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-300/20 via-indigo-200/10 to-transparent rounded-full blur-3xl pointer-events-none' />

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              <ScrollAnimation animateIn='fadeInDown' duration={1}>
                <div className='text-center md:text-left'>
                  <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-4'>
                    Introducing{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500'>
                      InstaPreps Premium
                    </span>
                  </h1>
                  <p className='text-lg md:text-xl text-slate-700 mb-6'>
                    Unlimited access to the teachers that you actually like — focused mentorship when you need it.
                  </p>

                  <p className='text-md text-slate-600 mb-8 max-w-xl'>
                    Join the world's only platform for instant 1:1 mentorship — recorded lessons, priority support and
                    personalised feedback.
                  </p>

                  <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
                    <button
                      onClick={() => handleJoinClick(pricingPlans[1])}
                      className='inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-800 font-semibold px-6 py-3 shadow-lg transform hover:-translate-y-0.5 transition'
                    >
                      Join Plus — Rs. 999 / month
                    </button>

                    <button
                      onClick={() => handleJoinClick(pricingPlans[0])}
                      className='inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-800 px-5 py-3 hover:shadow-md transition'
                    >
                      Try 1-Day — Rs. 49
                    </button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right: Accent card */}
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <div className='relative'>
                  <div className='bg-white/60 backdrop-blur-md border border-slate-100 rounded-2xl p-6 shadow-xl'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <div className='text-sm text-slate-500 uppercase tracking-wider'>Premium</div>
                        <div className='text-xl font-bold text-slate-900'>InstaPreps — Core</div>
                      </div>
                      <div className='text-right'>
                        <div className='text-xs text-slate-500'>From</div>
                        <div className='text-3xl font-extrabold text-cyan-500'>
                          ₹999<span className='text-sm text-slate-400 font-medium'>/mo</span>
                        </div>
                      </div>
                    </div>

                    <ul className='mt-4 space-y-2 text-slate-700'>
                      <li className='flex items-center gap-3'>
                        <span className='bg-cyan-100 text-cyan-600 rounded-md px-2 py-1 text-sm font-semibold'>✓</span>{' '}
                        Verified tutors
                      </li>
                      <li className='flex items-center gap-3'>
                        <span className='bg-indigo-100 text-indigo-600 rounded-md px-2 py-1 text-sm font-semibold'>
                          ✓
                        </span>{' '}
                        Lifelong recordings
                      </li>
                      <li className='flex items-center gap-3'>
                        <span className='bg-purple-100 text-purple-600 rounded-md px-2 py-1 text-sm font-semibold'>
                          ✓
                        </span>{' '}
                        Priority doubts
                      </li>
                    </ul>

                    <div className='mt-6 flex gap-3'>
                      <button
                        onClick={() => handleJoinClick(pricingPlans[1])}
                        className='flex-1 rounded-lg bg-cyan-500 text-slate-900 font-semibold py-2 hover:opacity-95 transition'
                      >
                        Get Started
                      </button>
                      <button
                        onClick={() => router.push('/pricing')}
                        className='rounded-lg px-4 py-2 border border-slate-200 bg-white text-slate-700 hover:shadow-sm transition'
                      >
                        Compare plans
                      </button>
                    </div>
                  </div>

                  <div className='absolute -bottom-6 left-6 text-xs text-slate-500'>
                    Try the Lite plan for quick doubt checks.
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Features Section */}
          <section className='py-20 px-4 bg-transparent'>
            <div className='max-w-6xl mx-auto'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900'>
                  Benefits of <span className='text-cyan-500'>InstaPreps Premium</span>
                </h2>
              </ScrollAnimation>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {premiumFeatures.map((feature, index) => (
                  <ScrollAnimation key={index} animateIn='zoomIn' duration={1}>
                    <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition border border-slate-100 flex gap-4 items-start'>
                      <div className='w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-slate-800 shadow-inner'>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-slate-900 mb-1'>{feature.title}</h3>
                        <p className='text-slate-600'>{feature.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900'>Choose your plan</h2>
                <p className='text-center text-slate-600 mb-12'>
                  Flexible options for quick doubt fixes or month-long deep practice.
                </p>
              </ScrollAnimation>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
                {pricingPlans.map((plan) => (
                  <ScrollAnimation key={plan.id} animateIn='zoomIn' duration={1}>
                    <div
                      className={`rounded-2xl p-8 transition transform hover:-translate-y-1 
                         'bg-gradient-to-br from-white to-indigo-50 border border-indigo-100'
                shadow-md`}
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <div>
                          <h3 className='text-2xl font-bold text-slate-900'>{plan.name}</h3>
                          <p className='text-sm text-slate-500'>{plan.duration}</p>
                        </div>
                        <div className='text-right'>
                          <div className='text-sm text-slate-500 line-through'>₹{plan.originalPrice}.00</div>
                          <div className='text-3xl font-extrabold text-slate-900'>₹{plan.price}.00</div>
                        </div>
                      </div>

                      <p className='text-slate-700 mb-6'>{plan.description}</p>

                      <button
                        onClick={() => handleJoinClick(plan)}
                        className='w-full rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-indigo-600 py-3 font-semibold mb-6 hover:shadow-lg transform hover:-translate-y-0.5 transition'
                      >
                        {plan.cta}
                      </button>

                      <ul className='space-y-2 text-slate-700'>
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className='flex items-center gap-3'>
                            <span className='inline-flex items-center justify-center w-7 h-7 rounded bg-slate-100 text-cyan-500 font-semibold'>
                              {idx + 1}
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* Trial Section */}
          <section className='py-16 px-4 bg-gradient-to-r from-white to-slate-50'>
            <div className='max-w-4xl mx-auto text-center'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl font-bold mb-4 text-slate-900'>Not sure yet?</h2>
                <p className='text-lg text-slate-600 mb-8'>Try a one-day package to see the difference for yourself.</p>
                <button
                  onClick={() => handleJoinClick(pricingPlans[0])}
                  className='inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-white px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-slate-800 transition'
                >
                  Join at Rs. 49 for 1 day
                </button>
              </ScrollAnimation>
            </div>
          </section>

          {/* How it Works Section */}
          <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900'>
                  How to Join InstaPreps Premium?
                </h2>
              </ScrollAnimation>

              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {[
                  { step: '1', title: 'Sign Up', desc: 'Create your InstaPreps account' },
                  { step: '2', title: 'Choose Plan', desc: 'Select your preferred plan' },
                  { step: '3', title: 'Payment', desc: 'Complete the payment securely' },
                  { step: '4', title: 'Access', desc: 'Enjoy unlimited access immediately' }
                ].map((item, idx) => (
                  <ScrollAnimation key={idx} animateIn='zoomIn' duration={1}>
                    <div className='text-center bg-white rounded-2xl p-6 shadow-sm border border-slate-100'>
                      <div className='mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-2xl font-semibold'>
                        {item.step}
                      </div>
                      <h3 className='text-lg font-bold text-slate-900 mb-2'>{item.title}</h3>
                      <p className='text-slate-600'>{item.desc}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className='py-20 px-4 bg-slate-50'>
            <div className='max-w-4xl mx-auto'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl font-bold text-center mb-12 text-slate-900'>Frequently Asked Questions</h2>
              </ScrollAnimation>

              <div className='space-y-6'>
                {[
                  {
                    q: 'Can I cancel my subscription anytime?',
                    a: 'Yes, you can cancel your subscription anytime. No hidden charges or long-term commitment required.'
                  },
                  {
                    q: 'Will I get access to recordings after cancellation?',
                    a: 'Your access continues until your subscription period ends. After that, you will lose access to the premium features.'
                  },
                  {
                    q: 'Can I switch to a different plan?',
                    a: 'Yes, you can upgrade or downgrade your plan anytime. The changes will reflect in your next billing cycle.'
                  },
                  {
                    q: 'What payment methods are accepted?',
                    a: 'We accept all major credit/debit cards, UPI, and other digital payment methods for your convenience.'
                  }
                ].map((faq, idx) => (
                  <ScrollAnimation key={idx} animateIn='fadeInUp' duration={1}>
                    <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100'>
                      <h3 className='text-xl font-semibold text-slate-900 mb-3'>{faq.q}</h3>
                      <p className='text-slate-600'>{faq.a}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='bg-gradient-to-r from-indigo-600 to-cyan-500 py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center text-indigo-50'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to transform your learning?</h2>
                <p className='text-lg mb-8'>Join thousands of students already benefiting from InstaPreps Premium</p>
                <button
                  onClick={() => handleJoinClick(pricingPlans[0])}
                  className='inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-bold py-3 px-8 hover:scale-[1.02] transition shadow-lg'
                >
                  Start Your Free Trial - Rs. 49 for 1 Day
                </button>
              </ScrollAnimation>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PremiumPage;
