const Razorpay = require('razorpay');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  const keyId = process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID_TEST;
  const keySecret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET_TEST;

  if (!keyId || !keySecret) {
    return res.status(500).json({
      success: false,
      error: 'Razorpay keys missing. Set RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET (or *_TEST) in env.'
    });
  }

  const { amount, currency = 'INR', planId } = req.body || {};

  if (typeof amount !== 'number' || Number.isNaN(amount) || amount <= 0) {
    return res.status(400).json({ success: false, error: 'Amount must be a positive number (in rupees).' });
  }

  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

  const options = {
    amount: Math.round(amount * 100), // convert rupees to paise
    currency,
    receipt: `premium_${planId || 'generic'}_${Date.now()}`,
    payment_capture: 1
  };

  try {
    const order = await razorpay.orders.create(options);
    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Razorpay order error:', error);
    return res.status(500).json({ success: false, error: 'Unable to create order. Try again later.' });
  }
};
