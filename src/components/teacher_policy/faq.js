import React from 'react';

const Faq = () => {
  return (
    <div className='lg:w-[85%] w-[90%] m-auto'>
      <h2 className='text-3xl font-bold text-black px-2'>Frequently Asked Questions (FAQs)</h2>
      <div className='py-10'>
        <div className='space-y-8 px-2 overflow-hidden'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-semibold text-blue-600'>How does InstaPreps App Work?</h2>
            <p className='text-xl font-medium text-gray-500'>
              As a coach, it is important for you to choose your subjects and topics of interest so that you can get
              connected to the right students. InstaPreps is a one-to-one coaching and confidence boosting app. When a
              student asks a doubt by posting a question (image / text), you will be notified on the app. You will be
              able to see the question beforehand so that you can decide whether you want to pick up the call or not. If
              you choose to answer the question, you will be connected to the student via audio or a video call.
              Ideally, it should not take more than 10-15 minutes to solve the student’s question. But you are free to
              extend the call if you feel the student needs a better understanding of the concept. After the call is
              completed, it will be saved in your history dashboard. There will be a bimonthly payment based on the time
              you spend to solve the doubts.
            </p>
          </div>

          <div className='space-y-6'>
            <h2 className='lg:text-3xl text-2xl font-semibold text-blue-600'>
              What is the registration process of the InstaPreps App?
            </h2>
            <p className='text-xl font-medium text-gray-500'>
              Post your screening and profile completion, there are certain formalities that you will need to complete
              for verification purposes. You will need to follow a KYC process - this will include your information and
              a video-based KYC. KYC will require submitting your college or a valid photo ID with a photo on the app
              for verification. You will also need to get the PAN card verification done so that we are able to pay you
              on time without any hassles. It normally takes 48 hours to verify but you can take calls on InstaPreps
              irrespective of it. All your calls are being saved in our database.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='lg:text-3xl text-2xl font-semibold text-blue-600 max-w-4xl'>
              When and how will I receive my payments from the InstaPreps App?
            </h2>
            <div className='space-y-6'>
              <p className='text-xl font-medium text-gray-500'>
                Our payment cycle is in the <strong className='text-black'>1st week</strong>of every alternate month via
                bank transfer.
              </p>
              <p className='text-xl font-medium text-gray-500'>
                You will receive a notification on the app with the details of your earnings. You can also see the
                details of your earnings on the Teachers dashboard in the App.
              </p>
              <div className='space-y-4'>
                <p className='text-2xl text-black font-bold'>Note:</p>
                <div className='space-y-2'>
                  <div className='flex gap-4'>
                    <p className=' rounded-full w-2 h-2 bg-blue-600' />
                    <p className='-mt-2 text-xl text-gray-500 font-normal'>
                      You'll be eligible for the withdrawal once your earnings cross INR 100.
                    </p>
                  </div>
                  <div className='flex gap-4'>
                    <p className=' rounded-full w-2 h-2 bg-blue-600' />
                    <p className='-mt-2 text-xl text-gray-500 font-normal'>
                      From the day of billing it takes 5-7 working days to transfer the payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <h2 className='lg:text-3xl text-2xl font-bold text-blue-600'>
          What is the compensation offered by InstaPreps App?
        </h2>
        <div className='space-y-6 mt-6'>
          <h2 className='lg:text-2xl text-xl font-normal text-gray-600'>The compensation is as follows -</h2>
          <div className='flex gap-4'>
            <p className=' rounded-full w-2 h-2 bg-blue-600' />
            <p className='-mt-2 text-lg text-gray-500 font-normal'>
              You'll be eligible for the withdrawal once your earnings cross INR 100.
            </p>
          </div>
          <div className='flex gap-4'>
            <p className=' rounded-full w-2 h-2 bg-blue-600' />
            <div className=''>
              <p className='-mt-2 text-lg text-gray-500 font-medium '>
                0 min to 15 minutes (from 6th minute) : Rs. 8/min
              </p>
              <p className='text-lg text-gray-500 font-normal '>
                Eg: ₹140 for 20mins call (15mins*₹8/min) + (5mins*₹4/min)
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <p className=' rounded-full w-2 h-2 bg-blue-600' />
            <div className=''>
              <p className='-mt-2 text-lg text-gray-500 font-normal '>
                16th min to 25 minutes (from 16th minute) : Rs. 4/min
              </p>
              <p className='text-lg text-gray-500 font-normal '>
                Eg: ₹140 for 20mins call (15mins*₹8/min) + (5mins*₹4/min)
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <p className=' rounded-full w-2 h-2 bg-blue-600' />
            <div className=''>
              <p className='-mt-2 text-lg text-gray-500 font-normal '>
                16th min to 25 minutes (from 16th minute) : Rs. 4/min
              </p>
              <p className='text-lg text-gray-500 font-normal '>
                Eg: ₹200 for 40mins call (15mins*₹8/min) + (15mins*₹4/min) + (10mins*₹2/min)
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <p className=' rounded-full w-2 h-2 bg-blue-600' />
            <div className=''>
              <p className='-mt-2 text-lg text-gray-500 font-normal '>From 45th min onward : Rs. 0/min</p>
              <p className='text-lg text-gray-500 font-normal '>
                Eg: ₹210 for 50mins(or higher) call (15mins*₹8/min) + (15mins*₹4/min) + (15mins*₹2/min) + (5mins*₹0/min)
              </p>
            </div>
          </div>
          <div className='py-6'>
            <p className='text-xl text-gray-500 font-normal'>
              <strong className='text-black font-bold'> Important -</strong> The per hour call rates are built by the
              minutes. Total billing for a single call increases linearly up to 15 minutes and after that
              logarithmically. You're advised not to take unnecessary lengthy calls beyond 15 minutes. We would
              incentivize taking more calls and not long calls. E.g., You take 4 calls of 15 mins in an hour, you get
              full compensation.
            </p>
            <p className='text-xl text-gray-500 font-normal mt-4'>
              You take 1 call of 60 minutes; you will end up making 50% of what you could have made by having 4
              different calls of 15 - 20 minutes with different students.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='space-y-6 px-2'>
          <div className='space-y-4'>
            <h2 className='text-2xl text-blue-600 font-bold'>
              Do I have to spend a fixed number of hours on the InstaPreps App?
            </h2>
            <div className='space-y-4'>
              <p className='text-xl font-medium text-gray-500'>
                Since the InstaPreps coaches are not full time, we have made sure that they are not burdened with the
                work. As a coach, it entirely depends upon you whether you want to work. You exercise full liberty over
                your decisions whether you want to take a call at a specific time or not or what questions you want to
                respond to.
              </p>
              <p className='text-xl font-medium text-gray-500'>
                You are not compelled to come online if you are busy with any other engagements. At times, even if you
                are not able to come online for a whole day, it is not an issue for us. This is a student-friendly
                internship where you yourself decide when you want to work and how much you want to work. There are no
                deadlines or targets that you have to achieve and you will be paid according to the amount of time you
                have spent on call, whenever you are able to take them.
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            <h2 className='text-2xl text-blue-600 font-bold'>Is my privacy intact in the InstaPreps App?</h2>
            <div className=''>
              <p className='text-xl font-medium text-gray-500'>
                Respecting the privacy of an individual is our core policy and you need not worry about anything
                endangering your privacy. Your personal information stays just with the organization and will not be
                shared with anyone. Make sure you don't share your contact on InstaPreps call & also don’t ask for it
                from students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
